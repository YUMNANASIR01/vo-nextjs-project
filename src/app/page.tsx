import BestSellingProducts from '@/components/bestselling'
import FeaturedProducts from '@/components/feature'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import React from 'react'

function page() {
  return (
    <div >
      <Hero />
      <FeaturedProducts/>
      <BestSellingProducts/>
      <Footer/>
    </div>
  )
}

export default page
