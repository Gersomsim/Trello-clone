import { Component, Input } from '@angular/core'
import { SizeType } from '../../types/size.type'

@Component({
	selector: 'app-ui-label',
	standalone: false,
	template: `
		<label [for]="labelFor" [class]="getLabelClasses()">
			{{ label }}
		</label>
	`,
	styles: ``,
})
export class UiLabelComponent {
	@Input() label?: string
	@Input() labelFor?: string
	@Input() size: SizeType = 'md'

	getLabelClasses() {
		const sizeClasses = {
			sm: 'text-sm',
			md: 'text-base',
			lg: 'text-lg',
			xl: 'text-xl',
		}
		return `text-gray-800 dark:text-gray-300 ${sizeClasses[this.size]}`
	}

	ngOnInit() {
		if (!this.label) {
			throw new Error('Label is required')
		}
	}
}
