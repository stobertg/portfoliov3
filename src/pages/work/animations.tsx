import React from 'react'
import type { NextPage } from 'next'
import { SiteContainer, Block, Hero, Intro, ArtizenAirplane, ArtizenNewton, ArtizenTrumpet } from '@components'

const Gather: NextPage = () => {
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
          title="Gather Web Application" 
          subtitle="E-Learning Application for Grassroots Leadership"
        />

        <ArtizenNewton />
        <ArtizenAirplane />
        <ArtizenTrumpet />
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
    </SiteContainer>

  )
}

export default Gather
