import React from 'react'
import { styled } from '@theme'

// For the master container of the blob, positioned centered behind the person
// This is a static blob used for decorative purposes

const BlobWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  width: 600,
  height: '100%',
  opacity: 0.1,

  // Here we adjust the size of the blob a bit to be a bit bigger that it's default size

  svg: {
    transform: 'scale( 1.2 )',
    width: '100%'
  },

  // For the color of the blob

  path: { fill: '#fff' }
})

// ---------- This is the end of declarations ---------- //

export const Blob = () => {
  return(

    <BlobWrap>
      <svg viewBox="0 0 190 190">
        <path d="M46.4,-54.6C54.2,-38.6,50.6,-19.3,48.7,-1.8C46.9,15.7,47,31.3,39.1,45.9C31.3,60.4,15.7,73.9,4.7,69.1C-6.2,64.4,
          -12.4,41.5,-28.1,26.9C-43.9,12.4,-69.2,6.2,-75.7,-6.4C-82.1,-19.1,-69.7,-38.2,-53.9,-54.1C-38.2,-70.1,-19.1,-82.9,0.1,
          -83.1C19.3,-83.2,38.6,-70.5,46.4,-54.6Z" transform="translate(100 100)" 
        />
      </svg>
    </BlobWrap>

  )
}
