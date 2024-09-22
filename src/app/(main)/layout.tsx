import Header from '@/components/common/Wrapper/Header'
import Footer from '@/components/common/Wrapper/Footer'
import { Suspense } from 'react'
import Loading from './loading'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex flex-col h-screen">
      <Header></Header>
      <Suspense fallback={<Loading />}>{children}</Suspense>
      <Footer></Footer>
    </div>
  )
}
