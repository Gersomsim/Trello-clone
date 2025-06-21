export type BgColorType =
	| 'Gradient gray'
	| 'Gradient blue'
	| 'Gradient red'
	| 'Gradient green'

export const bgColors = (type?: BgColorType): string => {
	if (!type) return ''
	return {
		'Gradient gray': 'bg-gradient-to-r from-gray-400 to-gray-600',
		'Gradient blue': 'bg-gradient-to-r from-cyan-400 to-blue-700',
		'Gradient red': 'bg-gradient-to-r from-red-700 to-orange-500',
		'Gradient green': 'bg-gradient-to-r from-blue-400 to-green-400',
	}[type]
}
