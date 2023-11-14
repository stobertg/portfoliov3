import React from 'react'
import { styled } from '@theme'
import { Heading, Icon } from '@components'
import { Card } from '../../../../Shared'

// For the container of all of the content within the master card container
// This holds the map image on the left and the address text on the right

const CardContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  width: '90%',
  margin: '0 auto',
  padding: '12px 0',
  '> *:not(:last-child)': { marginRight: 16 }
})

// For the container of the image on the left of the container
// This holds the map image of the current loaction, with the pin icon in the center

const CardImage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 80,
  height: 60,
  borderRadius: '$r0',
  overflow: 'hidden',

  // For the placement of the image to sit in the center of the container
  // This will posiiton the image similar to an background-image: cover css property
  
  img: {
    position: 'absolute',
    height: '100%',
    width: 'auto',
    zIndex: 0
  }
})

// For the container of the text on the right of the container
// This hold the current location address of the user

const CardText = styled('div', {
  position: 'relative',
  lineHeight: 1.3,
  '> *:not(:last-child)': { marginBottom: 4 },
  '> *:first-child': { fontSize: 12 },
  '> *:last-child': { fontSize: 14 }
})

// -------------- Typescript declarations -------------- //

interface CardProps {
  currentLocation: string
}

// ---------- This is the end of declarations ---------- //

export const LocationCard = ({ currentLocation }:CardProps) => {
  return(

    <Card direction="horizontal">
      <CardImage>
        <img src="/projects/cardiact/location.webp" alt="location" />
        <Icon size="l1" icon="map-pin" />
      </CardImage>

      <CardText>
        <Heading color="secondary" title="Current location" />
        <Heading bold title={ currentLocation } />
      </CardText>
    </Card>

  )
}
