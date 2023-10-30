import React from 'react'
import Link from 'next/link'
import { styled } from '@theme'
import { Heading } from '@components'

// For the master container of the next project button
// This is positioned at the bottom of every project page that makes it easy for the user to go to the next project

const NextWrap = styled('div', {
  position: 'relative',
  width: '100vw',
  background: '$black',
  overflow: 'hidden',
  cursor: 'pointer',

  '&:hover': {
    img: { transform: 'scale( 1.1 )' }
  }
})

// For the container of the text in the center of the container
// This holds the title of the next project

const NextContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  maxWidth: 500,
  width: '90%',
  margin: '0 auto',
  padding: '120px 0',
  zIndex: 1,
  '> *:not(:last-child)': { marginBottom: 12 }
})

// For the image background that gives a hit to the visuals of the next project
// This sits behind the text in the front

const NextBg = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  width: '100%',
  objectFit: 'cover',
  zIndex: 0,

  // Here we set the image to be within the center of the container
  // This is setting the image to act like a background-image css attribute

  img: {
    position: 'absolute',
    opacity: 0.2,
    transition: '$s2'
  }
})

// -------------- Typescript declarations -------------- //

interface NextProps {
  pageLink: string
  title: string
  image: string
  imageAlt: string
}

// ---------- This is the end of declarations ---------- //

export const NextProject = ({ 
    pageLink, // Required - For the link to the next project
    title, // Required - For the title of the next project
    image, // Required - For the image hint of the next project
    imageAlt // Required - For the alt text for the image
  }:NextProps) => {

  return(

    <Link href={ pageLink }>
      <NextWrap>
        <NextContent>
          <Heading title="Next Project" />
          <Heading heavy size="l5" {...{ title }} />
        </NextContent>

        <NextBg><img src={ image } alt={ imageAlt } /></NextBg>
      </NextWrap>
    </Link>

  )
}
