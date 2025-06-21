import { Injectable } from '@angular/core'
import { WorkspaceStore } from '../store/workspace.store'
import { Workspace } from '@core/domain/entities'
import { BehaviorSubject, zip } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class WorkspaceFacade {
	workspaces$ = new BehaviorSubject<Workspace[]>([])
	workspace$ = new BehaviorSubject<Workspace | null>(null)

	constructor(private readonly workspaceStore: WorkspaceStore) {}

	createWorkspace(workspace: Workspace) {
		this.workspaceStore.addEntity(workspace)
	}

	getWorkspaceById(id: string): void {
		this.workspaceStore.selectEntityById(id).subscribe((workspace) => {
			this.workspace$.next(workspace ?? null)
		})
	}

	loadWorkspaces(): Promise<Workspace[]> {
		this.workspaceStore.selectAllEntities().subscribe((workspaces) => {
			this.workspaces$.next(workspaces)
			if (workspaces.length === 0) {
				this.createWorkspace({
					id: '95839283',
					name: 'Workspace 1',
					public: false,
				})
			}
		})
		return Promise.resolve([])
	}

	updateWorkspace(workspace: Workspace) {
		this.workspaceStore.updateEntity(workspace)
	}

	deleteWorkspace(id: string) {
		this.workspaceStore.removeEntity(id)
	}
}
