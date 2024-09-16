import About from '@/Components/About'
import Banner from '@/Components/Banner'
import EasyToStart from '@/Components/EasyToStart'
import Services from '@/Components/Services'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Banner/>
      <About/>
      <Services/>
      <EasyToStart/>

      
    </div>
  )
}

export default Home