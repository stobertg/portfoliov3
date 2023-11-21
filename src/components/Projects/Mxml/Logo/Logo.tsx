import React from 'react'
import Link from 'next/link'
import { styled } from '@theme'
import { LogoMark } from './LogoMark'

// For the global treatment of the logo
// This component contains the dove icon and the FreeRossDAO text to the right of the dove
// This component can be used as just the required dove and the optional text

const LogoWrap = styled('figure', {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',

  svg: {
    display: 'flex',
    height: 'auto',
    width: '100%'
  },

  variants: {
    color: {
      brand: { svg: { fill: '$brandPrimary' } }
    },

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
  linkToHome?: boolean
}

// ---------- This is the end of declarations ---------- //

export const Logo = ({
    size,
    color,
    linkToHome // Optional - allow the logo to hold a link path, but this is mostly the homepage
  }: LogoProps ) => {
  
  return(

    <>
      { linkToHome ? (
        
        <Link href="/">
          <a><LogoWrap {...{ color, size }}><LogoMark /></LogoWrap></a>
        </Link>

      ) : (

        <LogoWrap {...{ color, size }}><LogoMark /></LogoWrap>

      )}
    </>

  )
}
