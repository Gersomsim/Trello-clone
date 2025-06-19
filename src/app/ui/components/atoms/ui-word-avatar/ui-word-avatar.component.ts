import { Component, Input } from '@angular/core'
import { SizeType } from '../../types/size.type'

@Component({
	selector: 'app-ui-word-avatar',
	standalone: false,
	templateUrl: './ui-word-avatar.component.html',
	styles: ``,
})
export class UiWordAvatarComponent {
	@Input() name: string = ''
	@Input() size: SizeType = 'md'
	@Input() limit = false

	getKey(name: string) {
		return this.limit ? name[0] : name
	}

	getSize() {
		switch (this.size) {
			case 'sm':
				return 'w-5 h-5 rounded object-cover'
			case 'md':
				return 'w-6 h-6 rounded object-cover'
			case 'lg':
				return 'w-16 h-16 rounded object-cover'
			case 'xl':
				return 'w-24 h-24 rounded object-cover'
			default:
				return 'w-6 h-6 rounded object-cover'
		}
	}
}
