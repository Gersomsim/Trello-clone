import { Routes } from '@angular/router'
import { LoginComponent } from './pages/login/login.component'
import { BoardPageComponent } from './pages/private/board-page/board-page.component'

export const routes: Routes = [
	{
		path: 'auth',
		children: [
			{
				path: 'login',
				component: LoginComponent,
			},
		],
	},
	{
		path: '',
		component: BoardPageComponent,
	},
]
