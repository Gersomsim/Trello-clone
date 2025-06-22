import { inject, Injectable } from '@angular/core'

import { BoardRecentStore } from '../store/board-recent.store'
import { Board } from '@core/domain/entities'
import { BehaviorSubject } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class BoardRecentFacade {
	boardsRecent$ = new BehaviorSubject<Board[]>([])
	store = inject(BoardRecentStore)

	addBoard(board: Board) {
		this.store.selectAllEntities().subscribe((boards) => {
			const boardIndex = boards.findIndex((b) => b.id === board.id)
			if (boardIndex !== -1) {
				if (boards.length === 4) {
					this.store.removeEntity(boards[0].id)
				}
				if (boardIndex !== 0) {
					this.reorderBoard(board, boardIndex, boards)
				}
			} else {
				this.store.addEntity(board)
			}
		})
	}

	loadBoards(): void {
		this.store.selectAllEntities().subscribe((boards) => {
			this.boardsRecent$.next(boards)
		})
	}
	// reordenar el board reciente
	reorderBoard(board: Board, index: number, boards: Board[]) {
		const newBoards = [...boards]
		newBoards.splice(index, 1)
		newBoards.unshift(board)
		this.store.setEntities(newBoards)
	}
}
