import { Component } from '@angular/core'
import { faWaveSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrello } from '@fortawesome/free-brands-svg-icons'

@Component({
	selector: 'app-ui-aside-board',
	standalone: false,
	templateUrl: './ui-aside-board.component.html',
	styles: ``,
})
export class UiAsideBoardComponent {
	faTrello = faTrello
	faWaveSquare = faWaveSquare
}
