import React from 'react'
import type { NextPage } from 'next'
import { useImagePreloader } from '@lib'
import LoadingBar from 'react-top-loading-bar'
import { SiteContainer, Block, Hero, Intro, Browser, GatherLogo, ManWithWallet, WalgreensIcons, WalgreensGui, NextProject } from '@components'

// ---------------- Images to be loaded ----------------- //

const imageUrls = [
  "/projects/wag/gui/coupons.webp",
  "/projects/wag/gui/gui.webp",
  "/projects/wag/site.webp"
]

// ---------- This is the end of declarations ---------- //

const Walgreens: NextPage = () => {
  const { progress, isLoaded } = useImagePreloader( imageUrls )

  return (

    <>
      <LoadingBar 
        color="yellow"
        progress={ progress }
        shadow={ true }
      />

      { isLoaded && (
    
        <SiteContainer 
          shareURL="https://tylerstober.com/work/walgreens"
          pageTitle="Tyler Stober - Walgreens Design System"
          content="US and Europe based multidisciplinary designer with a primary background in User Experience, User Interface Design, and Front End Development. In addition, also proficient in Motion and 3D design, rendering a unique technical perspective and collaborator with an awareness of multiple mediums."
          socialImage="https://tylerstober.com/global/social-hero.webp"
          blockSpacing="l2"
        >

          <Block width="medium" animateUp>
            <Hero 
              heroGraphic={ <ManWithWallet /> }
              title="Walgreens Design Systems" 
              subtitle="Design Systems, UX/UI Design, & Front End Development"
            />
          </Block>
          
          <Block width="medium" animateUp animationDelay="2">
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
            <WalgreensGui image="/projects/wag/gui/gui.webp" />
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

      )}
    </>

  )
}

export default Walgreens
