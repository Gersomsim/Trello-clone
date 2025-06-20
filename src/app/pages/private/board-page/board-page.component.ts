import { Component, signal } from '@angular/core'
import { ComponentsModule } from '../../../ui/components/components.module'
import { Workspace } from '@core/domain/entities'
import { RouterModule } from '@angular/router'

@Component({
	selector: 'app-board-page',
	imports: [ComponentsModule, RouterModule],
	templateUrl: './board-page.component.html',
	styles: ``,
})
export class BoardPageComponent {
	workspaces = signal<Workspace[]>([
		{
			id: '1',
			name: 'Workspace 1',
			public: true,
		},
		{
			id: '2',
			name: 'Workspace 2',
			public: false,
		},
	])
}
