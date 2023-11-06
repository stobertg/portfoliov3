import React from 'react'
import { styled } from '@theme'
import { Victim } from '../../../Projects/Cardiact/App/Parts/Emergency/Parts/Map/Parts/Map/Parts'

// For the master container of the logo wrap in the bottom right of the presentation component
// This shows the logo for the respective Iphone presentation

const LogoWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  bottom: 50,
  right: 0,
  width: 120
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

}

// ---------- This is the end of declarations ---------- //

export const PresLogo = ({}:LogoProps) => {
  return(

    <LogoWrap>
      <LogoAnimation><Victim /></LogoAnimation>
      <LogoImage><img src="/projects/cardiact/logo.svg" alt="CardiAct logo" /></LogoImage>
    </LogoWrap>

  )
}
