import { Component, EventEmitter, inject, Output, signal } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Task } from '@core/domain/entities/task.entity'
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { AlertsService } from '@infrastructure/libs/alerts.service'

@Component({
	selector: 'app-ui-new-task',
	standalone: false,
	templateUrl: './ui-new-task.component.html',
	styles: ``,
})
export class UiNewTaskComponent {
	fb = inject(FormBuilder)
	@Output() taskCreated = new EventEmitter<Task>()
	form: FormGroup = this.fb.group({
		name: ['', Validators.required],
	})
	isOpen = signal(false)
	faPlus = faPlus
	faXmark = faXmark

	toggleIsOpen() {
		this.isOpen.set(!this.isOpen())
	}
	createTask() {
		if (!this.form.valid) {
			AlertsService.toast().error('Please fill all the fields')
			this.form.markAllAsTouched()
			return
		}
		const task: Task = {
			...this.form.value,
			description: '',
			done: false,
			id: crypto.randomUUID(),
		}
		this.taskCreated.emit(task)
		this.toggleIsOpen()
		this.form.reset()
	}
}
