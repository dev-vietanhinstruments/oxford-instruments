import Header from './../components/Header/index'
import Footer from './../components/Footer/index'
import { PAPERS } from '@/consts/homepage'
import ProductCard, { PaperCard } from '@/components/Card'
import Section from '@/components/Layout/Section'
import Intro from '@/components/Layout/Intro'
import SupportSection from '@/components/SupportSection'
import toLowerCaseNonAccentVietnamese from '@/utils/nonAccentVietnamese'
import Image from 'next/image'
import { PRODUCTS } from '@/consts/products'
import Link from 'next/link'
import Button from '@/components/Button'

export default function Home() {
	return (
		<div className='flex flex-col relative'>
			<Header />
			<main>
				<Intro className='block p-0 sm:p-0 lg:p-0 overflow-hidden'>
					<Image
						src='/banners/banner_1.png'
						alt={`Banner`}
						width={1920}
						height={600}
						className='w-full h-auto'
						priority
					/>
				</Intro>
				<Section className='mt-14'>
					<Section.Heading>
						Oxford Instruments - Đột phá công nghệ, kiến tạo tương
						lai
					</Section.Heading>
					<div className='lg:grid lg:grid-flow-row lg:grid-cols-2 gap-8'>
						<div className='lg:col-span-1'>
							<Section.Subtext>
								Oxford Instruments là nhà cung cấp hàng đầu các
								sản phẩm và dịch vụ công nghệ cao cho các công
								ty hàng đầu thế giới và cộng đồng nghiên cứu
								khoa học. Chúng tôi mang đến các giải pháp công
								nghệ cao toàn diện, giúp nâng cao hiệu suất và
								tối ưu hóa quá trình phân tích.
							</Section.Subtext>
							<Section.Subtext>
								Với sứ mệnh thúc đẩy một xã hội tiên tiến, bền
								vững, và kết nối chặt chẽ, chúng tôi luôn không
								ngừng đổi mới để đáp ứng mọi nhu cầu của khách
								hàng.
							</Section.Subtext>
						</div>
						<div>
							<iframe
								width='560'
								height='315'
								src='https://www.youtube.com/embed/8xQ4YB4ko1U?si=edciHj4AfPzIGJ1y'
								title='YouTube video player'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
								referrerPolicy='strict-origin-when-cross-origin'
								className='w-full'
								allowFullScreen></iframe>
						</div>
					</div>
				</Section>
				<Section className='mt-14'>
					<Section.Heading>Thiết bị và giải pháp</Section.Heading>
					<div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{PRODUCTS.map((product, index) => {
							const productPath = `/products/${toLowerCaseNonAccentVietnamese(
								product.name
							).replace(/\s+/g, '-')}-p.${product.id}`
							return (
								<ProductCard
									key={index}
									name={product.name}
									image={product.image}
									shortDesc={product.shortDesc}
									href={productPath}
								/>
							)
						})}
					</div>
				</Section>
				<Section className='mt-14'>
					<Section.Heading>Tài liệu và videos</Section.Heading>
					<div className='grid grid-flow-row grid-col-1 lg:grid-cols-2 gap-12 lg:gap-6'>
						<div className='pb-12 border-b border-b-gray lg:pb-0 lg:border-b-0 lg:pr-6 lg:border-r lg:border-r-gray'>
							<div className='flex flex-col gap-6 lg:gap-4'>
								<iframe
									width='560'
									height='315'
									src='https://www.youtube.com/embed/aoWGcrRpGnk?si=vQ-vbXb0v_tkn1tn'
									title='YouTube video player'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
									referrerPolicy='strict-origin-when-cross-origin'
									className='w-full md:h-[450px] lg:h-[350px]'
									allowFullScreen></iframe>
								<iframe
									width='560'
									height='315'
									src='https://www.youtube.com/embed/mt31ixPWFAw?si=z-JCt8ZHeyajU__1'
									title='YouTube video player'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
									referrerPolicy='strict-origin-when-cross-origin'
									className='w-full md:h-[450px] lg:h-[350px]'
									allowFullScreen></iframe>
								<div className='flex justify-center lg:justify-end'>
									<Button	href='https://nmr.oxinst.com/library/videos' className='px-5'>Xem thêm</Button>
								</div>
							</div>
						</div>
						<div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-4'>
							{PAPERS.map((paper, index) => (
								<PaperCard
									key={index}
									name={paper.name}
									image={paper.image}
									shortDesc={paper.shortDesc}
									href={paper.href}
								/>
							))}
							<div className='sm:col-span-2 flex justify-center lg:justify-end'>
								<Button	href='https://nmr.oxinst.com/library/research-papers' className='px-5'>Xem thêm</Button>
							</div>
						</div>
					</div>
				</Section>
				<SupportSection />
			</main>
			<Footer />
		</div>
	)
}
