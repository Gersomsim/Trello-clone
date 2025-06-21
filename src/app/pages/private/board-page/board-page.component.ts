import { Component, inject, signal } from '@angular/core'
import { ComponentsModule } from '../../../ui/components/components.module'
import { Workspace } from '@core/domain/entities'
import { RouterModule } from '@angular/router'
import { WorkspaceFacade } from '@infrastructure/storage/facades/workspace.facade'

@Component({
	selector: 'app-board-page',
	imports: [ComponentsModule, RouterModule],
	templateUrl: './board-page.component.html',
	styles: ``,
})
export class BoardPageComponent {
	workspaceFacade = inject(WorkspaceFacade)

	workspaces = signal<Workspace[]>([])

	ngOnInit() {
		this.workspaceFacade.workspaces$.subscribe((workspaces) => {
			this.workspaces.set(workspaces)
		})
	}
}
