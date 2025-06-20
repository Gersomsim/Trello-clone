import { Component, inject, signal } from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { ComponentsModule } from '../../ui/components/components.module'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { UserFacade } from '@infrastructure/storage/facades/user.facade'
import { AlertsService } from '@infrastructure/libs/alerts.service'

@Component({
	selector: 'app-login',
	imports: [ComponentsModule, FontAwesomeModule, ReactiveFormsModule],
	templateUrl: './login.component.html',
	styles: ``,
})
export class LoginComponent {
	userFacade = inject(UserFacade)
	router = inject(Router)
	fb = inject(FormBuilder)

	faEye = faEye
	faEyeSlash = faEyeSlash

	showPassword = signal(false)
	form = this.fb.nonNullable.group({
		email: ['', [Validators.required, Validators.email]],
		password: ['', [Validators.required]],
	})

	togglePasswordVisibility() {
		this.showPassword.set(!this.showPassword())
	}

	login() {
		if (this.form.invalid) {
			this.form.markAllAsTouched()
			AlertsService.toast().error('Please fill all the fields')
			return
		}

		this.userFacade
			.login(this.form.value.email!, this.form.value.password!)
			.then(() => {
				this.router.navigate(['/'])
			})
			.catch((error) => {
				AlertsService.toast().error(error.message)
			})
	}
}
