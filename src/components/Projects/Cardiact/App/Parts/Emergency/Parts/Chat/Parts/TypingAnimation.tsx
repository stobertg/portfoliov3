import React from 'react'
import { styled, keyframes } from '@theme'

const pulsate = keyframes({
  '0%': { opacity: 0.3 },
  '50%': { opacity: 1 },
  '100%': { opacity: 0.3 }
})

const TypingWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  '> *:not(:last-child)': { marginRight: 2 },

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

export const TypingAnimation = () => {
  return(

    <TypingWrap>
      <span />
      <span />
      <span />
    </TypingWrap>

  )
}
