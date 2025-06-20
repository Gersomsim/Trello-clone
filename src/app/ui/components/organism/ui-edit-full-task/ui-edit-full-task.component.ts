import { Component, inject } from '@angular/core'
import { Dialog } from '@angular/cdk/dialog'
import {
	faCheck,
	faCheckSquare,
	faClock,
	faPlus,
	faTag,
	faUserPlus,
	faXmark,
	faAlignJustify,
} from '@fortawesome/free-solid-svg-icons'
import { Task } from '@core/domain/entities/task.entity'

@Component({
	selector: 'app-ui-edit-full-task',
	standalone: false,
	templateUrl: './ui-edit-full-task.component.html',
	styles: ``,
})
export class UiEditFullTaskComponent {
	faXmark = faXmark
	faCheck = faCheck
	faPlus = faPlus
	faTag = faTag
	faClock = faClock
	faCheckSquare = faCheckSquare
	faUserPlus = faUserPlus
	faAlignJustify = faAlignJustify

	dialog = inject(Dialog)
	task: Task = {
		id: '1',
		name: 'Tarea 1',
		description: 'Descripción de la tarea 1',
		createdAt: new Date(),
		updatedAt: new Date(),
	}

	closeModal() {
		this.dialog.closeAll()
	}
}
