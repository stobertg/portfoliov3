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
              title="CSS Illustrative Animations" 
              subtitle="Giving movement to code"
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
              title="Giving Movement to Code"
              text={
                <>
                  <p>
                    CSS animations offer several practical advantages for web design. They are efficient and lightweight, 
                    which means faster loading times and improved website performance. Their customizability allows designers 
                    to finely control the timing and appearance of animations, aligning them with their design goals. 
                    CSS animations are also responsive, seamlessly adapting to various screen sizes, ensuring a consistent user 
                    experience. Moreover, they enable interactivity, making websites more engaging through user-triggered 
                    animations. Their compatibility with modern browsers, accessibility features, and SEO benefits make them a 
                    dependable choice for creating polished and functional web animations.
                  </p>
                </>
              }
              skills={[
                { title: 'Front end development' },
                { title: 'CSS-in-JS, SASS' }
              ]}
              project={[
                { title: 'Various Projects' },
                { title: '2017 - Present' }
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
