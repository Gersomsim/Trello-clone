import { Component, inject, signal } from '@angular/core'
import { faWaveSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrello } from '@fortawesome/free-brands-svg-icons'
import { User } from '@core/domain/entities/user.entity'
import { WorkspaceFacade } from '@infrastructure/storage/facades/workspace.facade'
import { Workspace } from '@core/domain/entities'
import { BoardRecentFacade } from '@infrastructure/storage/facades/board-recent.facade'

@Component({
	selector: 'app-ui-aside-board',
	standalone: false,
	templateUrl: './ui-aside-board.component.html',
	styles: ``,
})
export class UiAsideBoardComponent {
	workspaceFacade = inject(WorkspaceFacade)
	boardRecentFacade = inject(BoardRecentFacade)
	workspaces = signal<Workspace[]>([])
	user: User = {
		id: '1',
		email: 'test@test.com',
		username: 'test',
	}
	faTrello = faTrello
	faWaveSquare = faWaveSquare

	ngOnInit() {
		this.workspaceFacade.loadWorkspaces()
		this.workspaceFacade.workspaces$.subscribe((workspaces) => {
			this.workspaces.set(workspaces)
		})
		this.boardRecentFacade.loadBoards()
	}
}
