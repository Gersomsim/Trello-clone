import { Injectable } from '@angular/core'
import { User } from '@core/domain/entities'
import { CookieService } from '@infrastructure/libs/cookie.service'
import { UserStore } from '../store/user.store'

@Injectable({ providedIn: 'root' })
export class UserFacade {
	constructor(
		private readonly cookieService: CookieService,
		private readonly userStore: UserStore,
	) {}

	login(email: string, password: string): Promise<User> {
		if (email === 'admin@example.com' && password === '1234567890') {
			this.cookieService.setCookie('token', '1234567890')
			const user = {
				id: '1',
				name: 'John Doe',
				email: 'john.doe@example.com',
			}
			this.userStore.setUser(user)

			return Promise.resolve(user)
		} else {
			throw new Error('Invalid email or password')
		}
	}

	logout() {
		this.cookieService.deleteCookie('token')
	}
}
