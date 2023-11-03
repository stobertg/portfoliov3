import React from 'react'
import { styled, keyframes } from '@theme'

const pulsate = keyframes({
  '0%': { opacity: 0.3 },
  '100%': { opacity: 1 }
})

const TypingWrap = styled('div', {
  
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
