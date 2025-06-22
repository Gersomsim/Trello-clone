import { Component, inject, signal } from '@angular/core'
import { ComponentsModule } from '../../../ui/components/components.module'
import { Board, List } from '@core/domain/entities'
import { FaIconComponent } from '@fortawesome/angular-fontawesome'
import { faPenToSquare, faShare } from '@fortawesome/free-solid-svg-icons'
import { BoardRecentFacade } from '@infrastructure/storage/facades/board-recent.facade'
import { BoardFacade } from '@infrastructure/storage/facades/board.facade'
import { ActivatedRoute } from '@angular/router'
import { CommonModule } from '@angular/common'
import { bgColors } from '../../../ui/components/utils/bg-colors.util'
import { ListFacade } from '@infrastructure/storage/facades/list.facade'
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop'
import { Task } from '@core/domain/entities/task.entity'

@Component({
	selector: 'app-board-task-page',
	imports: [ComponentsModule, FaIconComponent, CommonModule],
	templateUrl: './board-task-page.component.html',
	styles: ``,
})
export class BoardTaskPageComponent {
	listFacade = inject(ListFacade)
	boardRecentFacade = inject(BoardRecentFacade)
	boardFacade = inject(BoardFacade)
	route = inject(ActivatedRoute)

	bgColors = bgColors
	faShare = faShare
	faPencil = faPenToSquare
	isOpen = signal(false)
	board?: Board
	lists: List[] = []

	ngOnInit() {
		this.boardFacade.board$.subscribe((board) => {
			if (board) {
				this.board = board
				this.boardRecentFacade.addBoard(board)
			}
		})
		this.route.params.subscribe((params) => {
			this.listFacade.loadListsByBoardId(params['boardId'])
			this.boardFacade.getBoardById(params['boardId'])
		})
		this.listFacade.lists$.subscribe((lists) => {
			this.lists = lists
		})
	}

	onDrop(event: {
		previousContainer: { data: Task[]; id: string }
		container: { data: Task[]; id: string }
		previousIndex: number
		currentIndex: number
	}) {
		// Encontrar las listas correspondientes
		const previousList = this.lists.find(
			(list) => list.id === event.previousContainer.id,
		)
		const currentList = this.lists.find((list) => list.id === event.container.id)

		if (previousList && currentList) {
			// Transferir la tarea entre listas
			transferArrayItem(
				previousList.tasks,
				currentList.tasks,
				event.previousIndex,
				event.currentIndex,
			)

			// Actualizar ambas listas en el store
			this.listFacade.updateList(previousList)
			this.listFacade.updateList(currentList)
		}
	}
}
