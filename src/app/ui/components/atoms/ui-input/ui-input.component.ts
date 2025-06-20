import { Component, ElementRef, Input, ViewChild } from '@angular/core'
import { InputType } from '../../types/input.type'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
import { distinctUntilChanged, fromEvent, map, Subject, takeUntil } from 'rxjs'
import { SizeType } from '../../types/size.type'

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
	@Input() size: SizeType = 'md'

	valueChanges$ = new Subject<string>()
	destroy$ = new Subject<void>()

	onChange: (value: string) => void = () => {}
	onTouched: () => void = () => {}

	private currentValue: string = ''

	getInputClasses() {
		const baseClasses =
			'font-light border border-gray-300 text-gray-900 rounded focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'

		const sizeClasses = {
			sm: 'text-xs p-1',
			md: 'text-sm p-2',
			lg: 'text-base p-3',
			xl: 'text-lg p-4',
		}
		return `${baseClasses} ${sizeClasses[this.size]}`
	}

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

	private updateInputValue(value: any): void {
		if (this.inputElement?.nativeElement) {
			this.inputElement.nativeElement.value =
				value !== null && value !== undefined ? value : ''
		}
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
