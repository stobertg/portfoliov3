import React from 'react'
import { styled } from '@theme'

const TextWrap = styled('div', {
  position: 'relative',
  width: '100%',

  p: {
    '&:not(:first-child)': { marginTop: 32 }
  },

  variants: {
    fontSize: {
      l0: {},
      l1: { fontSize: '$s2' }
    }
  }
})

interface TextProps {
  fontSize?: 'l0' | 'l1'
  children: React.ReactNode
}

export const Text = ({ children, fontSize }:TextProps) => {
  return(

    <TextWrap {...{ fontSize }}>{ children }</TextWrap>

  )
}
