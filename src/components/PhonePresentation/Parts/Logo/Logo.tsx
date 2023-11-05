import React from 'react'
import { styled } from '@theme'
import { Victim } from '../../../Projects/Cardiact/App/Parts/Emergency/Parts/Map/Parts/Map/Parts'

const LogoWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 120
})

const LogoImage = styled('div', {
  position: 'relative',
  opacity: 0.3
})

const LogoAnimation = styled('div', {
  position: 'absolute',
  
  '> *': { 
    position: 'relative',
    top: 'auto',
    left: 'auto'
  }
})

interface LogoProps {

}

export const PresLogo = ({}:LogoProps) => {
  return(

    <LogoWrap>
      <LogoAnimation><Victim /></LogoAnimation>
      <LogoImage><img src="/projects/cardiact/logo.svg" alt="CardiAct logo" /></LogoImage>
    </LogoWrap>

  )
}
