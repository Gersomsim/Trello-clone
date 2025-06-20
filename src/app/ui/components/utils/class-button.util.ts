import { ButtonRounded, ButtonSize, ButtonVariant } from '../types/button.type'

export const classButton = (
	variant: ButtonVariant,
	size: ButtonSize,
	rounded: ButtonRounded,
	fullWidth: boolean,
	addClass: string,
) => {
	const baseClasses =
		'inline-flex items-center justify-center text-sm font-medium focus:outline-none cursor-pointer'
	const variantClasses = {
		primary:
			'bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700',
		secondary: 'bg-gray-500 text-white hover:bg-gray-600',
		outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
		ghost: 'text-gray-700 bg-gray-50  dark:text-gray-400 dark:bg-gray-700',
		danger: 'bg-red-500 text-white hover:bg-red-600',
		success: 'bg-green-500 text-white hover:bg-green-600',
		warning: 'bg-yellow-500 text-white hover:bg-yellow-600',
		info: 'bg-blue-500 text-white hover:bg-blue-600',
		light: 'bg-gray-500 text-white hover:bg-gray-600',
		indigo: 'bg-indigo-500 text-white hover:bg-indigo-600',
		'outline-indigo': 'border border-indigo-500 text-indigo-500 hover:bg-indigo-50',
	}

	const sizeClasses = {
		sm: 'px-2 py-1 text-xs',
		md: 'px-4 py-2 text-sm',
		lg: 'px-6 py-3 text-base',
		xl: 'px-8 py-4 text-lg',
	}
	const roundedClasses = {
		sm: 'rounded-sm',
		md: 'rounded-md',
		lg: 'rounded-lg',
		full: 'rounded-full',
		none: 'rounded-none',
	}

	return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${roundedClasses[rounded]} ${fullWidth ? 'w-full' : ''} ${addClass}`
}
