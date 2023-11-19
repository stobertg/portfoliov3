import React from 'react'
import type { NextPage } from 'next'
import { SiteContainer, Projects } from '@components'

const Home: NextPage = () => {
  return (
    
    <SiteContainer 
      hasContactForm 
      shareURL="https://tylerstober.com"
      pageTitle="Tyler Stober"
      content="US and Europe based multidisciplinary designer with a primary background in User Experience, User Interface Design, and Front End Development. In addition, also proficient in Motion and 3D design, rendering a unique technical perspective and collaborator with an awareness of multiple mediums."
      socialImage="https://tylerstober.com/global/social-hero.webp"
    >

      <Projects 
        projects={[
          { link: '/work/gather', title: 'Gather' },
          { link: '/work/walgreens', title: 'Walgreens' },
          { link: '/work/cardiact', title: 'CardiAct' },
          { link: '/work/castle', title: 'Castle for no Reason' },
          { link: '/work/taa', title: 'The Apparel Agency' },
          { link: '/work/animations', title: 'CSS Animations' },
        ]}
      />
    </SiteContainer>

  )
}

export default Home
