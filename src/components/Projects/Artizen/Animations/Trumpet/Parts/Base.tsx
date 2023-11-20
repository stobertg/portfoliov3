import React from 'react'
import { styled, keyframes } from '@stitches/react'

const Move = keyframes({
  '0%': { transform: 'translateY( 0 )' },
  '20%': { transform: 'translateY( 10px )' },
  '80%': { transform: 'translateY( 10px )' },
  '100%': { transform: 'translateY( 0px )' },
});

// For the master container of the trumpet base
// This has the circle with the bars in the center of the container

const TrumpetWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  bottom: 0
});

// For the circle base that emcompass the keys within the container
// This is the retangular cirlce, below the horn

const TrumpetCircle = styled('div', {
  position: 'relative',
  width: 150,
  padding: '25px 0'
});

// For the containers of the bars within the center of the master containers
// This contains three bars that animate and show the lines once one key is pressed

const TrumpetThumbs = styled('div', {
  display: 'flex',
  justifyContent: 'space-between !important',
  alignItems: 'flex-start !important',
  position: 'absolute',
  top: 0,
  width: 60,

  // For the animation of the SVG to show the buttons being pressed
  // Each of these buttons will be staggard

  '> div': {
    animation: `${Move} 2000ms linear infinite alternate`,
    animationDelay: '1000ms',

    '&:nth-child(2)': {
      animationDelay: '1333ms'
    },

    '&:nth-child(3)': {
      animationDelay: '1666ms'
    }
  }
});

// For the individual bars within the container
// These animate up an down and correlate with the lines coming out of the trumpet

const TrumpetThumb = styled('div', {
  display: 'flex',
  position: 'relative',
  width: 13,
  overflow: 'hidden',
});

// ---------- This is the end of declarations ---------- //

export const TrumpetBase = () => {
  return(
    
    <TrumpetWrap>
      <TrumpetThumbs>
        <TrumpetThumb>
          <svg viewBox="0 0 23.4 200.1">
            <path d="M13.7,196.6c0.8-22.5,2-45.1,2.8-67.6c0.6-16.8,0.8-33.5,1.3-50.2c0.5-22.7,1.2-45.4,1.7-68.1
            c1.8-1.9,3.8-4.2,3.9-6.6c0.3-4.5-3.9-3.2-6.5-3.5C11.8,0.2,6.7,0.2,1.6,0C1.1,0.8,0.6,1.6,0,2.4C1.3,5-1.3,10.3,4.2,9.9
            c6.2-0.6,5.4,2.7,5.2,6.7c-0.8,16.6-1.8,33.3-2.3,50c-0.5,15.9,0,31.7-0.4,47.6C6,141.5,5,168.8,4,196.1c-0.1,2.6,0.8,4.4,3.3,3.9
            C9.5,199.5,13.4,201.8,13.7,196.6L13.7,196.6z"/>
          </svg>
        </TrumpetThumb>

        <TrumpetThumb>
          <svg viewBox="0 0 22.4 202.5">
            <path d="M14.8,11.1c0.9-0.3,2-1.1,2.7-1c3.2,0.8,4.6-0.4,4.8-3.4S21.9,1.3,18.2,1C13.5,0.7,9,0,4.3,0C3,0,1,1.8,0.5,3.3
            C-1,7.4,0.8,9.6,6.8,11.5C6.7,28.2,6.7,44.9,6.6,61.7c0,18.8,0.4,37.6-0.1,56.5C5.8,144.1,4.4,170,3.4,196c-0.3,6.4,0.5,7,7.1,6.4
            c0.8,0,1.6-0.2,2.6-0.3c2.9-63.8,4-127.3,1.5-190.9L14.8,11.1z"/>
          </svg>
        </TrumpetThumb>

        <TrumpetThumb>
          <svg viewBox="0 0 22.7 198.4">
            <path d="M18,170.4c0-20.6-0.4-41.2-0.4-61.8c-0.1-11.9,0.4-23.9,0.1-35.8c-0.4-18.9,1.8-37.9-1.2-56.7
            c-0.5-3.3-1.5-7.9,4.4-8.9c0.8-0.1,1.9-3,1.7-4.5c-0.1-0.9-2.2-2.3-3.4-2.4C14.5,0,9.7-0.1,4.9,0.1C1,0.3-0.2,2.8,0,6.4
            c0.3,3.5,2,4.7,5.5,3.5C6.2,9.8,7,10.2,9,10.5C8.7,72.9,8.4,135.4,8.1,198.3c3,0,5.9,0.1,9.2,0.1c0.3-9.8,0.6-18.9,0.6-27.9
            L18,170.4z"/>
          </svg>
        </TrumpetThumb>
      </TrumpetThumbs>

      <TrumpetCircle>
        <svg viewBox="0 0 287.7 124.7">
          <g>
            <path d="M9.4,26.3C21.1,9.3,38.1,1,58.1,0.3c24.6-0.9,49.3,0.3,73.8,0.4c11.2,0.1,22.3-0.3,33.5-0.2c22.7,0.1,45.4,0,68.1,0.4
              c9,0.1,17.6,3.2,25.5,7.6c11.6,6.5,19,16.3,23.1,28.9c4.6,14.2,8.1,28.6,3.1,43c-7.2,20.4-20.4,35.2-43.2,39c-27,4.5-54,4-81.2,4.3
              c-19.3,0.2-38.4,0.5-57.6,0.8c-21.3,0.3-42.6-1.3-62.9-7.6c-12.2-3.8-22.7-11.2-28.7-23.8C7.1,83.8,1.6,74.7,0.4,64
              c-1.5-13.5,0.7-26.1,8.9-37.5L9.4,26.3z M30.9,101c3.2,1.7,6.3,4.3,9.9,5c15,2.8,30.1,6.1,45.3,7c23.8,1.3,47.7,1.2,71.4,1
              c23.7-0.2,47.5-0.8,71.2-2.3c16.9-1,33.1-4.3,43.7-19.9c4.9-7.3,10.8-14.4,9.4-24c-1.3-8.9-2.6-17.8-5-26.3
              c-2.6-9.5-9.4-16.1-17.5-21.6c-12.7-8.5-27.1-9.7-41.4-10.1c-22.2-0.6-44.4,0.2-66.5,0.3c-13.4,0.1-26.8,0-40.3,0
              C95.1,10,79,9,63.3,10.6c-15.4,1.6-31.1,4.5-42.9,16.7c-7,7.3-12.9,15.2-13.7,25.2c-1.8,20.7,7.7,36.5,24.1,48.5L30.9,101z"/>
          </g>
        </svg>
      </TrumpetCircle>
    </TrumpetWrap>

  )
}
