import React from 'react'
import Navbar from './Navbar'
import HeroSection from './Hero'
import MissionVision from './Mission'
import NewsCarousel from './NewsAndUpdates'
import UpcomingEvents from './UpcomingEvents'
import SuccessStoriesCarousel from './SuccessStories'

function Homepage() {
   window.scroll(0, 0);
  return (

    <>
    
   
    
    <HeroSection/>
    <MissionVision/>
    <NewsCarousel/>
    <UpcomingEvents/>
    <SuccessStoriesCarousel/>
    </>
   
  )
}

export default Homepage