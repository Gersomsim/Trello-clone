import {
	CdkDragDrop,
	moveItemInArray,
	transferArrayItem,
} from '@angular/cdk/drag-drop'
import { Component, inject, Input, Output, EventEmitter } from '@angular/core'
import { List } from '@core/domain/entities'
import { Task } from '@core/domain/entities/task.entity'
import { ListFacade } from '@infrastructure/storage/facades/list.facade'

@Component({
	selector: 'app-ui-list-task',
	standalone: false,
	templateUrl: './ui-list-task.component.html',
	styles: ``,
})
export class UiListTaskComponent {
	listFacade = inject(ListFacade)
	@Input() list!: List
	@Input() listId!: string
	@Input() allLists: List[] = []
	@Output() dropEvent = new EventEmitter<{
		previousContainer: { data: Task[]; id: string }
		container: { data: Task[]; id: string }
		previousIndex: number
		currentIndex: number
	}>()

	addClass(task: Task) {
		const tasks = this.list.tasks
		tasks.push(task)
		this.list.tasks = tasks
		this.listFacade.updateList(this.list)
	}
	updateTask(task: Task) {
		const tasks = this.list.tasks
		const index = tasks.findIndex((t) => t.id === task.id)
		tasks[index] = task
		this.list.tasks = tasks
		this.listFacade.updateList(this.list)
	}
	deleteTask(task: Task) {
		const tasks = this.list.tasks
		const index = tasks.findIndex((t) => t.id === task.id)
		tasks.splice(index, 1)
		this.list.tasks = tasks
		this.listFacade.updateList(this.list)
	}

	drop($event: CdkDragDrop<Task[], any, any>) {
		//Vamos a actualizar el orden de las tareas
		if ($event.previousContainer === $event.container) {
			const tasks = this.list.tasks
			moveItemInArray(tasks, $event.previousIndex, $event.currentIndex)
			this.list.tasks = tasks
			this.listFacade.updateList(this.list)
		} else {
			// Emitir evento para que el componente padre maneje la transferencia entre listas
			this.dropEvent.emit({
				previousContainer: {
					data: $event.previousContainer.data,
					id: $event.previousContainer.id,
				},
				container: {
					data: $event.container.data,
					id: $event.container.id,
				},
				previousIndex: $event.previousIndex,
				currentIndex: $event.currentIndex,
			})
		}
	}

	getConnectedDropLists(): string[] {
		// Retornar los IDs de todas las listas excepto la actual
		return this.allLists
			.filter((list) => list.id !== this.listId)
			.map((list) => list.id)
	}
}
