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

  a: {
    display: 'inline-flex',
    position: 'relative',
    fontFamily: 'inherit',
    overflow: 'hidden',

    '&:before': {
      content: '',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: '$yellow',
      transform: 'translateY( calc( 100% - 1px ))',
      transition: '$s1',
      zIndex: -1
    },

    '&:hover': {
      color: '$black',
      '&:before': { transform: 'translateY( 0 )' }
    }
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
