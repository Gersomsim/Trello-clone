import { Component } from '@angular/core'
import { faWaveSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrello } from '@fortawesome/free-brands-svg-icons'
import { User } from '@core/domain/entities/user.entity'

@Component({
	selector: 'app-ui-aside-board',
	standalone: false,
	templateUrl: './ui-aside-board.component.html',
	styles: ``,
})
export class UiAsideBoardComponent {
	user: User = {
		id: '1',
		email: 'test@test.com',
		username: 'test',
	}
	faTrello = faTrello
	faWaveSquare = faWaveSquare
}
