import React from 'react'
import { styled, keyframes } from '@theme'

// For the animation of the tail
// This is used to match the motion of the horse running in relation to the body and head

const animateTail = keyframes({
  '0%': { transform: 'scale(1) rotate(-6deg)' },
  '50%': { transform: 'scale(1.1, 0.9) rotate(-6deg)' },
  '100%': { transform: 'scale(1) rotate(-6deg)' }
})

// For the container of the tail on the horse 
// This sits on the far right of he container, to the right of the body... duhhh

const Tail = styled('div', {
  position: 'absolute',
  width: 140,
  right: -120,
  top: 65,
  transform: 'rotate(-6deg)',
  animation: `${ animateTail } 800ms ease infinite`,
  transformOrigin: 'top left'
})

// ---------- This is the end of declarations ---------- //

export const HorseTail = () => {
  return(

    <Tail>
      <svg viewBox="0 0 87.4 41.3">
        <path d="M3.8,14.1c0,0,1.7,2.2,2.2,5.5s2.1,5.4,2.7,5.7c0.6,0.2-0.7-1-0.8-2.3c-0.2-1.3-0.6-4.8-1.2-6s-0.7-2.7,0-1.8
          c0.7,0.8,1,3.6,1.7,5.3s1.3,2.2,1.4,3.5c0.1,1.2,1.6,3.2,2.2,3.8c0.7,0.5,6.2,3.7,8.6,2.8s0.2-0.7-1.8-1.9s-3.7-3.8-3.8-4.5
          c-0.1-0.7-0.1-0.7-0.1-0.7S12.6,21,12,19.7c-0.6-1.3,0.8-3.4,2.1-1s5.8,7.8,6.9,8.9c1.1,1.1,4.3,3.9,7.8,5.2s10.5,0.2,11.4,0
          s-4.4,0.2-6.5-0.8c-2.1-1.1-4.1-1.5-3.8-2.7s0.8-0.2,2.6,0.1c1.8,0.3,6.1,1.4,10.5,1.4s15.8-1.5,18.8,1.8s5.4,6.5,7.8,8.3
          c2.4,1.8-1.5-2-2.2-4.5c-0.7-2.5-2.8-3-3.6-4.9c-0.8-1.9-2.6-1.8-0.8-1.9c1.7-0.1,4.1-1.2,6.7-0.9c2.6,0.2,3.3-0.6,2.4-0.9
          s-2.7,0.5-2.4-0.4c0.2-0.8,2.7-2.2,4.6-0.9c1.9,1.3,4.5,2,5.4,3.8c0.9,1.8,2,2.1,1.9,3.6s0.8,1.5,1.1,1.5c0.3,0-0.4-2.5-0.9-3.9
          s-3.2-5-5.3-5c-2.2,0,1.8-2.6,4.2-1.2c2.4,1.3,6.6,5.1,6.8,6.6c0,0,0.3-2.3-1.2-4.4c-1.6-2.1-4-2.7-5.9-3.9s-3.8,0.2-5.1-2.2
          s-3.9-3.6-6.2-3.9c-2.3-0.3-4.9,0.4-7.4-0.1s-6.8-0.8-8.5-1.8s-1.8-2.5-1.8-1.1c0.1,1.4,3.6,3.5,2.5,4.2c-1.1,0.8-5.7-1.2-5.2-2.5
          c0.4-1.2,1.2-0.3,1-1c-0.2-0.7-0.5-2.5-2.3-3.1c-1.8-0.6-6.2,0-7.2-2.2S35.8,2.9,32.7,2S19.9-0.5,14.5,0.2S1.2,5.6,0.2,5.5
          S3.8,14.1,3.8,14.1z"/>
      </svg>
    </Tail>

  )
}
