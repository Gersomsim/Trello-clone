import { ConnectionPositionPair } from '@angular/cdk/overlay'
import { Component, effect, signal } from '@angular/core'

@Component({
	selector: 'app-ui-new-board',
	standalone: false,
	templateUrl: './ui-new-board.component.html',
	styles: ``,
})
export class UiNewBoardComponent {
	isOpen = signal(false)

	toggle() {
		this.isOpen.set(!this.isOpen())
	}

	rightSidePositions: ConnectionPositionPair[] = [
		new ConnectionPositionPair(
			{ originX: 'end', originY: 'bottom' },
			{ overlayX: 'start', overlayY: 'center' },
			10,
			0,
		),
		new ConnectionPositionPair(
			{ originX: 'start', originY: 'bottom' },
			{ overlayX: 'start', overlayY: 'bottom' },
			10,
			-10,
		),
	]

	constructor() {
		// Efecto para cerrar al hacer clic fuera
		effect(() => {
			if (this.isOpen()) {
				setTimeout(() => {
					document.addEventListener('click', this.closeOnClickOutside.bind(this))
				})
			} else {
				document.removeEventListener('click', this.closeOnClickOutside.bind(this))
			}
		})
	}

	private closeOnClickOutside(event: MouseEvent) {
		const overlayPane = document.querySelector('.cdk-overlay-pane')
		const triggerElement = document.querySelector('[cdkoverlayorigin]')

		if (
			!overlayPane?.contains(event.target as Node) &&
			!triggerElement?.contains(event.target as Node)
		) {
			this.isOpen.set(false)
		}
	}
}
