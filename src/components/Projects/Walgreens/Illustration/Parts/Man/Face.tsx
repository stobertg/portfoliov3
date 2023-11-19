import React from 'react'
import { styled, keyframes } from '@theme'
import { Eyes } from './Eyes'

const animate__face = keyframes({
  '0%': { transform: 'rotate( -5deg )' },
  '30%, 100%': { transform: 'rotate( 0deg )' }
})

const FaceWrap = styled('div', {
  position: 'relative',
  width: '100%',
  zIndex: 1,
  animation: `${ animate__face } 5s ease infinite forwards alternate`,
  transformOrigin: 'center right'
})

const White = styled('path', { fill: '#fff' })
const DarkSkin = styled('path', { fill: '#a24f14' })
const LightBlue = styled('path', { fill: '#0082aa' })
const DarkBlue = styled('path', { fill: '#323264' })

export const Face = () => {
  return(

    <FaceWrap>
      <Eyes />

      <svg viewBox="0 0 150.37 169.01">
        <DarkSkin d="M71.07,159.51c-10.11,10.92-47.73,21.44-54.2-23.46c-5.37-37.28,3.24-64.31,9.3-82.51c4.99-14.98,28.31-41.66,
          63.5-35.19s50.56,36.4,38.42,66.74c10.92-2.43,20.22,1.62,19.41,10.52c-0.81,8.9-3.64,16.99-22.65,12.94v0.16C124.87,
          108.71,109.18,161.31,71.07,159.51z"
        />

        <LightBlue d="M122.21,104.14l-8.63,0.63c0,0,0.42-25.06,0.42-34.12s-3.16-20.22-13.69-16.43c-10.53,3.79-24.43,7.58-37.
          28-0.21c-10.11,3.16-32.85,9.69-40.65,1.26S7.01,49.81,6.38,38.01s6.74-19.16,17.9-20.01c1.26-16.43,17.48-21.06,41.07-9.
          9C74.82-4.11,112.1-4.74,126.21,21.8c4.42,4.84,20.01,4.84,23.59,20.43c3.58,15.58-10.67,42.64-10.67,42.64l-11.02,
          0.22L122.21,104.14z"
        />

        <DarkBlue d="M43.89,124.52c-1.51,0-3.04-0.16-4.53-0.56c-6.23-1.65-3.89-14.5,0.7-35.47c1.23-5.61,1.7-10.61,2.09-14.62
          c0.16-1.71,0.32-3.34,0.51-4.81c-2.69-3.27-7.5-5.71-12.47-6.27c-4.09-0.46-7.64,0.4-9.99,2.44L18.1,62.8c3.04-2.62,7.
          46-3.75,12.44-3.19c6.16,0.69,11.94,3.78,15.08,8.05l0.39,0.53l-0.09,0.65c-0.23,1.56-0.39,3.31-0.59,5.33c-0.39,4.1-0.88,
          9.21-2.15,15c-1.54,7.02-3.45,15.75-4.13,22.12c-0.91,8.59,0.77,9.48,1.12,9.58c7.08,1.87,15.85-2.7,15.94-2.75l1.5,
          2.83C57.28,121.12,50.79,124.52,43.89,124.52z"
        />

        <White d="M128.29,87.08l-0.38-3.98L97.1,86.03c-3.44-8.55-12.21-14.94-22.46-15.43c-6.32-0.3-11.84,1.6-15.94,5.51c-3.06,
          2.92-5.18,6.78-6.23,11.22c-2.7-2.37-6.02-3.42-9.44-2.86c-0.88,0.14-1.7,0.4-2.44,0.72C39.23,75.14,31.08,67.51,20.53,67
          c-5.63-0.27-10.54,1.43-14.2,4.92C2.25,75.81,0,81.58,0,88.16c0,11.54,8.98,20.58,20.43,20.58c10.83,0,19.42-8.13,20.
          29-18.8c0.34-0.5,1.38-1.25,2.96-1.51c1.47-0.24,5.14-0.29,8.07,4.15c-0.02,0.46-0.03,0.92-0.03,1.39c0,12.74,10.03,22.72,
          22.83,22.72c13.07,0,24.12-10.4,24.12-22.72c0-1.37-0.14-2.71-0.4-4.03L128.29,87.08z M20.43,104.74C11.22,104.74,4,97.46,
          4,88.16c0-5.4,1.85-10.26,5.09-13.34c2.65-2.53,6.2-3.85,10.3-3.85c0.31,0,0.63,0.01,0.95,0.02c9.39,0.45,16.47,7.83,16.47,
          17.16c0,0.33-0.03,0.64-0.05,0.96c-0.02,0.06-0.04,0.11-0.06,0.17l0.05,0.01C36.18,98.04,29.23,104.74,20.43,104.74z M74.
          54,112.69c-10.56,0-18.83-8.22-18.83-18.72c0-6.11,2.04-11.42,5.74-14.95c3.06-2.91,7.15-4.44,11.9-4.44c0.36,0,0.72,0.01,
          1.09,0.03c11.14,0.53,20.21,9.22,20.21,19.37C94.66,104.11,85.45,112.69,74.54,112.69z"
        />

        <DarkBlue d="M93.42,74.57c-6.58-8.21-21.08-11.49-32.16-3.28l-1.91-2.57c12.56-9.31,29.05-5.53,36.57,3.85L93.42,74.57z" />

        <DarkBlue d="M62.2,143.36c-0.81,0-1.68-0.11-2.58-0.38c-2.58-0.78-4.68-2.71-6.24-5.73l2.84-1.47c1.15,2.22,2.6,3.62,4.32,
          4.14c2.41,0.73,4.67-0.42,5.09-0.66c1.57-0.87,4.43-4.96,2.86-8.94l2.98-1.18c2.27,5.75-1.52,11.38-4.28,12.92C66.54,
          142.42,64.61,143.36,62.2,143.36z"
        />
      </svg>
    </FaceWrap>

  )
}
