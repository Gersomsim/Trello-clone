import { Component, inject, Input, signal } from '@angular/core'
import { Board, Workspace } from '@core/domain/entities'
import { faTrello } from '@fortawesome/free-brands-svg-icons'
import { faCog, faUser } from '@fortawesome/free-solid-svg-icons'
import { BoardFacade } from '@infrastructure/storage/facades/board.facade'

@Component({
	selector: 'app-ui-preview-workspace',
	standalone: false,
	templateUrl: './ui-preview-workspace.component.html',
	styles: ``,
})
export class UiPreviewWorkspaceComponent {
	boardFacade = inject(BoardFacade)
	@Input() workspace!: Workspace
	boards = signal<Board[]>([])

	faCog = faCog
	faUser = faUser
	faTrello = faTrello

	ngOnInit() {
		this.boardFacade.getBoardsByWorkspaceId(this.workspace.id)
		this.boardFacade.boards$.subscribe((boards) => {
			this.boards.set(boards)
		})
	}
}
