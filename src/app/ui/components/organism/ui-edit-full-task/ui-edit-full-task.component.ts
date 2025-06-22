import { Component, ElementRef, inject, ViewChild } from '@angular/core'
import { Dialog, DIALOG_DATA } from '@angular/cdk/dialog'
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
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ListFacade } from '@infrastructure/storage/facades/list.facade'
import { debounceTime } from 'rxjs'

interface EditFullTaskData {
	task: Task
	listId: string
}

@Component({
	selector: 'app-ui-edit-full-task',
	standalone: false,
	templateUrl: './ui-edit-full-task.component.html',
	styles: ``,
})
export class UiEditFullTaskComponent {
	@ViewChild('description') description!: ElementRef<HTMLTextAreaElement>
	listsFacade = inject(ListFacade)
	fb = inject(FormBuilder)
	data = inject<EditFullTaskData>(DIALOG_DATA)
	dialog = inject(Dialog)

	faXmark = faXmark
	faCheck = faCheck
	faPlus = faPlus
	faTag = faTag
	faClock = faClock
	faCheckSquare = faCheckSquare
	faUserPlus = faUserPlus
	faAlignJustify = faAlignJustify
	editName = false
	editDescription = false

	task: Task = this.data.task

	form: FormGroup = this.fb.group({
		name: [this.task.name, Validators.required],
		description: [this.task.description, Validators.required],
	})
	ngOnInit() {}

	closeModal() {
		this.dialog.closeAll()
	}
	editTask() {
		this.editName = false
		this.editDescription = false
		const { name, description } = this.form.value
		this.task.name = name
		this.task.description = description
		this.saveTask()
	}

	saveTask() {
		this.listsFacade.lists$.subscribe((lists) => {
			const list = lists.find((list) => list.id === this.data.listId)
			if (list) {
				list.tasks = list.tasks.map((task) =>
					task.id === this.task.id ? this.task : task,
				)
			}
		})
	}
	editDescriptionAndFocus() {
		this.editDescription = true
		setTimeout(() => {
			this.description.nativeElement.focus()
		}, 100)
	}
}
