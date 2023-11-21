import React from 'react'
import { styled } from '@theme'
import { OuterRing, MiddleRing, InnerRing } from './Parts'

const PlanetWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 150,

  // For the green dot in the center of the container

  '&:before': {
    content: '',
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: '50%',
    background: '#1acc6c',
    zIndex: 10
  }
})

export const ArtizenPlanets = () => {
  return(

    <PlanetWrap>
      <InnerRing />
      <MiddleRing />
      <OuterRing />
    </PlanetWrap>

  )
}
