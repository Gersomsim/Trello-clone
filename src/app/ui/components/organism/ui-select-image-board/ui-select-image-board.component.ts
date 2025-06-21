import { Component, EventEmitter, inject, Output } from '@angular/core'
import { DomSanitizer, SafeUrl } from '@angular/platform-browser'
import { bgColors, BgColorType } from '../../utils/bg-colors.util'

@Component({
	selector: 'app-ui-select-image-board',
	standalone: false,
	templateUrl: './ui-select-image-board.component.html',
	styles: ``,
})
export class UiSelectImageBoardComponent {
	domSanitizer = inject(DomSanitizer)
	@Output() imageSelected = new EventEmitter<string>()
	@Output() colorSelected = new EventEmitter<BgColorType>()

	images = [
		'https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?q=80&w=1792&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/37/IHLjdHdzSvi0rgUMMlSK_TE3_0286.jpg?q=80&w=2834&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	]
	bgColors = bgColors

	selectImage(image: string) {
		this.imageSelected.emit(image)
	}

	selectColor(color: BgColorType) {
		this.colorSelected.emit(color)
	}
	safeUrl(url: string): SafeUrl {
		return this.domSanitizer.bypassSecurityTrustUrl(url)
	}
}
