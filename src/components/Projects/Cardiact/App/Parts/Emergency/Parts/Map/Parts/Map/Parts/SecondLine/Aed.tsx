import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

// For the master container of the AED icon in the Responder Two lines
// This places the AED on the bottom right of the master container

const AedWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  bottom: 8,
  right: 8,
  padding: '6px 8px',
  borderRadius: 8,
  background: 'linear-gradient(117deg, rgb(255, 0, 0) 0%, rgb(131, 24, 24) 100%)',
  fontSize: 10
})

// ---------- This is the end of declarations ---------- //

export const Aed = () => {
  return(

    <AedWrap>
      <Heading heavy title="AED" />
    </AedWrap>

  )
}
