import React from 'react'
import { styled, keyframes } from '@theme'

// For the animations of the dot to give the typing effect
// They all share the same aniamtion, but will have a delay to show it staggard

const pulsate = keyframes({
  '0%': { opacity: 0.3 },
  '50%': { opacity: 1 },
  '100%': { opacity: 0.3 }
})

// For the master container of the typing animation in the chat screen
// This is used to get the effect that a user is typing and about to post a message

const TypingWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  '> *:not(:last-child)': { marginRight: 2 },

  // For the shared styling of the three dots, horizontally centered in the container
  // For the animation, we set the delay on the second and third dots

  span: {
    position: 'relative',
    width: 6,
    height: 6,
    borderRadius: '50%',
    background: '$white',
    animation: `${ pulsate } 1000ms ease infinite`,
    '&:nth-child( 2 )': { animationDelay: '333ms' },
    '&:last-child': { animationDelay: '666ms' }
  }
})

// ---------- This is the end of declarations ---------- //

export const TypingAnimation = () => {
  return(

    <TypingWrap>
      <span />
      <span />
      <span />
    </TypingWrap>

  )
}
