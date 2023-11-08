import React from 'react'
import { styled } from '@theme'
import { Heading, Icon } from '@components'
import { ResponseStatus } from './Parts'
import { Card } from '../'

// For the container of the hero within the master card container
// This holds the image, title, and age on the top of the container

const CardHero = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  padding: '20px 0',
  '> *:not(:last-child)': { marginBottom: 8 }
})

// For the container of the image within the Hero section
// This holds the headshot of the user, siting in the center of the container

const ProfileImage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 68,
  height: 68,
  background: '$white',
  border: '2px solid $white',
  borderRadius: '50%',
  overflow: 'hidden',

  // For the position of the image to be in the center of the master container
  // This is set to act like a background-image: cover 

  img: { 
    position: 'absolute',
    height: '100%',
    width: 'auto' 
  }
})

// For the container of the text below the hero image
// This contains the name of the user and the age

const CardText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  fontSize: 14,
  '> *:not(:last-child)': { marginBottom: 2 }
})

// For the container of the 'Forcable entry' text
// This is important to show responders that it is okay to force entry into a person's home to save them

const CardChip = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  padding: '14px 8px',
  borderTop: '1px solid #212121',
  color: 'red',
  fontSize: 12,

  variants: {
    forcedEntry: {
      true: {
        color: '#52fe52',
      }
    }
  }
})

// -------------- Typescript declarations -------------- //

interface CardProps {
  image: string
  imageAlt: string
  name: string
  gender: string
  age: number
  forcedEntry?: boolean
}

// ---------- This is the end of declarations ---------- //

export const ProfileCard = ({ 
    image, // Required - For the image of the user
    imageAlt, // Required - Description of the image
    name, // Required - For the name of the user
    gender, // Required - For the gender of the user
    age, // Required - For the age of the user 
    forcedEntry // Required - If a responder is allowed to enter or not
  }:CardProps) => {
  
  return(

    <Card removeSpacing>
      <CardHero>
        <ProfileImage><img src={ image } alt={ imageAlt } /></ProfileImage>
        <CardText>
          <Heading heavy size="l1" title={ name } />
          <Heading color="secondary" title={`${ gender }, aged ${ age }`} />

          <ResponseStatus />
        </CardText>
      </CardHero>

      <CardChip {...{ forcedEntry }}>
        <Heading bold title={`Forcable entry ${ forcedEntry ? 'allowed' : 'not allowed' }`} />
      </CardChip>
    </Card>

  )
}
