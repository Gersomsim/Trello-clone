import { Task } from './task.entity'

export interface List {
	id: string
	name: string
	boardId: string
	tasks: Task[]
}
