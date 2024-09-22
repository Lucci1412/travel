import React from 'react'
import HomePage from '@/components/HomePage'
import Header from '@/components/common/wrapper/Header'
import Footer from '@/components/common/wrapper/Footer'

const Home = () => {
  return (
    <div className="flex flex-col">
      <Header></Header>
      <HomePage />
      <Footer></Footer>
    </div>
  )
}

export default Home
