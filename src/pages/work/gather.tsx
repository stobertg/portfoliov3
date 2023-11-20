import React, { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import LoadingBar from 'react-top-loading-bar'
import { SiteContainer, Block, Hero, Intro, Browser, GatherLogo, NextProject } from '@components'

const Gather: NextPage = () => {
  const browserUrl = 'gather.goldininstitute.org'
  const [ progress, setProgress ] = useState( 0 )
  const [ showContent, setShowContent ] = useState( false )

  useEffect(() => {
    setProgress(100)
    if (progress === 100) {
      setTimeout(() => {
        setShowContent(true) // Set content to show after 1 second delay
      }, 300) // 1000 milliseconds = 1 second
    }
  }, [progress])

  return (

    <>
      <LoadingBar 
        color="yellow"
        progress={ progress }
        onLoaderFinished={() => setProgress(100)}
        shadow={ true }
      />

      { showContent && (
        <SiteContainer 
          shareURL="https://tylerstober.com/work/gather"
          pageTitle="Tyler Stober - Gather"
          content="US and Europe based multidisciplinary designer with a primary background in User Experience, User Interface Design, and Front End Development. In addition, also proficient in Motion and 3D design, rendering a unique technical perspective and collaborator with an awareness of multiple mediums."
          socialImage="https://tylerstober.com/global/social-hero.webp"
          blockSpacing="l2"
        >

          <Block width="medium" animateUp>
            <Hero 
              heroGraphic={ <GatherLogo /> }
              title="Gather Web Application" 
              subtitle="E-Learning Application for Grassroots Leadership"
            />
          </Block>

          <Block width="medium" animateUp animationDelay='2'>
            <Browser 
              url={ browserUrl }
              image="/projects/gather/profile.png" 
              imageAlt="Gather Pofile" 
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
                { title: 'Design Systems' },
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
            <Browser 
              url={ browserUrl + '/design-systems' } 
              image="/projects/gather/ds1.webp" 
              imageAlt="Walgreens Design Systems" 
            />

            <Browser 
              url={ browserUrl + '/lessons' } 
              image="/projects/gather/lessons.webp" 
              imageAlt="Walgreens Design Systems" 
            />
          
            <Browser 
              url={ browserUrl + '/library' }
              image="/projects/gather/library.webp" 
              imageAlt="Walgreens Design Systems" 
            />

            <Browser 
              url={ browserUrl + '/library-upload' } 
              image="/projects/gather/upload.webp" 
              imageAlt="Walgreens Design Systems" 
            />

            <Browser 
              url={ browserUrl + '/admin' } 
              image="/projects/gather/admin.webp" 
              imageAlt="Admin" 
            />
          </Block>

          <Block>
            <NextProject 
              pageLink="/work/walgreens"
              title="Walgreens Design Systems" 
              image="/projects/wag/gui/hero.webp"
              imageAlt="Walgreens Design Systems by Tyler Stober"
            />
          </Block>
        </SiteContainer>
      )}
    </>

  )
}

export default Gather
