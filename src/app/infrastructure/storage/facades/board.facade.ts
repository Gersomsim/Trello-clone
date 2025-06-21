import { Injectable } from '@angular/core'
import { BoardStore } from '../store/board.store'
import { Board } from '@core/domain/entities'
import { BehaviorSubject } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class BoardFacade {
	board$ = new BehaviorSubject<Board | undefined>(undefined)
	boards$ = new BehaviorSubject<Board[]>([])

	constructor(private readonly boardStore: BoardStore) {}

	createBoard(board: Board) {
		this.boardStore.addEntity(board)
	}

	getBoardById(id: string): void {
		this.boardStore.selectEntityById(id).subscribe((board) => {
			this.board$.next(board)
		})
	}

	getBoardsByWorkspaceId(workspaceId: string): void {
		this.boardStore.selectAllEntities().subscribe((boards) => {
			const boardsByWorkspace = boards.filter(
				(board) => board.workspaceId === workspaceId,
			)
			this.boards$.next(boardsByWorkspace)
		})
	}

	loadBoards(): void {
		this.boardStore.selectAllEntities().subscribe((boards) => {
			this.boards$.next(boards)
			if (boards.length === 0) {
				this.createBoard({
					id: '56721',
					name: 'Board Example',
					image: 'https://picsum.photos/600/200',
					visibility: 'private',
					workspaceId: '95839283',
				})
			}
		})
	}

	updateBoard(board: Board) {
		this.boardStore.updateEntity(board)
	}

	deleteBoard(id: string) {
		this.boardStore.removeEntity(id)
	}
}
