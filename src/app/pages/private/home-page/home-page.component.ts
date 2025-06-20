import { Component } from '@angular/core'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { ComponentsModule } from '../../../ui/components/components.module'
import { Workspace } from '@core/domain/entities'

@Component({
	selector: 'app-home-page',
	imports: [FontAwesomeModule, ComponentsModule],
	templateUrl: './home-page.component.html',
	styles: ``,
})
export class HomePageComponent {
	faClock = faClock
	workspaces: Workspace[] = [
		{
			id: '1',
			name: 'Workspace 1',
			public: true,
			members: 10,
		},
	]
}
