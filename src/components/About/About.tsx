import React from 'react'
import Tilt from 'react-parallax-tilt'
import { styled } from '@theme'
import { Heading, Text } from '@components'

const AboutWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh'
})

const AboutContent = styled('div', {
  position: 'relative',
  maxWidth: 800,
  width: '90%',
  margin: '0 auto'
})

const AboutBackground = styled('div', {
  position: 'absolute',
  opacity: 0.1,
  video: { width: 1100 }
})

interface AboutProps {

}

export const About = ({}:AboutProps) => {
  return(

    <AboutWrap>
      <AboutContent>
        <Heading title="Tyler Stober" />

        <Text>
          <p>
            Multidisciplinary designer with a primary background in User Experience, User Interface Design, and Front End Development. 
            In addition, also proficient in Motion and 3D design, rendering a unique technical perspective and collaborator with an 
            awareness of multiple mediums.
          </p>
        </Text>
      </AboutContent>

      <AboutBackground>
        <Tilt
          trackOnWindow={ true }
          tiltMaxAngleX={ 10 }
          tiltMaxAngleY={ 10 }
        >

          <video autoPlay muted loop playsInline>
            <source type="video/mp4" src='/about/turtles.mp4' />
          </video>
          
        </Tilt>
      </AboutBackground>
    </AboutWrap>

  )
}
