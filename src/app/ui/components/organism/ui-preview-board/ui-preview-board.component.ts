import { Component, Input } from '@angular/core'
import { Board } from '@core/domain/entities'

@Component({
	selector: 'app-ui-preview-board',
	standalone: false,
	templateUrl: './ui-preview-board.component.html',
	styles: ``,
})
export class UiPreviewBoardComponent {
	@Input() board!: Board
}
