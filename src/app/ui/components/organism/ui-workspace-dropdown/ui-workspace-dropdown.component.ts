import { Component, Input, signal } from '@angular/core'
import {
	faChevronDown,
	faChevronRight,
	faChevronUp,
	faCog,
	faPlus,
	faUsers,
} from '@fortawesome/free-solid-svg-icons'
import { faTrello } from '@fortawesome/free-brands-svg-icons'
import { Workspace } from '@core/domain/entities'

@Component({
	selector: 'app-ui-workspace-dropdown',
	standalone: false,
	templateUrl: './ui-workspace-dropdown.component.html',
	styles: ``,
})
export class UiWorkspaceDropdownComponent {
	@Input() workspaces: Workspace[] = []

	/// Icons
	faChevronDown = faChevronDown
	faPlus = faPlus
	faChevronRight = faChevronRight
	faChevronUp = faChevronUp
	faTrello = faTrello
	faUsers = faUsers
	faCog = faCog

	/// State
	isOpen = signal(false)

	ngOnInit() {}

	getKey(name: string) {
		return name
			.split(' ')
			.map((word) => word[0])
			.join('')
	}
}
