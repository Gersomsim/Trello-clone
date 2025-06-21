import { Component, Input } from '@angular/core'
import { Board } from '@core/domain/entities'
import { bgColors } from '../../utils/bg-colors.util'

@Component({
	selector: 'app-ui-preview-board',
	standalone: false,
	templateUrl: './ui-preview-board.component.html',
	styles: ``,
})
export class UiPreviewBoardComponent {
	@Input() board!: Board
	bgColors = bgColors
}
