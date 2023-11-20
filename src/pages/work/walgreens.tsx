import React from 'react'
import type { NextPage } from 'next'
import { SiteContainer, Block, Hero, Intro, Browser, GatherLogo, ManWithWallet, WalgreensIcons, WalgreensGui, NextProject } from '@components'

const Walgreens: NextPage = () => {
  return (
    
    <SiteContainer 
      shareURL="https://tylerstober.com/work/walgreens"
      pageTitle="Tyler Stober - Walgreens Design System"
      content="US and Europe based multidisciplinary designer with a primary background in User Experience, User Interface Design, and Front End Development. In addition, also proficient in Motion and 3D design, rendering a unique technical perspective and collaborator with an awareness of multiple mediums."
      socialImage="https://tylerstober.com/global/social-hero.webp"
      blockSpacing="l2"
    >

      <Block width="medium">
        <Hero 
          heroGraphic={ <ManWithWallet /> }
          title="Walgreens Design Systems" 
          subtitle="UX/UI Design, Design Systems, & Front End Development"
        />

        <Browser 
          url="walgreens.com" 
          image="/projects/wag/gui/coupons.webp" 
          imageAlt="Walgreens Design Systems" 
        />
      </Block>

      <Block>
        <Intro 
          title="Design and Front End"
          text={
            <>
              <p>
                At Walgreens, my role was the designer and developer for the Walgreens Design Systems, promoting the 
                design and front-end integrity of foundational components that support Walgreens.com. In addition, front-end 
                developer of the Walgreens.com homepage and designer of Walgreen&apos;s functional icons.
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

      <Block width="medium">
        <WalgreensIcons />
      </Block>

      <Block>
        <WalgreensGui />
      </Block>

      <Block width="medium">
        <Browser 
          url="walgreens.com" 
          image="/projects/wag/site.webp" 
          imageAlt="Walgreens Design Systems" 
        />
      </Block>

      <Block>
        <NextProject 
          pageLink="/work/cardiact"
          title="CardiAct - Empowering Unresponsive Cariact Vicitims" 
          image="/projects/cardiact/hero.webp"
          imageAlt="Gather by Tyler Stober"
        />
      </Block>
    </SiteContainer>

  )
}

export default Walgreens
