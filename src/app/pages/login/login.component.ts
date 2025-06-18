import { Component, signal } from '@angular/core'
import { ComponentsModule } from '../../ui/components/components.module'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

@Component({
	selector: 'app-login',
	imports: [ComponentsModule, FontAwesomeModule],
	templateUrl: './login.component.html',
	styles: ``,
})
export class LoginComponent {
	faEye = faEye
	faEyeSlash = faEyeSlash

	showPassword = signal(false)

	togglePasswordVisibility() {
		this.showPassword.set(!this.showPassword())
	}
}
