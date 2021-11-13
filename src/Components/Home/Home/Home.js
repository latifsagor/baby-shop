import React from 'react'
import Banner from '../Banner/Banner'
import HomePageService from '../HomePageService/HomePageService'
import ReviewPage from '../ReviewPage/ReviewPage'

const Home = () => {
  return (
    <div>
      <Banner />
      <HomePageService />
      <ReviewPage />
    </div>
  )
}

export default Home
