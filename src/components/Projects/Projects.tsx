import React, { useState } from 'react'
import Link from 'next/link'
import Tilt from 'react-parallax-tilt'
import { styled } from '@theme'
import { Browser, Heading } from '@components'

// For the master container of the Project Selection component
// This is set on the index page, where a user can choose to view a selected project

const ProjectWrap = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh'
})

// For the master container of the text within the center of the master container
// This holds the project titles text aligned center

const ProjectContent = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  height: '100%'
})

const ProjectList = styled('div', {
  position: 'relative',
  maxWidth: 700,
  width: '100%',
  zIndex: 10,

  ul: {
    listStyle: 'none'
  },

  li: {
    display: 'flex',
    justifyContent: 'center'
  }
})

const ProjectItem = styled('div', {
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',

  '&:after': {
    content: '',
    position: 'absolute',
    width: '100%',
    height: 3,
    marginTop: 8,
    background: '$white',
    transform: 'scale( 0, 1 )',
    transition: '$s2 ease'
  },

  '&:hover:after': { transform: 'scale( 1, 1 )' }
})

const ProjectBackground = styled('div', {
  position: 'absolute',
  width: 1024,
  margin: '0 auto',
  opacity: 0.1
})

interface ProjectProps {
  projects: {
    link: string
    title: string
  }[]
}

export const Projects = ({ projects }:ProjectProps) => {
  
  const images = [
    { id: 0, image: '/projects/gather/profile.webp', alt: "This is the Alt text" },
    { id: 1, image: '/projects/cardiact/hero.webp', alt: "This is the Alt text" },
    { id: 2, image: '/projects/cardiact/hero.webp', alt: "This is the Alt text" },
    { id: 3, image: '/projects/castle/stalbans.webp', alt: "This is the Alt text" },
    { id: 4, image: '/projects/taa/screens/hero.webp', alt: "This is the Alt text" },
    { id: 5, image: '/projects/cardiact/hero.webp', alt: "This is the Alt text" },
    { id: 6, image: '/projects/cardiact/hero.webp', alt: "This is the Alt text" }
  ]

  const [ image, setImage ] = useState( images[0].image )
  
  return(

    <ProjectWrap>
      <ProjectContent>
        <ProjectList>
          <ul>
            { projects.map(( project, i ) => (

              <li key={`project-${ i }`}>
                <Link href={ project.link }>
                  <a onMouseEnter={ () => setImage( images[i].image ) }>
                    <ProjectItem>
                      <Heading font='serif' size="l5" align="center" title={ project.title } />
                    </ProjectItem>
                  </a>
                </Link>
              </li>

            ))}
          </ul>
        </ProjectList>
        
        <ProjectBackground>
          <Tilt
            trackOnWindow={ true }
            tiltMaxAngleX={ 10 }
            tiltMaxAngleY={ 10 }
          >
    
            <Browser 
              url="gather.goldininstitute.org" 
              image={ image }
              imageAlt="Gather"
              maxHeight="l1"
            />
            
          </Tilt>
        </ProjectBackground>
      </ProjectContent>
    </ProjectWrap>

  )
}
