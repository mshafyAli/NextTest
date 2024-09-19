import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import ReviewBanner from '@/Components/ReviewBanner'
import ReviewCards from '@/Components/ReviewCards'
import React from 'react'

const ReviewPage = () => {
  return (
    <div>
      <Navbar/>
      <ReviewBanner/>
      <ReviewCards/>
      <Footer/>
    </div>
  )
}

export default ReviewPage