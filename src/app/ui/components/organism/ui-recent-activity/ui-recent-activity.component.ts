import { Component } from '@angular/core'
import { Board } from '@core/domain/entities'
import { faClock } from '@fortawesome/free-solid-svg-icons'

@Component({
	selector: 'app-ui-recent-activity',
	standalone: false,
	templateUrl: './ui-recent-activity.component.html',
	styles: ``,
})
export class UiRecentActivityComponent {
	faClock = faClock
	boards: Board[] = [
		{
			id: '1',
			name: 'Board 1',
			image: 'https://picsum.photos/600/200',
		},
	]
}
