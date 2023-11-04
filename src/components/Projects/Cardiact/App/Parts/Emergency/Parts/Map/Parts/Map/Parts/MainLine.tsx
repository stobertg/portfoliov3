import React from 'react'
import { styled, keyframes } from '@theme'
import { Victim, Responder } from './'

// For the animations of the lines from the responder getting to the victim
// This is taken from bottom to top in the container, going from the bottom left to the top right

const animateLineOne = keyframes({
  '0%': { transform: 'scale( 1, 1 )' },
  '20%, 100%': { transform: 'scale( 1, 0 )' }
})

// For the mid line, going horizontal, passing through Jackson St
// This line covers two half bocks

const animateLineTwo = keyframes({
  '0%, 20%': { transform: 'scale( 1, 1 )' },
  '40%, 100%': { transform: 'scale( 0, 1 )' }
})

// For the long line on the top left 
// This shows the user running up after Jackson st, passing W 13th st

const animateLineThree = keyframes({
  '0%, 40%': { transform: 'scale( 1, 1 )' },
  '60%, 100%': { transform: 'scale( 1, 0 )' }
})

// For the final line on the top of the animation
// This is the final left turn and then the user gets to the victim

const animateLineFour = keyframes({
  '0%, 60%': { transform: 'scale( 1, 1 )' },
  '70%, 100%': { transform: 'scale( 0, 1 )' }
})

// For the master container of the of user getting to the victim
// This contains the four lines, the responder animation and the vicitim on the top left of the container

const LineMaster = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'flex-end',
  position: 'relative',
  width: 101,
  height: 210,
  transform: 'translateY( -20px )'
})

// Here we set the container of the four lines that shows the responder getting to the user
// This contains four lines starting on the bottom right to the top left

const LineWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'relative',
  width: 80,
  height: '100%',

  // For the shared styling of the four lines in the container
  // These share a lot of styling elements that we can consolidate here

  '*': {
    '&:before, &:after': {
      content: '',
      position: 'absolute',
      top: 0,
      background: '#4375ff',
      borderRadius: 4
    }
  }
})

// For the two lines on the top of the container
// This contains the long line on the left of the container and the final, short line to the victim

const TopLines = styled('div', {
  position: 'relative',
  width: '100%',
  height: 108,

  // For the horizontal tiny line on the top left of the container
  // Here we set the position and attach the fourth animation from above

  '&:before': { 
    left: 0,
    width: 20, 
    height: 4,
    transformOrigin: 'right center',
    animation: `${ animateLineFour } 20s linear infinite forwards` 
  },

  // For the vertical line on the left of the container
  // Here we set the position and attach the third animation from above

  '&:after': { 
    left: 0,
    width: 4, 
    height: '102%',
    transformOrigin: 'top center',
    animation: `${ animateLineThree } 20s linear infinite forwards` 
  },
})

// For the container of the lines on the bottom of the container
// This contains the line on the bottom right and the full width horizontal line on the top of the container

const BottomLines = styled('div', {
  position: 'relative',
  width: '100%',
  height: 102,

  // For the horizontal line on the top of the container
  // Here we set the position and attach the second animation from above

  '&:before': { 
    left: 0, 
    width: '100%', 
    height: 4,
    transformOrigin: 'left center',
    animation: `${ animateLineTwo } 20s linear infinite forwards`
  },

  // For the vertical line on the right of the container
  // Here we set the position and attach the first animation from above

  '&:after': { 
    right: 0, 
    height: '100%', 
    width: 4, 
    transformOrigin: 'top center',
    animation: `${ animateLineOne } 20s linear infinite forwards` 
  }
})

// ---------- This is the end of declarations ---------- //

export const MainLine = () => {
  return(

    <LineMaster>
      <LineWrap>
        <TopLines><Victim /></TopLines>
        <BottomLines />
      </LineWrap>

      <Responder />
    </LineMaster>

  )
}
