import React from 'react'
import type { NextPage } from 'next'
import { useImagePreloader } from '@lib'
import LoadingBar from 'react-top-loading-bar'
import { SiteContainer, Block, Hero, Intro, NextProject } from '@components'

// ---------------- Images to be loaded ----------------- //

const imageUrls = [
  "/projects/castle/castle-hero.webp",
  "/projects/castle/stalbans.webp",
  "/projects/castle/the-inn.webp",
  "/projects/castle/stmarks.webp",
  "/projects/castle/castle-entrance.webp"
]

// ---------- This is the end of declarations ---------- //

const Castle: NextPage = () => {
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
          shareURL="https://tylerstober.com/work/castle"
          pageTitle="Tyler Stober - Castle for no Reason"
          content="US and Europe based multidisciplinary designer with a primary background in User Experience, User Interface Design, and Front End Development. In addition, also proficient in Motion and 3D design, rendering a unique technical perspective and collaborator with an awareness of multiple mediums."
          socialImage="https://tylerstober.com/global/social-hero.webp"
          blockSpacing="l2"
        >

          <Block width="medium" animateUp>
            <Hero 
              heroImage="/projects/castle/crest.png"
              heroImageAlt="Tyler Stober crest"
              title="The Castle for no Reasoagjhfdk" 
              subtitle="The House of Doge - all day, all night"
            />
          </Block>

          <Block width="medium" animateUp animationDelay='1'>
            <img 
              src="/projects/castle/castle-hero.webp" 
              alt="3d Medieval Castle by Tyler Stober" 
            />
          </Block>

          <Block width="medium">
            <Intro 
              title="The Lengend of the Doge"
              text={
                <>
                  <p>
                    During the late 1300s, John of Gaunt&apos;s bastard son, John the Doge, formed the House of Doge. It was said 
                    that this faction was created in secret, given his illegitimacy as a proper heir to any Plantagenet titles. 
                    While John of Gaunt&apos;s other sons were creating the House of Lancaster, York, Buckingham, Beaufort, March, 
                    and Somerset, John the Doge grew a bit bitter, vowing to be bigger and better than his relatives.
                  </p>

                  <p>
                    Perhaps this was simply a pump-and-dump scheme, as John never received the riches as his legitimate brothers; 
                    after all, there was obvious hidden bearish divergence. Yet through it all, John persisted - carving out his 
                    land, gathering a following, even creating his own currency, decentralizing the pound. Sooner or later, King 
                    Richard II took issue with his cousin&apos;s success and began to come down on John with severe regulations.
                  </p>

                  <p>
                    Refusing to comply, John issued Magna Doge against the King, which would prove to be the kick-starter for The 
                    Peasants Revolt.
                  </p>

                  <p>
                    Eventually, John was captured and faced trial for treason. He was sentenced to be hung, drawn, and quartered - 
                    he died in 1399. Although John the Doge eventually failed in life, his legacy lives on, as a legend and 
                    currency. These models are an attempt at a digital restoration of Stony Doge, which was destroyed during The 
                    Regulation. Does anyone even read these things? This is a terrible story so props if you lasted this long.
                  </p>
                </>
              }
              skills={[
                { title: '3d modeling' },
                { title: 'Eye-balling it / Winging it' },
                { title: 'Cinema4d' }
              ]}
              project={[
                { title: 'Solo passion project' },
                { title: '2017 - Present' }
              ]}
            />
          </Block>

          <Block width="medium">
            <img 
              src="/projects/castle/stalbans.webp" 
              alt="St Albans 3d model by Tyler Stober" 
            />
          </Block>

          <Block width="medium">
            <img 
              src="/projects/castle/the-inn.webp" 
              alt="Original Medieval 3d model of a town by Tyler Stober" 
            />
          </Block>

          <Block width="medium">
            <img 
              src="/projects/castle/stmarks.webp" 
              alt="3d St Marks Tower, Venice, Italy, by Tyler Stober" 
            />
          </Block>

          <Block width="medium">
            <img 
              src="/projects/castle/castle-entrance.webp" 
              alt="Original 3d Medieval Castle by Tyler Stober" 
            />
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

export default Castle
