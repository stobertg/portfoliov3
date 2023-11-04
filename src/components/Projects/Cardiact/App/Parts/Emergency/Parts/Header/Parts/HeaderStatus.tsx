import React from 'react'
import CountUp from 'react-countup'
import { styled } from '@theme'
import { Heading } from '@components'

// For the master container of the global HeaderStatus component within the emergency part of the app
// This is the very first content on the top of the container, below the iPhone time bar

const StatusContent = styled('div', {
  position: 'relative',
  width: '100%'
})

// For the container of the all of the content within the master container
// This hold the image and text on the left side of the container and the timer on the right side

const Status = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  width: '95%',
  margin: '0 auto',
  padding: 8,
  background: '#151515',
  border: '1px solid #212121',
  borderRadius: '$r1',
})

// For the container of the victim info on the left of the container
// This holds the image of the vicitim on the left and the text on the right

const StatusPerson = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  '> *:not(:last-child)': { marginRight: 12 }
})

// For the container of the thumbnail image of the vicitim
// This provides a wrapper for styling and then positions the image in the center of the container

const StatusImage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 40,
  height: 40,
  borderRadius: '$r0',
  overflow: 'hidden',
  img: { height: '100%', objectFit: 'cover', }
})

// For the container of the text to the right of the victim headshot image
// This contains the 'Time in distress' text on the top and the victims name on the bottom

const StatusText = styled('div', {
  position: 'relative',
  '> *:not(:last-child)': { marginBottom: 2 },
  '> *:last-child': { fontSize: 14 },
  '> *:first-child': { fontSize: 12, color: '#ff2b2b' }
})

// For the container of the count-up timer on the right side of the container
// This is used to show the amount of time the victim has been experiencing a cardiact arrest

const StatusTimer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 50,
  marginRight: 4,
  padding: '6px 0',
  fontSize: 12,
  background: 'linear-gradient(117deg, rgb(255 0 0) 0%, rgb(131, 24, 24) 100%)',
  border: '1px solid #eb0101',
  borderRadius: '$pill',
  '*': { fontFamily: '$sansSerifBold' },

  // Here we adjust for issues of the container moving depending on the current number
  // For example, 11 has a smaller width than 25, and here we account for stillness of the numbers

  '> *:first-child': { 
    width: '48%',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  
  // Here we set the width to be larger for the numbers animating
  // This is because the container contains 2 numbers, whereas the left container contains 1

  '> *:last-child': {
    width: '52%'
  }
})

// -------------- Typescript declarations -------------- //

interface StatusProps {
  image: string
  imageAlt: string
  name: string
}

// ---------- This is the end of declarations ---------- //

export const HeaderStatus = ({
    image, // Required - For the image of the victim
    imageAlt, // Required - For the name of the person in the image
    name // Required - For the name of the vicitim
  }:StatusProps) => {
  
  return(

    <StatusContent>
      <Status>
        <StatusPerson>
          <StatusImage><img src={ image } alt={ imageAlt } /></StatusImage>
          <StatusText>
            <Heading bold title="Time in distress" />
            <Heading heavy title={ name } />
          </StatusText>
        </StatusPerson>

        <StatusTimer>
          <Heading bold title="2:" />
          <CountUp 
            start={ 20 }
            end={ 59 } 
            duration={ 39 }
            useEasing={ false }
            onEnd={({ reset, start, update }) => start()}
          />
        </StatusTimer>
      </Status>
    </StatusContent>

  )
}
