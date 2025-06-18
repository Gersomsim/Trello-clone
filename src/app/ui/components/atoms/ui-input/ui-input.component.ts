import { Component, ElementRef, Input, ViewChild } from '@angular/core'
import { InputType } from '../../types/input.type'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
import { distinctUntilChanged, fromEvent, map, Subject, takeUntil } from 'rxjs'

@Component({
	selector: 'app-ui-input',
	standalone: false,
	templateUrl: './ui-input.component.html',
	styles: ``,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: UiInputComponent,
			multi: true,
		},
	],
})
export class UiInputComponent implements ControlValueAccessor {
	@ViewChild('inputElement') inputElement!: ElementRef<HTMLInputElement>
	@Input('inputType') type: InputType = 'text'
	@Input('inputId') id: string = ''
	@Input() placeholder: string = ''
	@Input() disabled: boolean = false

	valueChanges$ = new Subject<string>()
	destroy$ = new Subject<void>()

	onChange: (value: string) => void = () => {}
	onTouched: () => void = () => {}

	private currentValue: string = ''

	ngAfterViewInit(): void {
		this.updateInputValue(this.currentValue)

		this.setupValueChanges()
	}

	setupValueChanges(): void {
		fromEvent(this.inputElement.nativeElement, 'input')
			.pipe(
				map((event) => (event.target as HTMLInputElement).value),
				distinctUntilChanged(),
				takeUntil(this.destroy$),
			)
			.subscribe((value) => {
				this.onChange(value)
				this.onTouched()
				this.valueChanges$.next(value)
			})
	}

	updateInputValue(value: string): void {
		this.currentValue = value
		this.inputElement.nativeElement.value =
			value !== null && value !== undefined ? value : ''
	}

	// ControlValueAccessor
	writeValue(value: string): void {
		this.currentValue = value
		this.updateInputValue(value)
	}
	registerOnChange(fn: any): void {
		this.onChange = fn
	}
	registerOnTouched(fn: any): void {
		this.onTouched = fn
	}
	setDisabledState?(isDisabled: boolean): void {
		this.disabled = isDisabled
		if (this.inputElement?.nativeElement) {
			this.inputElement.nativeElement.disabled = isDisabled
		}
	}
}
