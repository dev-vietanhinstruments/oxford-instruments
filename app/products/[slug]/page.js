import Header from '@/components/Header/index'
import Footer from '@/components/Footer/index'
import { PRODUCTS } from '@/consts/products'
import Intro from '@/components/Layout/Intro'
import Section from '@/components/Layout/Section'
import Image from 'next/image'
import Button, { TagButton } from '@/components/Button'
import Link from 'next/link'
import { DocCard } from '@/components/Card'
import SupportSection from '@/components/SupportSection'
import toLowerCaseNonAccentVietnamese from '@/utils/nonAccentVietnamese'
import RenderMarkdownBlock from '@/components/RenderBlock'

export async function generateMetadata({ params }) {
	const id = params.slug.split('-p.')[1]

	const product = PRODUCTS.find((product) => product.id === id)

	return {
		title: product.name,
	}
}

export async function generateStaticParams() {
	return PRODUCTS.map((product) => ({
		slug: `${toLowerCaseNonAccentVietnamese(product.name).replace(
			/\s+/g,
			'-'
		)}-p.${product.id}`,
	}))
}

export default function Page({ params }) {
	const id = params.slug.split('-p.')[1]

	const darkThemeIds = ['1', '2', '5', '6']

	const theme = darkThemeIds.includes(id) ? 'dark' : 'light'

	const product = PRODUCTS.find((product) => product.id === id)
	const pros = product.pros ?? []
	const specification = product.specification ?? ''
	const documents = product.documents
	const assets = product.assets ?? []

	return (
		<div className='flex flex-col relative'>
			<Header />
			<main>
				<Intro className='bg-card relative'>
					<Image
						width={0}
						height={0}
						src={product.introBg}
						alt={`${product.name} intro background`}
						className='object-cover w-full h-full absolute top-0 left-0 z-0'
						sizes='100vw, 100vw'
					/>
					<div
						className={`grid grid-col md:grid-row md:grid-cols-10 w-full max-w-[80rem] h-full gap-8 px-4 items-center z-10`}>
						<div className='flex flex-col justify-center flex-wrap md:col-span-6 order-2 md:order-1'>
							<h1
								className={`text-2xl md:text-3xl font-bold mb-4 ${
									theme === 'light'
										? 'text-primary'
										: 'text-white'
								}`}>
								{product.name}
							</h1>
							<div className='flex flex-row gap-2 flex-wrap text-lg lg:text-xl mb-4'>
								{product.industries.map((industry, index) => (
									<TagButton
										key={index}
										className={`${
											theme === 'light'
												? 'border-primary text-primary'
												: 'text-white border-white'
										}`}>
										{industry}
									</TagButton>
								))}
							</div>
							<div
								className={`mb-6 text-base font-light ${
									theme === 'light'
										? 'text-primary'
										: 'text-white'
								}`}>
								{product.intro}
							</div>
							<div className='flex flex-row gap-6 items-center'>
								<Button
									href='tel:0937998390'
									className={`w-full md:w-fit px-5 text-center font-bold ${
										theme === 'light'
											? 'text-white'
											: 'bg-white text-primary'
									}`}>
									Liên hệ ngay
								</Button>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth='2'
									stroke='currentColor'
									className={`hidden md:block size-8 ${
										theme === 'light'
											? 'text-primary'
											: 'text-white'
									}`}>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
									/>
								</svg>
								<span
									className={`hidden md:block text-xl md:text-2xl font-bold ${
										theme === 'light'
											? 'text-primary'
											: 'text-white'
									}`}>
									0937998390
								</span>
							</div>
						</div>
						<div className='md:col-span-4 order-1 md:order-2'>
							<Image
								width={0}
								height={0}
								src={product.image}
								alt={`${product.name}`}
								className='object-contain w-full h-[300px] md:h-[320px]'
								sizes='100vw, 100vw'
							/>
						</div>
					</div>
				</Intro>
				<Section className='mt-8'>
					<Section.Heading>Mô tả</Section.Heading>
					<Section.Subtext className='mb-0'>
						<RenderMarkdownBlock content={product.desc} />
					</Section.Subtext>
					{assets.map((asset, index) => (
						<img
							className='mt-8'
							key={index}
							src={asset}
						/>
					))}
				</Section>
				{pros.length ? (
					<Section>
						<Section.Heading>Ưu điểm</Section.Heading>
						{pros.map((pro, index) => {
							const assets = pro.assets ?? []
							const isOdd = assets.length % 2 !== 0

							return (
								<Section.Detail
									key={index}
									title={pro.title}>
									<RenderMarkdownBlock
										content={pro.desc}
										className={`text-base text-black font-light`}
									/>
									<div
										className={`mt-8 flex ${
											isOdd
												? 'justify-center'
												: 'justify-around flex-col lg:flex-row'
										}`}>
										{assets.map((asset, i) => {
											return (
												<img
													key={i}
													src={asset}
													alt={`Image ${i}`}
													className='object-cover'
												/>
											)
										})}
									</div>
								</Section.Detail>
							)
						})}
					</Section>
				) : null}
				{specification ? (
					<Section>
						<Section.Heading>Thông số kỹ thuật</Section.Heading>
						<Section.Subtext className='mb-0'>
							<RenderMarkdownBlock content={specification} />
						</Section.Subtext>
					</Section>
				) : null}
				<Section>
					<Section.Heading>Tài liệu</Section.Heading>
					<div className='flex flex-col gap-2'>
						{documents.map((doc, index) => (
							<DocCard
								key={index}
								title={doc.title}
								href={doc.href}
							/>
						))}
					</div>
				</Section>
				<SupportSection />
			</main>
			<Footer />
		</div>
	)
}
