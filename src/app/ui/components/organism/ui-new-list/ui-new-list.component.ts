import { Component, signal } from '@angular/core'
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'

@Component({
	selector: 'app-ui-new-list',
	standalone: false,
	templateUrl: './ui-new-list.component.html',
	styles: ``,
})
export class UiNewListComponent {
	faPlus = faPlus
	faXmark = faXmark
	isOpen = signal(false)

	toggleIsOpen() {
		this.isOpen.set(!this.isOpen())
	}
}
