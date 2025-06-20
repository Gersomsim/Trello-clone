import { Component, Input } from '@angular/core'
import { Board, Workspace } from '@core/domain/entities'
import { faTrello } from '@fortawesome/free-brands-svg-icons'
import { faCog, faEllipsis, faUser } from '@fortawesome/free-solid-svg-icons'

@Component({
	selector: 'app-ui-preview-workspace',
	standalone: false,
	templateUrl: './ui-preview-workspace.component.html',
	styles: ``,
})
export class UiPreviewWorkspaceComponent {
	@Input() workspace!: Workspace
	@Input() boards: Board[] = [
		{
			id: '1',
			name: 'Board 1',
			image: 'https://picsum.photos/600/200',
		},
		{
			id: '2',
			name: 'Board 2',
			image: 'https://picsum.photos/600/200',
		},
	]
	faCog = faCog
	faUser = faUser
	faTrello = faTrello
}
