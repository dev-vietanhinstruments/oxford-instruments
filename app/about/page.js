import Header from '@/components/Header/index'
import Footer from '@/components/Footer/index'
import Section from '@/components/Layout/Section'
import Intro from '@/components/Layout/Intro'
import Image from 'next/image'
import ProductCard, { ImageCard } from '@/components/Card'
import SupportSection from '@/components/SupportSection'
import { PRODUCTS } from '@/consts/products'
import toLowerCaseNonAccentVietnamese from '@/utils/nonAccentVietnamese'



export const metadata = {
	title: 'Về chúng tôi',
}

export default function Page() {
	const applications = [
		{
			desc: 'Nông nghiệp thực phẩm',
			image: '/about/agri.jpg',
		},
		{
			desc: 'Pin',
			image: '/about/battery.jpg',
		},
		{
			desc: 'Hóa chất',
			image: '/about/chemistry.jpg',
		},
		{
			desc: 'Giáo dục',
			image: '/about/edu.jpg',
		},
		{
			desc: 'Dược phẩm',
			image: '/about/medic.jpg',
		},
		{
			desc: 'Nhựa',
			image: '/about/plastic.jpg',
		},
		{
			desc: 'Phân tích lõi đá',
			image: '/about/geo.jpg',
		},
		{
			desc: 'Dệt may',
			image: '/about/sew.jpg',
		},
	]

	return (
		<div className='flex flex-col relative'>
			<Header />
			<main>
				<Section className='pt-16 sm:pt-20 lg:pt-24'>
					<Section.Heading>Về Oxford Instruments</Section.Heading>
					<Section.Subtext className='mb-0'>
						Oxford Instruments là nhà cung cấp hàng đầu các sản phẩm
						và dịch vụ công nghệ cao cho các tập đoàn lớn và cộng
						đồng nghiên cứu khoa học trên toàn thế giới. Chúng tôi
						chuyên cung cấp các giải pháp hình ảnh, phân tích và
						thao tác vật liệu ở cấp độ nguyên tử và phân tử, giúp
						khách hàng đẩy nhanh quá trình nghiên cứu và phát triển
						(R&D), gia tăng năng suất, và thúc đẩy những khám phá
						khoa học mới.
					</Section.Subtext>
				</Section>
				<Section>
					<Section.Heading>Ứng dụng</Section.Heading>
					<div className='grid grid-flow-row grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6'>
						{applications.map((app, index) => {
							return (
								<ImageCard
									key={index}
									image={app.image}
									shortDesc={app.desc}
								/>
							)
						})}
					</div>
				</Section>
				<Section className='mt-8'>
					<Section.Heading>Thiết bị và giải pháp</Section.Heading>
					<div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6'>
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
				<SupportSection />
			</main>
			<Footer />
		</div>
	)
}
