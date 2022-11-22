import React from 'react'
import HomeBanner from '../components/HomeBanner'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div className='h-full lg:h-screen overflow-hidden'>
      <Navbar home />
      <HomeBanner />
    </div>
  )
}

export default Home