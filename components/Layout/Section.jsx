import React from 'react'
import { twMerge } from 'tailwind-merge'

export default function Section({ children, className, ...props }) {
	return (
		<section
			className={twMerge(
				'flex flex-col justify-center items-center w-full py-8 px-4 mb-8 sm:mb-12',
				className
			)}
			{...props}>
			<div className='flex flex-col w-full max-w-[80rem] justify-center px-4'>
				{children}
			</div>
		</section>
	)
}

Section.Heading = function Heading({ children, className, ...props }) {
	return (
		<h2
			className={twMerge(
				'text-center text-2xl md:text-3xl font-bold text-primary mb-8 capitalize',
				className
			)}
			{...props}>
			{children}
		</h2>
	)
}

Section.Subtext = function Subtext({ children, className, ...props }) {
	return (
		<div
			className={twMerge(
				'text-lg lg:text-xl text-black font-light mb-8',
				className
			)}
			{...props}>
			{children}
		</div>
	)
}

Section.List = function List({ children, className, ...props }) {
	return (
		<ul className={twMerge('text-lg lg:text-xl list-disc list-inside', className)} {...props}>
			{children}
		</ul>
	)
}

Section.Detail = function Detail({ title, children, className, ...props }) {
	return (
		<details className={twMerge("bg-card group hover:bg-primary open:bg-primary transition-all duration-300 ease-in-out mb-2 shadow-sm", className)} {...props}>
			<summary className="text-lg lg:text-xl group-hover:text-white group-open:text-white px-6 py-4 cursor-pointer">{title}</summary>
			<div className="text-lg lg:text-xl bg-white px-6 py-4">
				{children}
			</div>
		</details>
	)
}