import { Injectable } from '@angular/core'
import { Board } from '@core/domain/entities'
import { BaseStore } from './common/base.store'

@Injectable({ providedIn: 'root' })
export class BoardStore extends BaseStore<Board> {
	constructor() {
		super('board', true)
	}
}
