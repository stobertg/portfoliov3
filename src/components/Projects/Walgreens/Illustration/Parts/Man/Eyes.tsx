import React from 'react'
import { styled, keyframes } from '@theme'

// For the animations of the eyes blinking behind the glasses
// This is a subtle animation used to compliment the other animations

const animate__eyes = keyframes({
  '0%': { transform: 'scale( 1,1 )' },
  '5%': { transform: 'scale( 1,0 )' },
  '10%, 100%': { transform: 'scale( 1,1 )' }
})

// For the master container of the eyes behind the glasses
// This obviously has two eyes - one on the left and one on the right

const EyeWrap = styled('div', {
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  top: 80,
  width: '100%',
  height: 30,
  paddingLeft: 25,
  zIndex: 10,

  // For the container of the eyes within the master container
  // This holds the eyes on the left and right of the container

  div: {
    position: 'relative',
    width: 50,
    height: 8,
    transform: 'rotate(5deg)',

    // For the shared styling of the individual eyes
    // Just tiny dots, as well as applying the animation here

    '&:before, &:after': {
      content: '',
      position: 'absolute',
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: '$black',
      animation: `${ animate__eyes } 3s ease infinite`
    },

    // For the positions of the eyes within the container
    // Before is for the left eye and the after is for the right

    '&:before': { left: 0 },
    '&:after': { right: 0 }
  }
})

// ---------- This is the end of declarations ---------- //

export const Eyes = () => {
  return(

    <EyeWrap><div /></EyeWrap>

  )
}
