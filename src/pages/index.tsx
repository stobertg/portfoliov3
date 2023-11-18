import React from 'react'
import type { NextPage } from 'next'
import { SiteContainer, Projects } from '@components'

const Home: NextPage = () => {
  return (
    
    <SiteContainer 
      hasContactForm 
      shareURL="https://tylerstober.com"
      pageTitle="Tyler Stober"
      content="Tyler Stober is a multidisicplinary designer"
      socialImage="https://mxmlcreative.com/global/social-hero.jpeg"
    >

      <Projects 
        projects={[
          { link: '/work/cardiact', title: 'Gather' },
          { link: '/work/cardiact', title: 'Walgreens' },
          { link: '/work/cardiact', title: 'CardiAct' },
          { link: '/work/cardiact', title: 'Castle for no Reason' },
          { link: '/work/taa', title: 'The Apparel Agency' },
          { link: '/work/taa', title: 'CSS Animations' },
        ]}
      />
    </SiteContainer>

  )
}

export default Home
