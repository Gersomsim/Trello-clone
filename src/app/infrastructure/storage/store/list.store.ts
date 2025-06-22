import { List } from '@core/domain/entities'
import { BaseStore } from './common/base.store'
import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class ListStore extends BaseStore<List> {
	constructor() {
		super('list', true)
	}
}
