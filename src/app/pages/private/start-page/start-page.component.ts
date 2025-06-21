import { Component, inject } from '@angular/core'
import { ComponentsModule } from '../../../ui/components/components.module'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { Board } from '@core/domain/entities'
import { BoardRecentFacade } from '@infrastructure/storage/facades/board-recent.facade'
import { CommonModule } from '@angular/common'
import { bgColors } from '../../../ui/components/utils/bg-colors.util'

@Component({
	selector: 'app-start-page',
	imports: [ComponentsModule, FontAwesomeModule, CommonModule],
	templateUrl: './start-page.component.html',
	styles: ``,
})
export class StartPageComponent {
	boardRecentFacade = inject(BoardRecentFacade)
	faClock = faClock
	recentActivity: Board[] = []
	bgColors = bgColors
	ngOnInit() {
		this.boardRecentFacade.loadBoards()
		this.boardRecentFacade.boardsRecent$.subscribe((boards) => {
			this.recentActivity = boards
		})
	}
}
