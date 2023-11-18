import React from 'react'
import Tilt from 'react-parallax-tilt'
import { styled } from '@theme'
import { Heading, Text } from '@components'

// For the master container of the about page that can clicked on in the global navigation
// This is the about me page that has a short bio and such for a quick about

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

// For the conainer of the main content within the master container
// This contains the title on the top, the desciption below and the links on the bottom of the container

const AboutContent = styled('div', {
  position: 'relative',
  maxWidth: 800,
  width: '90%',
  margin: '0 auto',
  zIndex: 10,
  '> *:not(:last-child)': { marginBottom: 20 },
  '> *:nth-child( 2 )': { marginBottom: 40 }
})

// For the background behind the main text of the about page
// This is displays the easter egg video that is a bit memeey

const AboutBackground = styled('div', {
  position: 'absolute',
  opacity: 0.1,
  video: { maxWidth: 1400, width: '100%' }
})

// For the container of the links on the bottom of the container
// This contains the social links that I'm conforatable with sharing such as LinkedIn, Github, ect

const SocialLinks = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  '> *:not(:last-child)': { marginRight: 4 },

  // For styling of the container for the individual boxes for the social links
  // This is used to add the border around the box and give affordance that it is a button

  a: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    minWidth: 50,
    height: 50,
    border: '1px solid $border',
    borderRadius: 20,
    transition: '$s1',
    '&:hover': { background: '$border' }
  },

  // For the size of the icons within the link container
  // This is to set the icons a bit smaller than bumping up against the sides of the container

  svg: {
    fill: '$white',
    width: 30,
    height: 30
  }
})

// For the container of the Resume link within the social link container
// This is needed so we can add some spacing on the left and right of the container

const ResumeLink = styled('div', {
  position: 'relative',
  padding: '0 20px'
})

// -------------- Typescript declarations -------------- //

interface AboutProps {
  title: string
  descp: React.ReactNode
  video: string
  resumeLink: string
  socials: { 
    href: string
    icon: React.ReactNode 
  }[]
}

// ---------- This is the end of declarations ---------- //

export const About = ({ 
    title, // Required - For the title of the page
    descp, // Required - For my short bio
    socials, // Required - For the social links people can view to learn more about me
    video, // Required - For the easter egg video in the background
    resumeLink // Required - For the link for the resume
  }:AboutProps) => {

  return(

    <AboutWrap>
      <AboutContent>
        <Heading heavy size="l5" {...{ title }} />
        <Text fontSize="l1">{ descp }</Text>

        <SocialLinks>
          { socials.map(( social, i ) => (
            <a key={`social-${ i }`} href={ social.href } target="_blank" rel="noreferrer">
              { social.icon }
            </a>
          ))}

          <a href={ resumeLink } target="_blank" rel="noreferrer">
            <ResumeLink><Heading bold title="Résumé" /></ResumeLink>
          </a>
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
