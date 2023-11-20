import React from 'react'
import type { NextPage } from 'next'
import { useImagePreloader } from '@lib'
import LoadingBar from 'react-top-loading-bar'
import { SiteContainer, Block, Hero, Intro, Browser, NextProject, TAALogo } from '@components'

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

const TAA: NextPage = () => {
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
          shareURL="https://tylerstober.com/work/taa"
          pageTitle="Tyler Stober - The Apparel Agency"
          content="US and Europe based multidisciplinary designer with a primary background in User Experience, User Interface Design, and Front End Development. In addition, also proficient in Motion and 3D design, rendering a unique technical perspective and collaborator with an awareness of multiple mediums."
          socialImage="https://tylerstober.com/global/social-hero.webp"
          blockSpacing="l2"
        >

          <Block width="medium" animateUp>
            <Hero 
              heroGraphic={ <TAALogo /> }
              title="The Apparel Agency" 
              subtitle="UI Design and Front End Devlopement"
            />
          </Block>

          <Block width="medium" animateUp animationDelay='1'>
            <Browser 
              url="www.theapparelagency.com" 
              image="/projects/taa/screens/hero.webp" 
              imageAlt="The Apparel Agency" 
            />
          </Block>

          <Block>
            <Intro 
              title="Threads for days"
              text={
                <>
                  <p>
                    A standard project for creating a marketing website for The Apparel Agency in Chicago, IL. In addition to the 
                    design, I was tasked with developing the site in WordPress, creating a personalized theme, and writing PHP to 
                    handle content inputted by the agency.
                  </p>

                  <p>
                    My main inspiration for the design was using the tools of the sowers to subtly incorporate into the site. Also 
                    at the time, the grid lines were a popular trend, and I utilized that trend as thread lines to relate back to 
                    sowing.
                  </p>
                </>
              }
              skills={[
                { title: 'UX/UI Design' },
                { title: 'Front End Development' }
              ]}
              project={[
                { title: 'Doejo - 2016' }
              ]}
            />
          </Block>

          <Block width="medium">
            <Browser 
              url="www.theapparelagency.com" 
              image="/projects/taa/screens/plans.webp" 
              imageAlt="The Apparel Agency" 
            />
          </Block>

          <Block width="medium">
            <Browser 
              url="www.theapparelagency.com" 
              image="/projects/taa/screens/collection.webp" 
              imageAlt="The Apparel Agency" 
            />
          </Block>

          <Block width="medium">
            <Browser 
              url="www.theapparelagency.com" 
              image="/projects/taa/screens/blog.webp" 
              imageAlt="The Apparel Agency" 
            />
          </Block>

          <Block width="medium">
            <Browser 
              url="www.theapparelagency.com" 
              image="/projects/taa/screens/about.webp" 
              imageAlt="The Apparel Agency" 
            />
          </Block>

          <Block>
            <NextProject 
              pageLink="/work/gather"
              title="Gather E-Learning app" 
              image="/projects/gather/profile.png"
              imageAlt="Gather by Tyler Stober"
            />
          </Block>
        </SiteContainer>

      )}
    </>

  )
}

export default TAA
