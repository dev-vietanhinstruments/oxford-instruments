import Link from 'next/link'
import { twMerge } from 'tailwind-merge'


export default function Button({ href, className, children, ...props }) {
	return (
		<Link
			className={twMerge(
				'text-base bg-primary text-white p-3 text-center uppercase block',
				className
			)}
			href={href}
			{...props}>
            {children}
        </Link>
	)
}

export function TagButton({ href, className, children, ...props }) {
	return (
		<span
			className={twMerge(
				'text-secondary border-2 border-secodary font-light border-secondary px-2 py-1 text-sm lg:text-base w-fit transition-all duration-300 ease-in-out',
				className
			)}
			{...props}>
            {children}
        </span>
	)
}

export function FloatingButton({ href, className, children, ...props }) {
	return (
		<Link
			className={twMerge(
				'rounded-full shadow-lg',
				className
			)}
			href={href}
			{...props}>
            {children}
        </Link>
	)
}