import React from 'react'
import type { NextPage } from 'next'
import { SiteContainer, About, DribbleIcon, GithubIcon, LinkedInIcon, MediumIcon } from '@components'

const AboutPage: NextPage = () => {
  return (
    
    <SiteContainer 
      hasContactForm 
      shareURL="https://tylerstober.com"
      pageTitle="Tyler Stober"
      content="Tyler Stober is a multidisicplinary designer"
      socialImage="https://mxmlcreative.com/global/social-hero.jpeg"
    >

      <About
        title="Tyler Stober"
        video="/about/turtles.mp4"
        descp={
          <>
            <p>
              Multidisciplinary designer with a primary background in User Experience, User Interface Design, and Front End Development. 
              In addition, also proficient in Motion and 3D design, rendering a unique technical perspective and collaborator with an 
              awareness of multiple mediums.
            </p>

            <p>
              Made in <a href="https://en.wikipedia.org/wiki/Bethel,_Ohio" target="_blank" rel="noreferer">small town</a> Ohio, educated 
              at <a href="https://en.wikipedia.org/wiki/University_of_Cincinnati_College_of_Design,_Architecture,_Art,_and_Planning" target="_blank" rel="noreferer">DAAP</a> at U 
              of Cincy, professionally developed in NYC and Chicago. Appreciator of <a href="https://www.pinterest.com/stobertg/user-interfaces/" target="_blank" rel="noreferer">design</a>, <a href="https://www.pinterest.com/stobertg/history/" target="_blank" rel="noreferer">history</a>, <a href="https://www.pinterest.com/stobertg/medieval-architecture/" target="_blank" rel="noreferer">architecture</a>, <a href="https://www.pinterest.com/stobertg/cinema4d/" target="_blank" rel="noreferer">3D</a>, and memorable <a href="https://www.pinterest.com/stobertg/experiences/" target="_blank" rel="noreferer">experiences</a>.
            </p>
          </>
        }
        socials={[
          { href: '/', icon: <DribbleIcon /> },
          { href: '/', icon: <GithubIcon /> },
          { href: '/', icon: <LinkedInIcon /> },
          { href: '/', icon: <MediumIcon /> }
        ]}
      />
    </SiteContainer>

  )
}

export default AboutPage