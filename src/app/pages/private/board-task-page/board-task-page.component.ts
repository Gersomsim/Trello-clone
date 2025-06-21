import { Component, inject, signal } from '@angular/core'
import { ComponentsModule } from '../../../ui/components/components.module'
import { Board } from '@core/domain/entities'
import { FaIconComponent } from '@fortawesome/angular-fontawesome'
import { faPenToSquare, faShare } from '@fortawesome/free-solid-svg-icons'
import { Task } from '@core/domain/entities/task.entity'
import { BoardRecentFacade } from '@infrastructure/storage/facades/board-recent.facade'
import { BoardFacade } from '@infrastructure/storage/facades/board.facade'
import { ActivatedRoute } from '@angular/router'
import { CommonModule, NgClass } from '@angular/common'
import { bgColors } from '../../../ui/components/utils/bg-colors.util'

@Component({
	selector: 'app-board-task-page',
	imports: [ComponentsModule, FaIconComponent, CommonModule],
	templateUrl: './board-task-page.component.html',
	styles: ``,
})
export class BoardTaskPageComponent {
	bgColors = bgColors
	boardRecentFacade = inject(BoardRecentFacade)
	boardFacade = inject(BoardFacade)
	route = inject(ActivatedRoute)
	faShare = faShare
	faPencil = faPenToSquare
	isOpen = signal(false)
	board?: Board
	tasks: Task[] = [
		{
			id: '1',
			name: 'Task 1',
			description: 'Description 1',
			createdAt: new Date(),
			updatedAt: new Date(),
		},
	]

	ngOnInit() {
		this.boardFacade.board$.subscribe((board) => {
			if (board) {
				this.board = board
				this.boardRecentFacade.addBoard(board)
			}
		})
		this.route.params.subscribe((params) => {
			this.boardFacade.getBoardById(params['boardId'])
		})
	}
}
