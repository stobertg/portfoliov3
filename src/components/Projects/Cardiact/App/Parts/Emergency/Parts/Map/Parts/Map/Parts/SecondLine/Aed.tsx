import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

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

export const Aed = () => {
  return(

    <AedWrap>
      <Heading heavy title="AED" />
    </AedWrap>

  )
}
