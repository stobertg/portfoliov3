import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

// For the master container of the chip component used throughout the application
// This is usually within a line item where the title is on the left and additonal info, such as time, is on the right

const ChipWrap = styled('div', {
  position: 'relative',
  padding: '4px 12px',
  borderRadius: '$pill',
  background: '$borderDeco',
  fontSize: 10
})

// -------------- Typescript declarations -------------- //

interface ChipProps {
  title: string
}

// ---------- This is the end of declarations ---------- //

export const Chip = ({ title }:ChipProps) => {
  return(

    <ChipWrap><Heading color="secondary" {...{ title }} /></ChipWrap>

  )
}
