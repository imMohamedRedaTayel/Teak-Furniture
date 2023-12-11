import Service from '@/components/Servicee/Service'
import Testimonials from '@/components/Testimonials/testimonials'
import WhyUs from '@/components/WhyUs/whyUs'
import About from '@/components/about/about'
import Design from '@/components/designn/design'
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import Hero from '@/components/header/hero/hero'
import OurGallary from '@/components/ourGallary/ourGallary'
import Video from '@/components/videoo/video'
import Work from '@/components/work/work'
import React from 'react'

const index = () => {
  return <>
    <Header/>
    <Hero/>
    <About/>
    <WhyUs/>
    <Service/>
    <Work/>
    <Video/>
    <OurGallary/>
    <Design/>
    <Testimonials/>
    <Footer/>
  </>
}

export default index