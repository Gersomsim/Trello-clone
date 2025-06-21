import { Component, EventEmitter, inject, Input, Output } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Workspace } from '@core/domain/entities'
import { AlertsService } from '@infrastructure/libs/alerts.service'
import { WorkspaceFacade } from '@infrastructure/storage/facades/workspace.facade'

@Component({
	selector: 'app-ui-edit-workspace',
	standalone: false,
	templateUrl: './ui-edit-workspace.component.html',
	styles: ``,
})
export class UiEditWorkspaceComponent {
	fb = inject(FormBuilder)

	@Input() workspace!: Workspace
	@Output() close = new EventEmitter<void>()

	workspaceFacade = inject(WorkspaceFacade)
	form!: FormGroup

	ngOnInit() {
		this.form = this.fb.group({
			name: [this.workspace.name, Validators.required],
			public: [this.workspace.public],
		})
	}

	save() {
		this.workspaceFacade.updateWorkspace({
			...this.workspace,
			name: this.form.value.name,
		})
		this.close.emit()
		AlertsService.toast().success('Workspace updated')
	}

	// escuchar el enter o scape para guardar o cancelar
	handleKeyUp(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			this.save()
		}
	}
}
