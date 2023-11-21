import React from 'react'
import type { NextPage } from 'next'
import { useImagePreloader } from '@lib'
import LoadingBar from 'react-top-loading-bar'
import ReactPlayer from 'react-player'
import { SiteContainer, Block, Hero, Intro, Knight, MxmlHero, ArtizenAnimations, WalgreensIllusHero, NextProject } from '@components'

// ---------------- Images to be loaded ----------------- //

const imageUrls = [
  "/projects/mxml/logos/logo_01.png",
  "/projects/mxml/logos/logo_02.png",
  "/projects/mxml/logos/logo_03.png",
  "/projects/mxml/logos/logo_04.png",
  "/projects/mxml/logos/logo_05.png",
  "/projects/mxml/logos/logo_06.png",
  "/projects/mxml/logos/logo_07.png",
  "/projects/mxml/logos/logo_08.png",
  "/projects/mxml/logos/logo_09.png",
  "/projects/mxml/logos/logo_10.png",
  "/projects/mxml/logos/logo_11.png",
  "/projects/mxml/logos/logo_12.png",
  "/projects/mxml/logos/logo_13.png",
  "/projects/mxml/logos/logo_14.png",
  "/projects/mxml/logos/logo_15.png",
  "/projects/mxml/logos/logo_16.png",
  "/projects/mxml/backgrounds/bg_01.webp",
  "/projects/mxml/backgrounds/bg_02.webp",
  "/projects/mxml/backgrounds/bg_03.webp",
  "/projects/mxml/backgrounds/bg_04.webp",
  "/projects/mxml/backgrounds/bg_05.webp",
  "/projects/mxml/backgrounds/bg_06.webp",
  "/projects/mxml/backgrounds/bg_07.webp",
  "/projects/mxml/backgrounds/bg_08.webp",
  "/projects/mxml/backgrounds/bg_09.webp",
  "/projects/mxml/backgrounds/bg_10.webp",
  "/projects/mxml/backgrounds/bg_11.webp",
  "/projects/mxml/backgrounds/bg_12.webp",
  "/projects/mxml/backgrounds/bg_13.webp",
  "/projects/mxml/backgrounds/bg_14.webp",
  "/projects/mxml/backgrounds/bg_15.webp",
  "/projects/mxml/backgrounds/bg_16.webp"
]

// -------------- Typescript declarations -------------- //

const Gather: NextPage = () => {
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
          shareURL="https://tylerstober.com/work/animations"
          pageTitle="Tyler Stober - CSS Animations"
          content="US and Europe based multidisciplinary designer with a primary background in User Experience, User Interface Design, and Front End Development. In addition, also proficient in Motion and 3D design, rendering a unique technical perspective and collaborator with an awareness of multiple mediums."
          socialImage="https://tylerstober.com/global/social-hero.webp"
          blockSpacing="l2"
        >

          <Block width="medium" animateUp>
            <Hero 
              heroGraphic={ <Knight /> }
              title="The Anatomy of CSS Animations" 
              subtitle="Giving movement to "
            />
          </Block>

          <Block width="medium" animateUp animationDelay='1'>
            <ReactPlayer
              url="https://www.youtube.com/embed/SxX5DU8CkFI"
              width="100%"
              height="500px"
            />
          </Block>

          <Block>
            <Intro 
              title="Creating a E-Learning Platform"
              text={
                <>
                  <p>
                    Gather is both a mobile platform for shared learning and a curriculum for people who want to build on the talents 
                    of their neighbors and the assets of their communities to make real and lasting change. Participants in Gather 
                    learn and work together through an innovative curriculum that comes pre-loaded on a tablet device with all the 
                    connectivity materials videos practices and tools necessary to provide a mobile classroom and toolkit for community 
                    leadership.
                  </p>

                  <p>
                    My role is the sole designer and front-end developer of the Gather platform, working with a back-end dev to 
                    implement Gather as a fully functional application.
                  </p>
                </>
              }
              skills={[
                { title: 'UI/UX Design' },
                { title: 'Front end development' },
                { title: 'Back end development' },
                { title: 'Accessibility'}
              ]}
              project={[
                { title: 'Goldin Institute: 2017 - Present' },
                { title: 'Co-founder - Travis Rejman' }
              ]}
            />
          </Block>

          <Block width="medium">
            <MxmlHero 
              logos={[
                "/projects/mxml/logos/logo_01.png",
                "/projects/mxml/logos/logo_02.png",
                "/projects/mxml/logos/logo_03.png",
                "/projects/mxml/logos/logo_04.png",
                "/projects/mxml/logos/logo_05.png",
                "/projects/mxml/logos/logo_06.png",
                "/projects/mxml/logos/logo_07.png",
                "/projects/mxml/logos/logo_08.png",
                "/projects/mxml/logos/logo_09.png",
                "/projects/mxml/logos/logo_10.png",
                "/projects/mxml/logos/logo_11.png",
                "/projects/mxml/logos/logo_12.png",
                "/projects/mxml/logos/logo_13.png",
                "/projects/mxml/logos/logo_14.png",
                "/projects/mxml/logos/logo_15.png",
                "/projects/mxml/logos/logo_16.png"
              ]}  
              backgroundImages={[
                "/projects/mxml/backgrounds/bg_01.webp",
                "/projects/mxml/backgrounds/bg_02.webp",
                "/projects/mxml/backgrounds/bg_03.webp",
                "/projects/mxml/backgrounds/bg_04.webp",
                "/projects/mxml/backgrounds/bg_05.webp",
                "/projects/mxml/backgrounds/bg_06.webp",
                "/projects/mxml/backgrounds/bg_07.webp",
                "/projects/mxml/backgrounds/bg_08.webp",
                "/projects/mxml/backgrounds/bg_09.webp",
                "/projects/mxml/backgrounds/bg_10.webp",
                "/projects/mxml/backgrounds/bg_11.webp",
                "/projects/mxml/backgrounds/bg_12.webp",
                "/projects/mxml/backgrounds/bg_13.webp",
                "/projects/mxml/backgrounds/bg_14.webp",
                "/projects/mxml/backgrounds/bg_15.webp",
                "/projects/mxml/backgrounds/bg_16.webp"
              ]}
            />
          </Block>

          <Block width="medium">
            <ArtizenAnimations />
          </Block>

          <Block width="medium">
            <WalgreensIllusHero />
          </Block>

          <Block>
            <NextProject 
              pageLink="/work/taa"
              title="The Apparel Agency" 
              image="/projects/taa/screens/hero.webp"
              imageAlt="The Apparel Agency by Tyler Stober"
            />
          </Block>
        </SiteContainer>
      
      )}
    </>

  )
}

export default Gather
