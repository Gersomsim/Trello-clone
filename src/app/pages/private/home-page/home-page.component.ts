import { Component, inject, signal } from '@angular/core'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { ComponentsModule } from '../../../ui/components/components.module'
import { Workspace } from '@core/domain/entities'
import { WorkspaceFacade } from '@infrastructure/storage/facades/workspace.facade'

@Component({
	selector: 'app-home-page',
	imports: [FontAwesomeModule, ComponentsModule],
	templateUrl: './home-page.component.html',
	styles: ``,
})
export class HomePageComponent {
	workspaceFacade = inject(WorkspaceFacade)
	faClock = faClock
	workspaces = signal<Workspace[]>([])

	ngOnInit() {
		this.workspaceFacade.workspaces$.subscribe((workspaces) => {
			this.workspaces.set(workspaces)
		})
	}
}
