import { Component, signal } from '@angular/core'
import { ComponentsModule } from '../../../ui/components/components.module'
import { BoardLayoutComponent } from '../../../ui/layouts/board-layout/board-layout.component'
import { NgClass } from '@angular/common'
import { Board } from '@core/domain/entities'
import { FaIconComponent } from '@fortawesome/angular-fontawesome'
import { faPenToSquare, faShare } from '@fortawesome/free-solid-svg-icons'
import { UiNewTaskComponent } from '../../../ui/components/organism/ui-new-task/ui-new-task.component'

@Component({
	selector: 'app-board-task-page',
	imports: [BoardLayoutComponent, ComponentsModule, FaIconComponent],
	templateUrl: './board-task-page.component.html',
	styles: ``,
})
export class BoardTaskPageComponent {
	faShare = faShare
	faPencil = faPenToSquare
	isOpen = signal(false)
	board = signal<Board | null>({
		id: '1',
		name: 'Board 1',
		image: 'https://picsum.photos/1600/900',
	})
}
