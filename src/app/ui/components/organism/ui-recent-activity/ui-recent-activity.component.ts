import { Component, inject, signal } from '@angular/core'
import { Board } from '@core/domain/entities'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { BoardRecentFacade } from '@infrastructure/storage/facades/board-recent.facade'

@Component({
	selector: 'app-ui-recent-activity',
	standalone: false,
	templateUrl: './ui-recent-activity.component.html',
	styles: ``,
})
export class UiRecentActivityComponent {
	boardRecentFacade = inject(BoardRecentFacade)
	faClock = faClock
	boards = signal<Board[]>([])

	ngOnInit() {
		this.boardRecentFacade.boardsRecent$.subscribe((boards) => {
			this.boards.set(boards)
		})
	}
}
