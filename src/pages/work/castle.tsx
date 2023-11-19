import React from 'react'
import type { NextPage } from 'next'
import { SiteContainer, Block, Hero, Intro, NextProject } from '@components'

const Castle: NextPage = () => {
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
          heroImage="/projects/castle/crest.png"
          heroImageAlt="Tyler Stober crest"
          title="The Castle for no Reasoagjhfdk" 
          subtitle="The House of Doge - all day, all night"
        />

        <img src="/projects/castle/castle-hero.webp" alt="Castle by Tyler Stober" />
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
        <img src="/projects/castle/stalbans.webp" alt="Tyler Stober St Albans 3d model" />
      </Block>

      <Block width="medium">
        <img src="/projects/castle/the-inn.webp" alt="Tyler Stober St Albans 3d model" />
      </Block>

      <Block width="medium">
        <img src="/projects/castle/stmarks.webp" alt="Tyler Stober St Albans 3d model" />
      </Block>

      <Block width="medium">
        <img src="/projects/castle/castle-entrance.webp" alt="Tyler Stober St Albans 3d model" />
      </Block>

      <Block>
        <NextProject 
          pageLink="/work/gather"
          title="Gather E-Learning app" 
          image="/projects/gather/profile.webp"
          imageAlt="Gather by Tyler Stober"
        />
      </Block>
    </SiteContainer>

  )
}

export default Castle
