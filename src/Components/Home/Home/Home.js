import React from 'react'
import About from '../About/About'
import Banner from '../Banner/Banner'
import HomePageService from '../HomePageService/HomePageService'
import ReviewPage from '../ReviewPage/ReviewPage'

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <HomePageService />
      <ReviewPage />
    </div>
  )
}

export default Home
