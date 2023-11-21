import React from 'react'
import type { NextPage } from 'next'
import "@animxyz/core"
import { XyzTransition } from '@animxyz/react'
import LoadingBar from 'react-top-loading-bar'
import { useImagePreloader } from '@lib'
import { SiteContainer, About, DribbleIcon, GithubIcon, LinkedInIcon, MediumIcon } from '@components'

// ---------------- Images to be loaded ----------------- //

const imageUrls = [
  "/projects/gather/profile.webp"
]

// ---------- This is the end of declarations ---------- //

const AboutPage: NextPage = () => {
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
          shareURL="https://tylerstober.com/about"
          pageTitle="Tyler Stober"
          content="US and Europe based multidisciplinary designer with a primary background in User Experience, User Interface Design, and Front End Development. In addition, also proficient in Motion and 3D design, rendering a unique technical perspective and collaborator with an awareness of multiple mediums."
          socialImage="https://tylerstober.com/global/social-hero.webp"
        >
          <XyzTransition xyz="fade fade down-25% duration-10" appearVisible>
            
            <About
              title="Tyler Stober"
              video="/about/turtles.mp4"
              resumeLink="/"
              descp={
                <>
                  <p>
                    Multidisciplinary designer with a primary background in User Experience, User Interface Design, and Front End Development. 
                    In addition, also proficient in Motion and 3D design, rendering a unique technical perspective and collaborator with an 
                    awareness of multiple mediums.
                  </p>

                  <p>
                    Made in <a href="https://en.wikipedia.org/wiki/Bethel,_Ohio" target="_blank" rel="noreferrer">small town</a> Ohio, educated 
                    at <a href="https://en.wikipedia.org/wiki/University_of_Cincinnati_College_of_Design,_Architecture,_Art,_and_Planning" target="_blank" rel="noreferrer">DAAP</a> at U 
                    of Cincy, professionally developed in NYC and Chicago. Interests in <a href="https://www.pinterest.com/stobertg/user-interfaces/" target="_blank" rel="noreferrer">design,</a> <a href="https://www.pinterest.com/stobertg/history/" target="_blank" rel="noreferrer">history,</a> <a href="https://www.pinterest.com/stobertg/medieval-architecture/" target="_blank" rel="noreferrer">architecture,</a> <a href="https://www.pinterest.com/stobertg/cinema4d/" target="_blank" rel="noreferrer">3D,</a> and memorable <a href="https://www.pinterest.com/stobertg/experiences/" target="_blank" rel="noreferrer">experiences</a>.
                  </p>
                </>
              }
              socials={[
                { href: 'https://www.linkedin.com/in/tyler-stober/', icon: <LinkedInIcon /> },
                { href: 'https://github.com/stobertg/portfoliov3', icon: <GithubIcon /> },
                { href: 'https://dribbble.com/stobertg', icon: <DribbleIcon /> },
                { href: 'https://medium.com/@TylerStober', icon: <MediumIcon /> }
              ]}
            />

          </XyzTransition>
        </SiteContainer>

      )}
    </>

  )
}

export default AboutPage
