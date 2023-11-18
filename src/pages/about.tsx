import React from 'react'
import type { NextPage } from 'next'
import { SiteContainer, About } from '@components'

const AboutPage: NextPage = () => {
  return (
    
    <SiteContainer 
      hasContactForm 
      shareURL="https://tylerstober.com"
      pageTitle="Tyler Stober"
      content="Tyler Stober is a multidisicplinary designer"
      socialImage="https://mxmlcreative.com/global/social-hero.jpeg"
    >

      <About />
    </SiteContainer>

  )
}

export default AboutPage
