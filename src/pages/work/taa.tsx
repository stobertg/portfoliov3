import React from 'react'
import type { NextPage } from 'next'
import { SiteContainer, Block, Hero, Intro, Browser, NextProject, TAALogo } from '@components'

const TAA: NextPage = () => {
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
          heroGraphic={ <TAALogo /> }
          title="The Apparel Agency" 
          subtitle="UI Design and Front End Devlopement"
        />

        <Browser 
          url="www.theapparelagency.com" 
          image="/projects/taa/screens/hero.webp" 
          imageAlt="The Apparel Agency" 
        />
      </Block>

      <Block width="medium">
        <Intro 
          title="The Lengend of the Doge"
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

  )
}

export default TAA
