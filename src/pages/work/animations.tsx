import React from 'react'
import type { NextPage } from 'next'
import { useImagePreloader } from '@lib'
import LoadingBar from 'react-top-loading-bar'
import ReactPlayer from 'react-player'
import { SiteContainer, Block, Hero, Intro, ArtizenAirplane, ArtizenNewton, ArtizenTrumpet, Knight, NextProject } from '@components'

// ---------------- Images to be loaded ----------------- //

const imageUrls = [
  "/projects/cardiact/process/poster.webp"
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
            <ArtizenNewton />
            <ArtizenAirplane />
            <ArtizenTrumpet />
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
      
      )}
    </>

  )
}

export default Gather
