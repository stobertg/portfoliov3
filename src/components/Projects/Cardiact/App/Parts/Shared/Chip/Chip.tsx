import React from 'react'
import { styled } from '@theme'

const ChipWrap = styled('div', {
  
})

interface ChipProps {
  title: string
}

export const Chip = ({ title }:ChipProps) => {
  return(

    <ChipWrap>{ title }</ChipWrap>

  )
}
