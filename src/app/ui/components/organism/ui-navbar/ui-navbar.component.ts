import { Component } from '@angular/core'
import {
	faQuestion,
	faUser,
	faBell,
	faShare,
} from '@fortawesome/free-solid-svg-icons'

@Component({
	selector: 'app-ui-navbar',
	standalone: false,
	templateUrl: './ui-navbar.component.html',
	styles: ``,
})
export class UiNavbarComponent {
	faUser = faUser
	faQuestion = faQuestion
	faBell = faBell
	faShare = faShare
}
