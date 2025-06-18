import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UiInputComponent } from './atoms/ui-input/ui-input.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { UiButtonComponent } from './atoms/ui-button/ui-button.component'
import { UiLabelComponent } from './atoms/ui-label/ui-label.component'

@NgModule({
	declarations: [UiInputComponent, UiButtonComponent, UiLabelComponent],
	imports: [CommonModule, FontAwesomeModule],
	exports: [UiInputComponent, UiButtonComponent, UiLabelComponent],
})
export class ComponentsModule {}
