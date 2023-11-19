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

// For the container of the project list in the forground of the container
// This contains a list of the selected projects I am displaying on the portfolio

const ProjectList = styled('div', {
  position: 'relative',
  maxWidth: 700,
  width: '100%',
  zIndex: 10,
  ul: { listStyle: 'none' },
  li: { display: 'flex', justifyContent: 'center' }
})

// For the styling of the individual links within the li container
// This sets the title to be in the center and the sets the line up that reveals on hover

const ProjectItem = styled('div', {
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',

  // For the line in the middle of the word that shows up on hover
  // Here we set all of the styling and user scale to hide the lines on default

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

  // On hover, we reveal the line horizontally centered in the container
  // This takes up the full width of the word

  '&:hover:after': { transform: 'scale( 1, 1 )' }
})

// For the container of the background images behind the text container
// This has a different image that displays based on the project a user hovers over - image associated with the project

const ProjectBackground = styled('div', {
  position: 'absolute',
  width: 1024,
  margin: '0 auto',
  opacity: 0.1,
  '@tablet': { display: 'none' }
})

// -------------- Typescript declarations -------------- //

interface ProjectProps {
  images: {
    url: string
    image: string
    alt: string
  }[]
  projects: {
    link: string
    title: string
  }[]
}

// ---------- This is the end of declarations ---------- //

export const Projects = ({ images, projects }:ProjectProps) => {
  const [ url, setUrl ] = useState( images[0].image )
  const [ image, setImage ] = useState( images[0].image )
  const [ imageAlt, setImageAlt ] = useState( images[0].image )
  
  return(

    <ProjectWrap>
      <ProjectContent>
        <ProjectList>
          <ul>
            { projects.map(( project, i ) => (

              <li key={`project-${ i }`}>
                <Link href={ project.link }>
                  <a onMouseEnter={() => {
                    setUrl( images[i].url )
                    setImage( images[i].image )
                    setImageAlt( images[i].alt )
                  }}>

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
              url={ url }
              image={ image }
              imageAlt={ imageAlt }
              maxHeight="l1"
            />
            
          </Tilt>
        </ProjectBackground>
      </ProjectContent>
    </ProjectWrap>

  )
}
