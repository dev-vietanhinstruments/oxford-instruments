import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingButton } from './../components/Button/index';
import Image from "next/image";
import { Analytics } from "@vercel/analytics/react"


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://oxford-vietanh.vercel.app"),
  title: {
    default: "Thiết bị Oxford - Phân phối độc quyền bởi Việt Anh",
    template: '%s | Thiết bị Oxford - Phân phối độc quyền bởi Việt Anh',
  },
  description: "Oxford Instruments là nhà cung cấp hàng đầu các sản phẩm và dịch vụ công nghệ cao cho các công ty hàng đầu thế giới và cộng đồng nghiên cứu khoa học. Tìm hiểu thêm về các giải pháp của Oxford và nhận hỗ trợ tư vấn thêm từ Việt Anh.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: '#FAFAFA'}}>{
      children}
      <div className="fixed bottom-4 right-4 lg:bottom-8 lg:right-8 flex flex-col gap-2 items-end">
      <FloatingButton href="https://zalo.me/0937998390" className="p-0 bg-white relative w-fit">
        <Image
          src="/logo-zalo.svg"
          alt='zalo'
          width={64}
          height={64}
          className='size-12'
        />
      </FloatingButton>
      <FloatingButton href="tel:0937998390" className="p-0 bg-primary relative px-4 py-2">
      <svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								className='size-6 inline-block text-white'>
								<path
									fillRule='evenodd'
									d='M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z'
									clipRule='evenodd'
								/>
							</svg>
              <span className='text-white text-sm pl-2'>0937998390</span>
      </FloatingButton>
      </div>
      <Analytics />
      </body>
    </html>
  );
}
