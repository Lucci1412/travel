import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import './globals.css'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({ subsets: ['vietnamese'], weight: ['300', '400', '500', '600', '700'] })
// import { ThemeProvider } from '@/components/layoutWrapper/theme-provider';
// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Travel',
  description: 'Travel abc',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${montserrat.className}`} suppressHydrationWarning={true}>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  )
}
