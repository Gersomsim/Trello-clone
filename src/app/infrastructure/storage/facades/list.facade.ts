import { Injectable } from '@angular/core'
import { ListStore } from '../store/list.store'
import { List } from '@core/domain/entities'
import { BehaviorSubject } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class ListFacade {
	lists$ = new BehaviorSubject<List[]>([])
	list$ = new BehaviorSubject<List | null>(null)

	constructor(private readonly listStore: ListStore) {}

	loadLists() {
		this.listStore.selectAllEntities().subscribe((lists) => {
			this.lists$.next(lists)
		})
	}

	loadListsByBoardId(boardId: string) {
		this.listStore.selectAllEntities().subscribe((lists) => {
			this.lists$.next(lists.filter((list) => list.boardId === boardId))
		})
	}

	createList(list: List) {
		this.listStore.addEntity(list)
	}

	updateList(list: List) {
		this.listStore.updateEntity(list)
	}

	deleteList(id: string) {
		this.listStore.removeEntity(id)
	}
}
