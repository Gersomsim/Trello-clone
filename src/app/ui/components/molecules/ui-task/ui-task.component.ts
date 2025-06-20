import { Dialog } from '@angular/cdk/dialog'
import { Component, inject, Input } from '@angular/core'
import { UiEditFullTaskComponent } from '../../organism/ui-edit-full-task/ui-edit-full-task.component'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { Task } from '@core/domain/entities/task.entity'

@Component({
	selector: 'app-ui-task',
	standalone: false,
	templateUrl: './ui-task.component.html',
	styles: ``,
})
export class UiTaskComponent {
	@Input() task!: Task
	dilog = inject(Dialog)
	faPencil = faPenToSquare

	openModal() {
		this.dilog.open(UiEditFullTaskComponent, {
			hasBackdrop: true,
			panelClass: [
				'bg-white',
				'dark:bg-slate-900',
				'rounded-lg',
				'shadow-lg',
				'px-10',
				'pt-5',
				'w-full',
				'md:w-3/4',
				'lg:w-2/3',
			],
			backdropClass: ['bg-black/30', 'backdrop-blur-sm'],
		})
	}
}
