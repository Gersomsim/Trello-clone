import { Component, inject, Input, signal } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { List } from '@core/domain/entities'
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { AlertsService } from '@infrastructure/libs/alerts.service'
import { ListFacade } from '@infrastructure/storage/facades/list.facade'

@Component({
	selector: 'app-ui-new-list',
	standalone: false,
	templateUrl: './ui-new-list.component.html',
	styles: ``,
})
export class UiNewListComponent {
	@Input() boardId!: string
	listFacade = inject(ListFacade)
	fb = inject(FormBuilder)

	form: FormGroup = this.fb.group({
		name: ['', Validators.required],
	})

	faPlus = faPlus
	faXmark = faXmark

	isOpen = signal(false)

	toggleIsOpen() {
		this.isOpen.set(!this.isOpen())
	}

	createList() {
		if (!this.form.valid) {
			this.form.markAllAsTouched()
			AlertsService.toast().error('Please fill all the fields')
			return
		}
		const list: List = {
			id: this.uuidv4(),
			name: this.form.value.name,
			tasks: [],
			boardId: this.boardId,
		}
		this.listFacade.createList(list)
		this.toggleIsOpen()
		this.form.reset()
	}

	uuidv4() {
		return crypto.randomUUID()
	}
}
