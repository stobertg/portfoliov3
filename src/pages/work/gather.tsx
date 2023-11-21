import React from 'react'
import type { NextPage } from 'next'
import LoadingBar from 'react-top-loading-bar'
import { useImagePreloader } from '@lib'
import { SiteContainer, Block, Hero, Intro, Browser, GatherLogo, NextProject } from '@components'

// ---------------- Images to be loaded ----------------- //

const imageUrls = [
  "/projects/gather/profile.webp",
  "/projects/gather/ds1.webp",
  "/projects/gather/lessons.webp",
  "/projects/gather/library.webp",
  "/projects/gather/upload.webp",
  "/projects/gather/admin.webp",
  "/projects/wag/gui/hero.webp"
]

// ---------- This is the end of declarations ---------- //

const Gather: NextPage = () => {
  const browserUrl = 'gather.goldininstitute.org'
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
              url={ browserUrl + '/profile' }
              image="/projects/gather/profile.webp" 
              imageAlt="Gather Pofile" 
            />
          </Block>

          <Block>
            <Intro 
              title="Creating a E-Learning Platform"
              text={
                <>
                  <p>
                    Gather&apos;s fundamental purpose is to foster a collaborative learning environment, where knowledge is gained 
                    and shared through a foundational curriculum, coupled with individual experiences. Gather&apos;s belief is that 
                    real change does not follow cliché templates controlled by bureaucratic flexors, but instead by empowering 
                    grassroot leaders who understand the nuanced and complex nature of their own communities. This unconventional 
                    approach creates realistic, small changes that compound into substantial growth within their communities.
                  </p>

                  <p>
                    Since 2021, my reponsibilties has been the sole designer, front-end developer, and back-end developer of the 
                    Gather platform. This is part of my non-profit design work.
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
