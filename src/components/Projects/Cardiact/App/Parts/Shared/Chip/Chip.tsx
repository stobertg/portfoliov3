import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

const ChipWrap = styled('div', {
  position: 'relative',
  padding: '4px 12px',
  borderRadius: '$pill',
  background: '$borderDeco',
  fontSize: 10
})

interface ChipProps {
  title: string
}

export const Chip = ({ title }:ChipProps) => {
  return(

    <ChipWrap><Heading color="secondary" {...{ title }} /></ChipWrap>

  )
}
