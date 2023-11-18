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
  margin: '0 auto',
  zIndex: 10,
  '> *:not(:last-child)': { marginBottom: 20 }
})

const AboutBackground = styled('div', {
  position: 'absolute',
  opacity: 0.05,
  video: { width: 1100 }
})

const SocialLinks = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  '> *:not(:last-child)': { marginRight: 4 }
})

interface AboutProps {
  title: string
  descp: React.ReactNode
  video: string
  socials: { 
    href: string
    icon: React.ReactNode 
  }[]
}

export const About = ({ 
    title,
    descp,
    socials,
    video
  }:AboutProps) => {

  return(

    <AboutWrap>
      <AboutContent>
        <Heading heavy size="l5" {...{ title }} />
        <Text fontSize="l1">{ descp }</Text>

        <SocialLinks>
          { socials.map(( social, i ) => (
            <a 
              key={`social-${ i }`} 
              href={ social.href } 
              target="_blank" 
              rel="noreferrer"
            >
              { social.icon }
            </a>
          ))}
        </SocialLinks>
      </AboutContent>

      <AboutBackground>
        <Tilt
          trackOnWindow={ true }
          tiltMaxAngleX={ 10 }
          tiltMaxAngleY={ 10 }
        >

          <video autoPlay muted loop playsInline>
            <source type="video/mp4" src={ video } />
          </video>
          
        </Tilt>
      </AboutBackground>
    </AboutWrap>

  )
}
