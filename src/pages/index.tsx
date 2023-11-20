import React from 'react'
import type { NextPage } from 'next'
import { useImagePreloader } from '@lib'
import LoadingBar from 'react-top-loading-bar'
import { SiteContainer, Projects } from '@components'

// ---------------- Images to be loaded ----------------- //

const imageUrls = [
  "/projects/gather/profile.webp",
  "/projects/wag/gui/coupons.webp",
  "/projects/cardiact/hero.webp",
  "/projects/castle/stalbans.webp",
  "/projects/taa/screens/hero.webp"
]

// ---------- This is the end of declarations ---------- //

const Home: NextPage = () => {
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
          shareURL="https://tylerstober.com"
          pageTitle="Tyler Stober"
          content="US and Europe based multidisciplinary designer with a primary background in User Experience, User Interface Design, and Front End Development. In addition, also proficient in Motion and 3D design, rendering a unique technical perspective and collaborator with an awareness of multiple mediums."
          socialImage="https://tylerstober.com/global/social-hero.webp"
        >

          <Projects 
            projects={[
              { link: '/work/gather', title: 'Gather' },
              { link: '/work/walgreens', title: 'Walgreens' },
              { link: '/work/cardiact', title: 'CardiAct' },
              { link: '/work/castle', title: 'Castle for no Reason' },
              { link: '/work/taa', title: 'The Apparel Agency' },
              { link: '/work/animations', title: 'CSS Animations' },
            ]}
            images = {[
              { image: '/projects/gather/profile.webp', alt: "Gather Platform by Tyler Stober and Travis Rejman", url: "gather.goldininstitute.org" },
              { image: '/projects/wag/gui/coupons.webp', alt: "Walgreens Brand Standards", url: "walgreens.com" },
              { image: '/projects/cardiact/hero.webp', alt: "CardiAct - Response for unresponsive vicitims of cardiac arrest", url: "cardiact.com" },
              { image: '/projects/castle/stalbans.webp', alt: "3d model of St Albans Cathedral by Tyler Stober", url: "whooooooooooooooo.cool" },
              { image: '/projects/taa/screens/hero.webp', alt: "Plans by TAA", url: "blahblahblah.com" },
              { image: '/projects/cardiact/hero.webp', alt: "This is the Alt text", url: "I like turtles" },
              { image: '/projects/cardiact/hero.webp', alt: "This is the Alt text", url: "hello.com" }
            ]}
          />

        </SiteContainer>

      )}
    </>

  )
}

export default Home
