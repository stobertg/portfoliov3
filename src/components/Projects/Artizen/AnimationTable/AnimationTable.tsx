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
  ArtizenTrumpet,
  Text
} from '@components'

const AnimationWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginBottom: 12 }
})

const AnimationContent = styled('div', {
  position: 'relative',
  width: '100%',
  '> * > *:not(:nth-child( n + 4 ))': { borderBottom: '1px solid #e0e0e0' },
  '> * > *:not(:nth-child( 3n + 3 ))': { borderRight: '1px solid #e0e0e0' },

  '@largeDesktop': {
    '> * > *:nth-child( 2n + 2 )': { borderRight: 'none' },
    '> * > *:not(:nth-child( n + 5 ))': { borderBottom: '1px solid #e0e0e0' },
    '> * > *:not(:nth-child( 2n + 2 ))': { borderRight: '1px solid #e0e0e0' },
  },
  
  '@smallDesktop': {
    '> * > *:nth-child( n )':{ 
      borderRight: 'none',
      borderBottom: 'none'
    },

    '> * > *:not(:last-child)':{ 
      marginBottom: 20
    }
  }
})

export const ArtizenAnimations = () => {
  return(

    <AnimationWrap>
      <AnimationContent>
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
      </AnimationContent>

      <Text align="center" color="secondary">
        <p>Illustrations by <a href="https://parchimowicz.com/" target="_blank" rel="noreferrer">Julia Parchimowicz</a></p>
      </Text>
    </AnimationWrap>

  )
}
