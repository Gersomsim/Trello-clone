import { Component, inject, signal } from '@angular/core'
import { ComponentsModule } from '../../../ui/components/components.module'
import { Board, Workspace } from '@core/domain/entities'
import {
	faLock,
	faLockOpen,
	faPencil,
	faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { WorkspaceFacade } from '@infrastructure/storage/facades/workspace.facade'
import { ActivatedRoute } from '@angular/router'
import { BoardFacade } from '@infrastructure/storage/facades/board.facade'

@Component({
	selector: 'app-workspace-dashboard-page',
	imports: [ComponentsModule, FontAwesomeModule],
	templateUrl: './workspace-dashboard-page.component.html',
	styles: ``,
})
export class WorkspaceDashboardPageComponent {
	workspaceFacade = inject(WorkspaceFacade)
	boardFacade = inject(BoardFacade)
	route = inject(ActivatedRoute)

	workspace?: Workspace
	boards = signal<Board[]>([])
	workspacePlaceholder: Workspace = {
		id: '',
		name: 'Loading...',
		public: false,
	}
	enableEdit = signal(false)

	faPencil = faPencil
	faLock = faLock
	faLockOpen = faLockOpen
	faUser = faUser

	ngOnInit() {
		this.route.params.subscribe((params) => {
			this.workspaceFacade.getWorkspaceById(params['workspaceId'])
		})

		this.workspaceFacade.workspace$.subscribe((workspace) => {
			if (workspace) {
				this.workspace = workspace
				this.loadBoards(workspace.id)
			}
		})
		this.boardFacade.boards$.subscribe((boards) => {
			this.boards.set(boards)
		})
	}
	loadBoards(workspaceId: string) {
		this.boardFacade.getBoardsByWorkspaceId(workspaceId)
	}
}
