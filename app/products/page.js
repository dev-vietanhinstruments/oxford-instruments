import Header from '@/components/Header/index'
import Footer from '@/components/Footer/index'
import { BANNERS } from '@/consts/homepage'
import ProductCard, { DocCard } from '@/components/Card'
import BannersCarousel from '@/components/Carousel'
import { PRODUCTS } from '@/consts/products'
import Intro from '@/components/Layout/Intro'
import Section from '@/components/Layout/Section'
import SupportSection from '@/components/SupportSection'
import toLowerCaseNonAccentVietnamese from '@/utils/nonAccentVietnamese'

export const metadata = {
	title: 'Sản phẩm',
}

export default function Products() {
	return (
		<div className='flex flex-col relative'>
			<Header />
			<main>
				<Intro className='block p-0 sm:p-0 lg:p-0 overflow-hidden'>
					<BannersCarousel images={BANNERS} />
				</Intro>
				<Section
					id='benchtop'
					className='pt-16 sm:pt-20 lg:pt-24'>
					<Section.Heading>
						Các giải pháp NMR để bàn cho nghiên cứu, kiểm tra chất
						lượng/kiểm soát chất lượng (QA/QC) trong công nghiệp và
						phân tích lõi đá.
					</Section.Heading>
					<Section.Subtext>
						Oxford Instruments Magnetic Resonance cung cấp các giải
						pháp phổ cộng hưởng từ hạt nhân (NMR) để bàn và đo độ
						giãn nở trong miền thời gian (TD-NMR) giúp thúc đẩy
						nghiên cứu mới và tối ưu hóa kiểm soát chất lượng. Các
						máy quang phổ NMR X-Pulse của chúng tôi, với khả năng
						lựa chọn đa hạt nhân băng tần rộng độc đáo, xác định cấu
						trúc phân tử và giám sát động học phản ứng. Bộ phân tích
						MQC+ cung cấp phép đo nhanh chóng, đơn giản và chính xác
						hàm lượng dầu, nước, fluorine và chất béo, mang lại các
						giải pháp kiểm tra chất lượng/kiểm soát chất lượng
						(QA/QC) hiệu quả cho các ngành công nghiệp thực phẩm,
						nông nghiệp, dệt may, polymer, hóa chất, dược phẩm và
						các ngành khác. Trong thăm dò dầu khí và vật lý đá
						(petrophysics), GeoSpec là tiêu chuẩn ngành cho phân
						tích lõi đá.
					</Section.Subtext>
					<div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{PRODUCTS.map((product, index) => {
							const productPath = `/products/${toLowerCaseNonAccentVietnamese(
								product.name
							).replace(/\s+/g, '-')}-p.${product.id}`
							return (
								<div key={index}>
									<ProductCard
										name={product.name}
										image={product.image}
                                        shortDesc={product.shortDesc}
										href={productPath}
									/>
								</div>
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
