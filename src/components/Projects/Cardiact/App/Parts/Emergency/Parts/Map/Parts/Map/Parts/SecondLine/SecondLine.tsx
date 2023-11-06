import React from 'react'
import { styled, keyframes } from '@theme'
import { Aed, ResponderTwo } from '../'

// For the animation of the second responder moving to the AED and then the victim
// This takes the responder along the secondary lines, moving from the top left, to the bottom right, then the bottom left

const animateLineOne = keyframes({
  '0%, 10%': { transform: 'scale( 1, 1 )' },
  '60%, 100%': { transform: 'scale( 1, 0 )' }
})

// For the animation of the bottom line on the bottom of the container
// This stops about half way to show Responder Two going towards the vicitim and then the aniamtion restarts

const animateLineTwo = keyframes({
  '0%, 80%': { transform: 'scale( 1, 1 )' },
  '100%': { transform: 'scale( 0.3, 1 )' }
})

// For the master container of the all the content within the map screen
// This holds the Responder Two and the AED icon

const LineMaster = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: -25,
  right: 18,
  width: 178,
  height: 207,

  // For the shared styling of the lines (pseudo elements) within the container
  // This keeps us from repeating code below and allow us to consolidate variables in a single place

  '*': {
    '&:before, &:after': {
      content: '',
      position: 'absolute',
      bottom: 0,
      background: '#2b2b2b',
      borderRadius: 4
    },
  },

})

// For the master container of the Responder Two lines
// This starts on the top right of the map, moves down to the AED, and then continues to the victim

const LineWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
  position: 'relative',
  width: 157.5,
  height: '100%',
  zIndex: 0,

  // For the line on the right of the container
  // This is the tall verical line - first line of the user going south. Here we also set the animation attributes

  '&:before': {
    right: 0,
    width: 4,
    height: '100%',
    transformOrigin: 'bottom center',
    animation: `${ animateLineOne } 20s linear infinite forwards`,
  },

  // For the line on the bottom of the container
  // Here the line goes ful width of the parent container, horizontally and also setting the animation

  '&:after': {
    left: 0,
    width: '100%',
    height: 4,
    transformOrigin: 'left center',
    animation: `${ animateLineTwo } 20s linear infinite forwards`,
  }
})

// For the container of the bottom lines going from the AED to the victim
// These lines are on the bottom and left of the container

const LineBottom = styled('div', {
  position: 'relative',
  width: '100%',
  height: 112,

  // For the line on the left of the container
  // This shows the line going up pass 13th street towards the victim

  '&:before': {
    left: 0,
    width: 4,
    height: '100%'
  },

  '&:after': {
    left: 0,
    top: 0,
    width: 20, 
    height: 4,
  }
})

// ---------- This is the end of declarations ---------- //

export const SecondLine = () => {
  return(

    <LineMaster>
      <LineWrap>
        <LineBottom />
        <Aed />
      </LineWrap>

      <ResponderTwo />
    </LineMaster>

  )
}
