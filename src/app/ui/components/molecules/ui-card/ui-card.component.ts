import { Component, Input } from '@angular/core'

@Component({
	selector: 'app-ui-card',
	standalone: false,
	templateUrl: './ui-card.component.html',
	styles: ``,
})
export class UiCardComponent {
	@Input() image?: string
}
