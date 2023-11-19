import React from 'react'
import type { NextPage } from 'next'
import { SiteContainer, Block, Hero, Intro, Browser, GatherLogo, ManWithWallet, NextProject } from '@components'

const Walgreens: NextPage = () => {
  return (
    
    <SiteContainer 
      hasContactForm 
      shareURL="https://tylerstober.com"
      pageTitle="TS - Gather"
      content="Tyler Stober is a multidisicplinary designer"
      socialImage="https://mxmlcreative.com/global/social-hero.jpeg"
      blockSpacing="l2"
    >

      <Block width="medium">
        <Hero 
          heroGraphic={ <ManWithWallet /> }
          title="Walgreens Design Systems" 
          subtitle="UX/UI Design, Design Systems, & Front End Development"
        />

        <Browser 
          url="gather.goldininstitute.org" 
          image="/projects/gather/profile.png" 
          imageAlt="Gather" 
        />
      </Block>

      <Block>
        <Intro 
          title="Design and Front End"
          text={
            <>
              <p>
                At Walgreens, my current role is the designer and developer for the Walgreens Live Style Guide, promoting the 
                design and front-end integrity of foundational components that support Walgreens.com. In addition, front-end 
                developer of the Walgreens.com homepage and designer of Walgreen's functional icons.
              </p>

              <p>
                As the lead on the LSG team since 2017, my efforts have been to bridge the design, dev, and accessibility teams, 
                which were previously siloed parts of the organization.
              </p>

              <p>
                As Walgreens transitions to React JS and new branding, my team has led the efforts to design GUI components, 
                standardize and create a Live Style Guide, as well as accessible front-end components to preserve design integrity 
                and maintenance.
              </p>
            </>
          }
          skills={[
            { title: 'Design Systems' },
            { title: 'UX/UI Design' },
            { title: 'Front End Development' },
            { title: 'Accessibility'}
          ]}
          project={[
            { title: 'Full Time - Walgreens' },
            { title: '2017 - 2021' },
            { title: 'Stefan Clark - ACD' },
            { title: 'Mike Pruim, Ryne Estwig, Akemi Hong' }
          ]}
        />
      </Block>

      <Block>
        <NextProject 
          pageLink="/work/gather"
          title="Walgreens' Design Systems" 
          image="/projects/gather/profile.png"
          imageAlt="Gather by Tyler Stober"
        />
      </Block>
    </SiteContainer>

  )
}

export default Walgreens
