import { Routes } from '@angular/router'
import { LoginComponent } from './pages/login/login.component'
import { BoardPageComponent } from './pages/private/board-page/board-page.component'
import { WorkspaceDashboardPageComponent } from './pages/private/workspace-dashboard-page/workspace-dashboard-page.component'

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
		children: [
			{
				path: 'w',
				children: [
					{
						path: ':workspaceId',
						component: WorkspaceDashboardPageComponent,
					},
				],
			},
		],
	},
]
