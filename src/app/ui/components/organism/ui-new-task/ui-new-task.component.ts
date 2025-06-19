import { Component, signal } from '@angular/core'
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'

@Component({
	selector: 'app-ui-new-task',
	standalone: false,
	templateUrl: './ui-new-task.component.html',
	styles: ``,
})
export class UiNewTaskComponent {
	isOpen = signal(false)
	faPlus = faPlus
	faXmark = faXmark

	toggleIsOpen() {
		this.isOpen.set(!this.isOpen())
	}
}
