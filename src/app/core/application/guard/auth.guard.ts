import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { CookieService } from '@infrastructure/libs/cookie.sevice'

export const authGuard: CanActivateFn = (route, state) => {
	const cookieService = inject(CookieService)
	const router = inject(Router)

	if (cookieService.hasCookie('token')) {
		return true
	}

	router.navigate(['/auth/login'])
	return false
}
