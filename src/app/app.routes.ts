import { Routes } from '@angular/router'
import { LoginComponent } from './pages/login/login.component'
import { BoardPageComponent } from './pages/private/board-page/board-page.component'
import { WorkspaceDashboardPageComponent } from './pages/private/workspace-dashboard-page/workspace-dashboard-page.component'
import { BoardTaskPageComponent } from './pages/private/board-task-page/board-task-page.component'

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
		children: [
			{
				path: 'w',
				component: BoardPageComponent,
				children: [
					{
						path: ':workspaceId',
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
