import React from 'react'
import type { NextPage } from 'next'
import { SiteContainer, Block, Hero, Intro, Browser, GatherLogo, NextProject } from '@components'

const Gather: NextPage = () => {
  return (
    
    <SiteContainer 
      shareURL="https://tylerstober.com/work/gather"
      pageTitle="Tyler Stober - Gather"
      content="US and Europe based multidisciplinary designer with a primary background in User Experience, User Interface Design, and Front End Development. In addition, also proficient in Motion and 3D design, rendering a unique technical perspective and collaborator with an awareness of multiple mediums."
      socialImage="https://tylerstober.com/global/social-hero.webp"
      blockSpacing="l2"
    >

      <Block width="medium">
        <Hero 
          heroGraphic={ <GatherLogo /> }
          title="Gather Web Application" 
          subtitle="E-Learning Application for Grassroots Leadership"
        />

        <Browser 
          url="gather.goldininstitute.org" 
          image="/projects/gather/profile.png" 
          imageAlt="Gather" 
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
          url="gather.goldininstitute.org" 
          image="/projects/gather/ds1.webp" 
          imageAlt="Walgreens Design Systems" 
        />

        <Browser 
          url="gather.goldininstitute.org" 
          image="/projects/gather/lessons.webp" 
          imageAlt="Walgreens Design Systems" 
        />

        <Browser 
          url="gather.goldininstitute.org" 
          image="/projects/gather/library.webp" 
          imageAlt="Walgreens Design Systems" 
        />

        <Browser 
          url="gather.goldininstitute.org" 
          image="/projects/gather/upload.webp" 
          imageAlt="Walgreens Design Systems" 
        />

        <Browser 
          url="gather.goldininstitute.org" 
          image="/projects/gather/admin.webp" 
          imageAlt="Walgreens Design Systems" 
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

  )
}

export default Gather
