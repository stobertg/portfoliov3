import React from 'react'
import { styled } from '@theme'

// For the master container of the base of the horse
// This sets the position of body of the horse in the container

const Body = styled('div', {
  position: 'absolute',
  bottom: 0,
  right: 0,
  width: 260
})

// ---------- This is the end of declarations ---------- //

export const HorseBody = () => {
  return(

    <Body>
      <svg viewBox="0 0 161.8 78.2">
        <path d="M155.6,56.5c4.5-6.7,5.5-15.1,6.1-19.9c0.6-4.8-0.7-14.5-1.9-16.1s-1.7-2.9-4.3-6.8c-2.7-3.8-5.1-6.1-10.8-8.5
          s-18.5-6-27.2-4.9S96,6.1,87.8,8.7s-22,2.8-25.9,1S49.8,6.2,45.2,6.1C40.5,6,32.4,4.2,26.7,0C26.7,0-6,17,1,46.2
          c0.4,1.8,1.6,5.7,2.2,7.3c0.6,1.7,0.1,4.3,0.5,7C4.1,63.2,5,65.7,6,67.7s5.2,4.5,6.6,5.2c0,0,10.4,6.8,30.8,5.1
          c5.2-0.6,13.2-1.2,20.4-1.7s5.5-0.7,13.5-1.5s18.3-5.8,25.3-11l10-4.7c6.8-2.5,10.6,0.5,10.6,0.5S143.8,75.1,155.6,56.5z"
        />
      </svg>
    </Body>

  )
}
