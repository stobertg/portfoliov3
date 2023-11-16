import React from 'react'
import { styled } from '@theme'

// For the master container of the logo wrap in the bottom right of the presentation component
// This shows the logo for the respective Iphone presentation

const LogoWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  bottom: 80,
  right: 0,
  width: 120,
  '@tablet': { 'display': 'none' }
})

// For the container of the logo within the master container

const LogoImage = styled('div', {
  position: 'relative',
  opacity: 0.3
})

// For the animation that sits on the top of the logo
// This would show the animation that gives more of an easter egg to the design

const LogoAnimation = styled('div', {
  position: 'absolute',
  
  // here we remove the default styling of the logo originally used elsewhere

  '> *': { 
    position: 'relative',
    top: 'auto',
    left: 'auto'
  }
})

// -------------- Typescript declarations -------------- //

interface LogoProps {
  logoAnimation?: React.ReactNode
  logo?: string
  logoAltText?: string
}

// ---------- This is the end of declarations ---------- //

export const PresLogo = ({ 
    logoAnimation, // Optional - For a aubtle animation sitting above the logo
    logo, // Required - For the logo
    logoAltText // Required - For the alt text of the logo
  }:LogoProps) => {

  return(

    <LogoWrap>
      { logoAnimation && ( <LogoAnimation>{ logoAnimation }</LogoAnimation> )}
      <LogoImage><img src={ logo } alt={ logoAltText } /></LogoImage>
    </LogoWrap>

  )
}
