import React from 'react'
import { keyframes, styled } from '@theme'

// For the animation of the lance and the arm
// This gives the effect of it moving up and down as the horse runs

const animateLance = keyframes({
  '0%': { transform: 'rotate(0deg)' },
	'50%': { transform: 'rotate(-2deg)' },
	'100%': { transform: 'rotate(0deg)' }
})

// For the master container of the lance section of the knight
// This holds the lance that stretches full width and the arm on the right of the container

const LanceWrap = styled('div', {
  position: 'absolute',
	right: 26,
	top: 0,
	width: 540,
	animation: `${ animateLance } 800ms ease infinite`,
	svg: { fill: '#fff' }	
})

// For the container of the sholder and arm on the right side of the container
// This shows the hand holding the lance, with it animating with the horse

const KnightsSholder = styled('div', {
  position: 'absolute',
  top: 46,
  right: 0,
  width: 55
})

// ---------- This is the end of declarations ---------- //

export const Lance = () => {
  return(

    <LanceWrap>
      <KnightsSholder>
        <svg viewBox="0 0 25.5 20.6">
          <path d="M1.5,9.3C0.6,9.2-0.5,9,0.3,7.5S3.7,0.2,11.7,0c0.9,0,3.9,0.3,6.3,1.5s5.4,4.5,6.6,6.9s1,5.7,0.8,6.8c-0.2,
            1.1,0.4,4.8-0.9,5.5c0,0,0.4-3.4-2-6s-3.7-4.7-8.6-4.3C14,10.3,5.2,10.5,1.5,9.3z"
          />
        </svg>
      </KnightsSholder>
   
      <svg viewBox="0 0 281.7 58.5">
        <path d="M0.2,3c0-0.2,0.5-0.1,0.7,0C1.1,3,1.1,2.6,1.2,2.4c0-0.1-0.7-0.1-0.9-0.2s0-0.6,0.1-0.8C0.5,1.3,1,1.5,1.1,1.5
          c0.1,0,0.2-0.3,0.1-0.4C1.2,1,1.1,1,1.1,1C0.9,1,0.6,1,0.6,0.7c0-0.2,0-0.8,0.6-0.7c0.4,0.1,1.5,0.1,1.9,0.3S3.5,1,3.5,
          1L8,1.4l0,0.5l232.3,34.8c-1.3-1.1-3-0.8-3-1.4c0-0.6-0.4-1.9,2.9-1c3.1,0.9,4,1.9,5.1,3.1l16,2.4c-0.1-0.8,0.6-1.8-0.1
          -1.7c-0.6,0.1-1.4-0.9-1.7-1.8c-0.4-0.9-1.3-1.8-2.2-1.9c-0.9-0.1-2.1-0.3-1.2-1.8c1.7-3,13.7,2.8,13.7,2.8s3,2.1,3,5
          c0,0.3,0,0.6-0.1,1.1l9,1.4l-0.6,3.9l-9.2-1.4c-1.2,5.6-3.5,13.5-4.5,13.1c-1.4-0.6-9.9-4.6-11.6-5.9c-1.7-1.3-4.7-3.5
          -5.9-3.2c-1.1,0.3-1.8,2.6-2.4,1.7s-4.2-5.7-5.4-5.8s-2.4,1.2-3.2,1.1c-0.8-0.1-3.3-1.6-4.2-4.1c-0.4-1.1-0.5-2-0.6-2.
          7L7.7,4.2L7.6,4.8L3.1,3.9C3.1,4.2,2.3,4.3,2.2,4.3c-0.1,0-1.9-0.4-2.1-0.4C-0.1,3.7,0.1,3.2,0.2,3z"
        />
      </svg>
    </LanceWrap>

  )
}
