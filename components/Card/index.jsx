import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button'

export default function ProductCard({
	name,
	image,
	shortDesc,
	href,
	...props
}) {
	return (
		<div
			className={`flex flex-col col-span-1 h-full bg-white shadow justify-between`}
			{...props}>
			<div className='p-3'>
				<Image
					width={0}
					height={0}
					src={image}
					alt={`${name}`}
					className='object-contain w-full h-[180px] mb-2'
					sizes='100vw, 100vw'
					priority={true}
				/>
				<Link href={String(href)}>
					<h4 className='text-base font-bold text-center text-secondary mb-1'>
						{name}
					</h4>
				</Link>
				<p className='text-sm font-light text-center text-black'>
					{shortDesc}
				</p>
			</div>
			<Button href={String(href)}>Tìm hiểu thêm</Button>
		</div>
	)
}

export function PaperCard({ name, image, shortDesc, href, ...props }) {
	return (
		<div
			className={`flex flex-col col-span-1 h-full bg-white shadow justify-between`}
			{...props}>
			<div className='p-3'>
				<Image
					width={0}
					height={0}
					src={image}
					alt={`${name}`}
					className='object-contain w-full h-[180px] mb-2'
					sizes='100vw, 100vw'
					priority={true}
				/>
				<h4 className='text-base font-bold text-center text-primary mb-1'>
					<Link href={String(href)}>{name}</Link>
				</h4>
				<p className='text-xs font-light italic text-center text-black'>
					{shortDesc}
				</p>
			</div>
			{/* <Link className="text-base bg-primary text-white p-3 text-center uppercase" href={String(href)}>Tìm hiểu thêm</Link> */}
		</div>
	)
}

export function SupportCard({ name, image, href, desc, ...props }) {
	return (
		<div
			className='flex flex-col col-span-1 h-full justify-between bg-white shadow p-6'
			{...props}>
			<div className='flex flex-col justify-between items-start'>
				<div className='flex flex-row w-full justify-between items-center mb-2'>
					<h4 className='text-base lg:text-lg font-bold text-primary'>
						{name}
					</h4>
					<Image
						src={image}
						alt={`${name}`}
						width={64}
						height={64}
						className='size-8'
					/>
				</div>
				<p className='text-sm mb-2 font-light'>{desc}</p>
				<Link
					className='group text-sm hover:font-bold text-secondary'
					href={href}>
					Tìm hiểu thêm {'>'}
				</Link>
			</div>
		</div>
	)
}

export function DocCard({ title, href }) {
	return (
		<Link href={String(href)}>
			<div className='bg-card py-4 px-6 rounded-md group hover:bg-primary transition-all duration-300 ease-in-out'>
				<div className='flex flex-row items-center gap-3 text-lg lg:text-xl group-hover:text-white'>
					{title}
					<Image
						src='/arrow-right.svg'
						alt='Right arrow'
						width={64}
						height={64}
						className='size-6 group-hover:invert group-hover:translate-x-6 transition-all duration-300 ease-in-out'
					/>
				</div>
			</div>
		</Link>
	)
}

export function ProductCardWithDesc({ name, image, href, desc, ...props }) {
	return (
		<div
			className={`grid grid-col md:grid-row md:grid-cols-[30%_70%] w-full h-full p-3 gap-6 relative`}
			{...props}>
			<div>
				<Image
					width={0}
					height={0}
					src={image}
					alt={`${name}`}
					className='object-contain w-full h-[200px]'
					sizes='100vw, 100vw'
				/>
			</div>
			<div className='flex flex-col'>
				<h4 className='text-xl md:text-2xl font-semibold mb-2'>
					{name}
				</h4>
				<p className='text-base md:text-lg'>{desc}</p>
				<Button href={href}>Tìm hiểu thêm</Button>
			</div>
		</div>
	)
}

export function ImageCard({ image, shortDesc, ...props }) {
	return (
		<div
			className={`flex flex-col col-span-1 h-full bg-white shadow justify-between`}
			{...props}>
			<div>
				<Image
					width={275}
					height={173}
					src={image}
					alt={`${shortDesc}`}
					className='w-full h-auto mb-2'
					priority={true}
				/>
				<h4 className='text-base font-bold text-center text-primary mb-1 p-3'>
					{shortDesc}
				</h4>
			</div>
		</div>
	)
}