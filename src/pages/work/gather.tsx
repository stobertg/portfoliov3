import React from 'react'
import type { NextPage } from 'next'
import { SiteContainer, Block, Hero, Browser } from '@components'

const Gather: NextPage = () => {
  return (
    
    <SiteContainer 
      hasContactForm 
      shareURL="https://tylerstober.com"
      pageTitle="TS - Gather"
      content="Tyler Stober is a multidisicplinary designer"
      socialImage="https://mxmlcreative.com/global/social-hero.jpeg"
    >

      <Block width="medium">
        <Hero 
          title="Gather Web Application" 
          subtitle="E-Learning Application for Grassroots Leadership"
        />
        <Browser />
      </Block>
    </SiteContainer>

  )
}

export default Gather
