import { BgColorType } from '../../../ui/components/utils/bg-colors.util'

export interface Board {
	id: string
	name: string
	image?: string
	color?: BgColorType
	visibility: 'private' | 'workspace' | 'public'
	workspaceId: string
	meta?: {
		workspaceName: string
	}
}
