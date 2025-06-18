import { SizeType } from './size.type'

export type ButtonVariant =
	| 'primary'
	| 'secondary'
	| 'outline'
	| 'ghost'
	| 'danger'
	| 'success'
	| 'warning'
	| 'info'
	| 'light'
	| 'indigo'
	| 'outline-indigo'
export type ButtonSize = SizeType
export type ButtonType = 'button' | 'submit' | 'reset'
export type ButtonRounded = 'sm' | 'md' | 'lg' | 'full' | 'none'
