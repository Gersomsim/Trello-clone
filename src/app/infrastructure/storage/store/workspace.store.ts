import { Injectable } from '@angular/core'
import { BaseStore } from './common/base.store'
import { Workspace } from '@core/domain/entities'

@Injectable({ providedIn: 'root' })
export class WorkspaceStore extends BaseStore<Workspace> {
	constructor() {
		super('workspace', true)
	}
}
