import React from 'react'
import { styled } from '@theme'
import { 
  Grid, 
  AnimationContainer, 
  ArtizenAirplane, 
  ArtizenEgg, 
  ArtizenHammer, 
  ArtizenNewton, 
  ArtizenPlanets, 
  ArtizenTrumpet 
} from '@components'

const AnimationWrap = styled('div', {
  position: 'relative',
  width: '100%',
  '> * > *:not(:nth-child( n + 4 ))': { borderBottom: '1px solid #e0e0e0' },
  '> * > *:not(:nth-child( 3n + 3 ))': { borderRight: '1px solid #e0e0e0' }
})

export const ArtizenAnimations = () => {
  return(

    <AnimationWrap>
      <Grid 
        columns={ 3 } 
        largeDesktopColumns={ 2 } 
        smallDesktopColumns={ 1 } 
      >
        <AnimationContainer><ArtizenNewton /></AnimationContainer>
        <AnimationContainer><ArtizenAirplane /></AnimationContainer>
        <AnimationContainer><ArtizenTrumpet /></AnimationContainer>
        <AnimationContainer><ArtizenPlanets /></AnimationContainer>
        <AnimationContainer><ArtizenHammer /></AnimationContainer>
        <AnimationContainer><ArtizenEgg /></AnimationContainer>
      </Grid>
    </AnimationWrap>

  )
}
