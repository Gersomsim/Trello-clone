import {
	Component,
	EventEmitter,
	inject,
	Input,
	Output,
	SimpleChanges,
} from '@angular/core'
import { BoardFacade } from '@infrastructure/storage/facades/board.facade'
import { FormBuilder, Validators } from '@angular/forms'
import { Board } from '@core/domain/entities'
import { AlertsService } from '@infrastructure/libs/alerts.service'

@Component({
	selector: 'app-ui-form-new-board',
	standalone: false,
	templateUrl: './ui-form-new-board.component.html',
	styles: ``,
})
export class UiFormNewBoardComponent {
	@Input() workspaceId?: string
	@Input() image?: string
	@Input() color?: string
	@Output() boardCreated = new EventEmitter<void>()

	boardFacade = inject(BoardFacade)
	fb = inject(FormBuilder)

	form = this.fb.group({
		id: [this.randomUUID()],
		name: ['', [Validators.required, Validators.minLength(3)]],
		image: [''],
		color: [''],
		workspaceId: [''],
		visibility: ['private'],
	})

	ngOnChanges(changes: SimpleChanges) {
		if (changes['image']) {
			this.form.patchValue({
				image: this.image,
			})
		}
		if (changes['color']) {
			this.form.patchValue({
				color: this.color,
			})
		}
		if (changes['workspaceId']) {
			this.form.patchValue({
				workspaceId: this.workspaceId,
			})
		}
	}

	createBoard() {
		if (this.form.invalid) {
			this.form.markAllAsTouched()
			AlertsService.toast().error('Please fill all the fields')
		}

		this.boardFacade.createBoard(this.form.value as Board)
		this.boardCreated.emit()
	}
	randomUUID() {
		return crypto.randomUUID()
	}
}
