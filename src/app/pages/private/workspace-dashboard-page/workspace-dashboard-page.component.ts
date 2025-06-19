import { Component, signal } from '@angular/core'
import { ComponentsModule } from '../../../ui/components/components.module'
import { Workspace } from '@core/domain/entities'
import {
	faLock,
	faLockOpen,
	faPencil,
	faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@Component({
	selector: 'app-workspace-dashboard-page',
	imports: [ComponentsModule, FontAwesomeModule],
	templateUrl: './workspace-dashboard-page.component.html',
	styles: ``,
})
export class WorkspaceDashboardPageComponent {
	workspace = signal<Workspace>({
		id: '1',
		name: 'Workspace 1',
		public: false,
	})

	faPencil = faPencil
	faLock = faLock
	faLockOpen = faLockOpen
	faUser = faUser
}
