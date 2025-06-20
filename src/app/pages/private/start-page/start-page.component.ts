import { Component } from '@angular/core'
import { ComponentsModule } from '../../../ui/components/components.module'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { Board } from '@core/domain/entities'

@Component({
	selector: 'app-start-page',
	imports: [ComponentsModule, FontAwesomeModule],
	templateUrl: './start-page.component.html',
	styles: ``,
})
export class StartPageComponent {
	faClock = faClock
	recentActivity: Board[] = [
		{
			id: '1',
			name: 'Board 1',
			image: 'https://picsum.photos/600/200',
			meta: {
				workspaceName: 'Workspace 1',
			},
		},
		{
			id: '2',
			name: 'Board 2',
			image: 'https://picsum.photos/600/200',
			meta: {
				workspaceName: 'Workspace 2',
			},
		},
	]
}
