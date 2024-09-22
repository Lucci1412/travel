import { Suspense } from 'react'
import Loading from './loading'
import Header from '@/components/common/wrapper/Header'
import Footer from '@/components/common/wrapper/Footer'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex flex-col h-screen">
      <Header></Header>
      <Suspense fallback={<Loading />}>
        <div className="container mx-auto px-4">{children}</div>
      </Suspense>
      <Footer></Footer>
    </div>
  )
}
