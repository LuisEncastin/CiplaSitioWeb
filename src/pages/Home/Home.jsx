import React from 'react'
import AboutUs from '../../sections/AboutUs/AboutUs'

import Intro from '../../sections/Intro/Intro';
import OurServices from '../../sections/OurServices/OurServices';
import ContactUs from '../../sections/ContactUs/ContactUs';

// style
import '../../styles/bootstrap.css' 

const Home = () => {
  return (
    <>
        <Intro/>
        <AboutUs/>
        <OurServices/>
        <ContactUs/>
    </>
  )
}

export default Home