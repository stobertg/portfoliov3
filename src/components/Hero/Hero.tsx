import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

// For the master container of the Hero section within the pages of the site
// This holds a graphic item on the top, the title and subtitle below

const HeroWrap = styled('div', {
  position: 'relative',
  width: '100%'
})

// For the container of all of the content within the master container
// This holds all of the content horizontally centered within the master container

const HeroContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  '> *:not(:last-child)': { marginBottom: 32 }
})

// For the container of all of the text below the graphic section of the hero
// This holds the main h1 title of the page and the h2 description of the text below

const HeroHeading = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '> *:not(:last-child)': { marginBottom: 8 },
  '> *:last-child': { maxWidth: '80%' }
})

// For the container of the optional image on the top of the hero section
// This to account for instances where a simple image is needed - most of the pages have some animation like graphic

const HeroImage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'realtive',
  img: { width: 150 }
})

// -------------- Typescript declarations -------------- //

interface HeroProps {
  heroGraphic?: React.ReactNode
  heroImage?: string
  heroImageAlt?: string
  title: string
  subtitle?: string
}

// ---------- This is the end of declarations ---------- //

export const Hero = ({ 
    heroGraphic, // Required if no image - For a complex child graphic
    heroImage, // Required if no graphic - For a simple image
    heroImageAlt, // Required if Image - For the alt text of the image
    title, // Required - For the h1 title of the page
    subtitle // Required - For the h2 text below the h1
  }:HeroProps) => {

  return(

    <HeroWrap>
      <HeroContent>
        { heroGraphic 
          ? ( <>{ heroGraphic }</> ) 
          : ( <HeroImage><img src={ heroImage } alt={ heroImageAlt } /></HeroImage> )
        }

        <HeroHeading>
          <Heading heavy htag="1" align="center" size="l6" {...{ title }} />
          <Heading htag="2" align="center" size="l2" color="secondary" title={ subtitle } />
        </HeroHeading>
      </HeroContent>
    </HeroWrap>

  )
}
