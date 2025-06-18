import { Component, EventEmitter, Input, Output } from '@angular/core'
import {
	ButtonRounded,
	ButtonSize,
	ButtonType,
	ButtonVariant,
} from '../../types/button.type'

@Component({
	selector: 'app-ui-button',
	standalone: false,
	templateUrl: './ui-button.component.html',
	styles: ``,
})
export class UiButtonComponent {
	@Input() type: ButtonType = 'button'
	@Input() disabled: boolean = false
	@Input() variant: ButtonVariant = 'primary'
	@Input() size: ButtonSize = 'md'
	@Input() fullWidth: boolean = false
	@Input() rounded: ButtonRounded = 'md'

	@Output() Click = new EventEmitter<void>()

	onClick() {
		if (this.disabled) return
		this.Click.emit()
	}

	getButtonClasses() {
		const baseClasses =
			'inline-flex items-center justify-center rounded-md text-sm font-medium focus:outline-none'
		const variantClasses = {
			primary:
				'bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700',
			secondary: 'bg-gray-500 text-white hover:bg-gray-600',
			outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
			ghost: 'text-gray-700 bg-gray-50  dark:text-gray-400 dark:bg-gray-700',
		}

		const sizeClasses = {
			sm: 'px-2 py-1 text-xs',
			md: 'px-4 py-2 text-sm',
			lg: 'px-6 py-3 text-base',
			xl: 'px-8 py-4 text-lg',
		}
		const roundedClasses = {
			sm: 'rounded-sm',
			md: 'rounded-md',
			lg: 'rounded-lg',
			full: 'rounded-full',
			none: 'rounded-none',
		}

		return `${baseClasses} ${variantClasses[this.variant]} ${sizeClasses[this.size]} ${roundedClasses[this.rounded]} ${this.fullWidth ? 'w-full' : ''}`
	}
}
