import React from 'react'
import type { NextPage } from 'next'
import { SiteContainer, Block, Browser } from '@components'

const Gather: NextPage = () => {
  return (
    
    <SiteContainer 
      hasContactForm 
      shareURL="https://tylerstober.com"
      pageTitle="TS - Gather"
      content="Tyler Stober is a multidisicplinary designer"
      socialImage="https://mxmlcreative.com/global/social-hero.jpeg"
    >

      <Block width="medium"><Browser /></Block>
    </SiteContainer>

  )
}

export default Gather
