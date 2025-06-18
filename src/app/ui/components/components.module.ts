import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UiInputComponent } from './atoms/ui-input/ui-input.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { UiButtonComponent } from './atoms/ui-button/ui-button.component'
import { UiLabelComponent } from './atoms/ui-label/ui-label.component'
import { UiNavbarComponent } from './organism/ui-navbar/ui-navbar.component'

@NgModule({
	declarations: [
		UiInputComponent,
		UiButtonComponent,
		UiLabelComponent,
		UiNavbarComponent,
	],
	imports: [CommonModule, FontAwesomeModule],
	exports: [
		UiInputComponent,
		UiButtonComponent,
		UiLabelComponent,
		UiNavbarComponent,
	],
})
export class ComponentsModule {}
