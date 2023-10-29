import React from 'react'
import type { NextPage } from 'next'
import { SiteContainer } from '@components'

const Gather: NextPage = () => {
  return (
    
    <SiteContainer 
      hasContactForm 
      shareURL="https://tylerstober.com"
      pageTitle="TS - Gather"
      content="Tyler Stober is a multidisicplinary designer"
      socialImage="https://mxmlcreative.com/global/social-hero.jpeg"
    >

      <>This is some content</>
    </SiteContainer>

  )
}

export default Gather
