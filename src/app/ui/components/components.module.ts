import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { OverlayModule } from '@angular/cdk/overlay'

import { UiInputComponent } from './atoms/ui-input/ui-input.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { UiButtonComponent } from './atoms/ui-button/ui-button.component'
import { UiLabelComponent } from './atoms/ui-label/ui-label.component'
import { UiNavbarComponent } from './organism/ui-navbar/ui-navbar.component'
import { UiAsideBoardComponent } from './organism/ui-aside-board/ui-aside-board.component'
import { UiWorkspaceDropdownComponent } from './organism/ui-workspace-dropdown/ui-workspace-dropdown.component'
import { CdkAccordionModule } from '@angular/cdk/accordion'
import { RouterModule } from '@angular/router'
import { UiWordAvatarComponent } from './atoms/ui-word-avatar/ui-word-avatar.component'
import { UiPreviewBoardComponent } from './organism/ui-preview-board/ui-preview-board.component'
import { UiNewBoardComponent } from './organism/ui-new-board/ui-new-board.component'
import { UiFormNewBoardComponent } from './organism/ui-form-new-board/ui-form-new-board.component'
import { UiSelectImageBoardComponent } from './organism/ui-select-image-board/ui-select-image-board.component'
import { UiNewTaskComponent } from './organism/ui-new-task/ui-new-task.component'
import { UiNewListComponent } from './organism/ui-new-list/ui-new-list.component'

@NgModule({
	declarations: [
		UiInputComponent,
		UiButtonComponent,
		UiLabelComponent,
		UiNavbarComponent,
		UiAsideBoardComponent,
		UiWorkspaceDropdownComponent,
		UiWordAvatarComponent,
		UiPreviewBoardComponent,
		UiNewBoardComponent,
		UiFormNewBoardComponent,
		UiSelectImageBoardComponent,
		UiNewTaskComponent,
		UiNewListComponent,
	],
	imports: [
		CommonModule,
		FontAwesomeModule,
		CdkAccordionModule,
		RouterModule,
		OverlayModule,
	],
	exports: [
		UiInputComponent,
		UiButtonComponent,
		UiLabelComponent,
		UiNavbarComponent,
		UiAsideBoardComponent,
		UiWorkspaceDropdownComponent,
		UiWordAvatarComponent,
		UiPreviewBoardComponent,
		UiNewBoardComponent,
		UiFormNewBoardComponent,
		UiSelectImageBoardComponent,
		UiNewTaskComponent,
		UiNewListComponent,
	],
})
export class ComponentsModule {}
