import { Routes } from '@angular/router'
import { LoginComponent } from './pages/login/login.component'
import { BoardPageComponent } from './pages/private/board-page/board-page.component'
import { WorkspaceDashboardPageComponent } from './pages/private/workspace-dashboard-page/workspace-dashboard-page.component'
import { BoardTaskPageComponent } from './pages/private/board-task-page/board-task-page.component'
import { PrivateComponent } from './pages/private/private.component'
import { HomePageComponent } from './pages/private/home-page/home-page.component'
import { StartPageComponent } from './pages/private/start-page/start-page.component'
import { authGuard } from './core/application/guard/auth.guard'

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
		component: PrivateComponent,
		canActivate: [authGuard],
		children: [
			{
				path: '',
				component: BoardPageComponent,
				children: [
					{
						path: '',
						component: StartPageComponent,
					},
					{
						path: 'u/:userId/boards',
						component: HomePageComponent,
					},
					{
						path: 'w/:workspaceId',
						component: WorkspaceDashboardPageComponent,
					},
				],
			},
			{
				path: 'b',
				children: [
					{
						path: ':boardId',
						children: [
							{
								path: 'tasks',
								component: BoardTaskPageComponent,
							},
						],
					},
				],
			},
		],
	},
]
