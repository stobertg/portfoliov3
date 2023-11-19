import React from 'react'
import { styled } from '@theme'
import { Face, Neck } from '../'

// For the master container of the face area of the illustration of the man
// This holds the face on the top, and the neck on the bottom of the container

const HeadWrap = styled('div', {
  position: 'absolute',
  top: 0,
  left: 63,
  width: 155,
  height: 197,
  zIndex: 1
})

// ---------- This is the end of declarations ---------- //

export const Head = () => {
  return(

    <HeadWrap>
      <Face />
      <Neck />
    </HeadWrap>

  )
}
