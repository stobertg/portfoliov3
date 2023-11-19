import React from 'react'
import { styled } from '@theme'

// For the master container of the neck
// This is a static part of the illustration

const NeckWrap = styled('div', {
  position: 'absolute',
  bottom: 0,
  right: 26,
  width: 57,
  zIndex: 0,
  path: { fill: '#a24f14' }
})

// ---------- This is the end of declarations ---------- //

export const Neck = () => {
  return(

    <NeckWrap>
      <svg viewBox="0 0 53.79 80.9">
        <path d="M53.79,0c0,0.4-0.4,46.51-0.4,46.51c-5.26,9.71-29.12,28.72-49.75,34.38C3.24,81.3,0,50.96,0,50.96" />
      </svg>
    </NeckWrap>

  )
}
