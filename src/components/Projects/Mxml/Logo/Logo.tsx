import React from 'react'
import { styled } from '@theme'
import { LogoMark } from './LogoMark'

// For the global treatment of the logo
// This component contains the dove icon and the FreeRossDAO text to the right of the dove
// This component can be used as just the required dove and the optional text

const LogoWrap = styled('figure', {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',

  // For the sizing of the svg logo within the container

  svg: {
    display: 'flex',
    height: 'auto',
    width: '100%'
  },

  // Here we allow the color of the logo to be changed

  variants: {
    color: {
      brand: { svg: { fill: '$brandPrimary' } }
    },

    // For the supported sizes of the logo

    size: {
      l0: {},
      l1: { width: 200 },
      l2: { width: 300, '@mobile': { width: 200 } }
    }
  }
})

// -------------- Typescript declarations -------------- //

interface LogoProps {
  color?: 'brand'
  size?: 'l0' | 'l1' | 'l2'
}

// ---------- This is the end of declarations ---------- //

export const Logo = ({
    size,
    color
  }: LogoProps ) => {
  
  return(

    <LogoWrap {...{ color, size }}><LogoMark /></LogoWrap>

  )
}
