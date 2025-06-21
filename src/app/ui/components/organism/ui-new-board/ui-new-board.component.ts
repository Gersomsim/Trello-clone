import { ConnectionPositionPair } from '@angular/cdk/overlay'
import { Component, effect, inject, Input, signal } from '@angular/core'
import { SizeType } from '../../types/size.type'
import { bgColors, BgColorType } from '../../utils/bg-colors.util'

@Component({
	selector: 'app-ui-new-board',
	standalone: false,
	templateUrl: './ui-new-board.component.html',
	styles: ``,
})
export class UiNewBoardComponent {
	@Input() image?: string
	@Input() workspaceId?: string
	@Input() size: SizeType = 'xl'
	@Input() color?: BgColorType

	bgColors = bgColors
	isOpen = signal(false)

	rightSidePositions: ConnectionPositionPair[] = [
		new ConnectionPositionPair(
			{ originX: 'end', originY: 'bottom' },
			{ overlayX: 'start', overlayY: 'center' },
			10,
			0,
		),
		new ConnectionPositionPair(
			{ originX: 'start', originY: 'bottom' },
			{ overlayX: 'end', overlayY: 'center' },
			-10,
			10,
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
		this.image = 'https://picsum.photos/600/200'
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
	loadImage(image: string) {
		this.image = image
		this.color = undefined
	}
	loadColor(color: BgColorType) {
		this.color = color
		this.image = undefined
	}
	getClasses() {
		const baseClasses =
			'flex items-center gap-2 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 w-full h-full justify-center cursor-pointer '
		const sizeClasses = {
			sm: 'min-h-10',
			md: 'min-h-12',
			lg: 'min-h-16',
			xl: 'min-h-24',
		}
		return `${baseClasses} ${sizeClasses[this.size]}`
	}

	toggle() {
		this.isOpen.set(!this.isOpen())
	}
	loadBoardCreated() {
		this.isOpen.set(false)
	}
}
