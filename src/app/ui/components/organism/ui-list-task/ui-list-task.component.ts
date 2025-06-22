import { Component, inject, Input } from '@angular/core'
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
}
