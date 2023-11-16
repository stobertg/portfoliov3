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
      l0: { p: { fontSize: '$s1' }},
      l1: { p: { fontSize: '$s2', lineHeight: '1.75', '@tablet': { fontSize: '$s1' }}}
    },

    font: {
      sansSerif: {
        p: { fontFamily: '$sansSerif' }
      }
    },

    color: {
      secondary: { color: '$textSecondary' }
    }
  }
})

interface TextProps {
  font?: 'sansSerif'
  fontSize?: 'l0' | 'l1'
  color?: 'secondary'
  children: React.ReactNode
}

export const Text = ({ children, font, color, fontSize }:TextProps) => {
  return(

    <TextWrap {...{ font, fontSize, color }}>{ children }</TextWrap>

  )
}
