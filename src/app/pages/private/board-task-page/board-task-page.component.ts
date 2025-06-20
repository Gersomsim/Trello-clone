import { Component, signal } from '@angular/core'
import { ComponentsModule } from '../../../ui/components/components.module'
import { Board } from '@core/domain/entities'
import { FaIconComponent } from '@fortawesome/angular-fontawesome'
import { faPenToSquare, faShare } from '@fortawesome/free-solid-svg-icons'
import { Task } from '@core/domain/entities/task.entity'

@Component({
	selector: 'app-board-task-page',
	imports: [ComponentsModule, FaIconComponent],
	templateUrl: './board-task-page.component.html',
	styles: ``,
})
export class BoardTaskPageComponent {
	faShare = faShare
	faPencil = faPenToSquare
	isOpen = signal(false)
	board = signal<Board | null>({
		id: '1',
		name: 'Board 1',
		image: 'https://picsum.photos/1600/900',
	})
	tasks: Task[] = [
		{
			id: '1',
			name: 'Task 1',
			description: 'Description 1',
			createdAt: new Date(),
			updatedAt: new Date(),
		},
	]
}
