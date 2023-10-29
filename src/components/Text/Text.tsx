import React from 'react'
import { styled } from '@theme'

const TextWrap = styled('div', {
  position: 'relative',
  maxWidth: 900,
  width: '100%',

  p: {
    fontFamily: '$serif',
    lineHeight: 1.5,
    '&:not(:first-child)': { marginTop: 32 }
  },

  variants: {
    fontSize: {
      l0: {},
      l1: { p: { fontSize: '$s2', lineHeight: '1.75' }}
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
