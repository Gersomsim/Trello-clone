import { Component, Input } from '@angular/core'
import {
	ButtonRounded,
	ButtonSize,
	ButtonVariant,
} from '../../types/button.type'
import { classButton } from '../../utils/class-button.util'

@Component({
	selector: 'app-ui-link',
	standalone: false,
	template: `
		<a [routerLink]="routerLink" [class]="getButtonClasses()">
			<ng-content></ng-content>
		</a>
	`,
	styles: ``,
})
export class UiLinkComponent {
	@Input() type: 'link' | 'button' = 'link'
	// button
	@Input() disabled: boolean = false
	@Input() variant: ButtonVariant = 'primary'
	@Input() size: ButtonSize = 'md'
	@Input() fullWidth: boolean = false
	@Input() rounded: ButtonRounded = 'md'
	@Input() addClass: string = ''
	@Input() routerLink: string = ''

	getButtonClasses() {
		if (this.type === 'button') {
			return classButton(
				this.variant,
				this.size,
				this.rounded,
				this.fullWidth,
				this.addClass,
			)
		}
		const sizeClasses = {
			sm: 'text-xs',
			md: 'text-sm',
			lg: 'text-base',
			xl: 'text-lg',
		}
		return `text-sm ${sizeClasses[this.size]} ${this.addClass} cursor-pointer hover:underline`
	}
}
