import { Injectable } from '@angular/core'
import { CookieService as NgxCookieService } from 'ngx-cookie-service'

@Injectable({ providedIn: 'root' })
export class CookieService {
	constructor(private readonly cookies: NgxCookieService) {}

	getCookie(name: string) {
		return this.cookies.get(name)
	}

	setCookie(name: string, value: string) {
		this.cookies.set(name, value)
	}

	deleteCookie(name: string) {
		this.cookies.delete(name)
	}

	hasCookie(name: string) {
		return this.cookies.check(name)
	}

	clearCookies() {
		this.cookies.deleteAll()
	}
}
