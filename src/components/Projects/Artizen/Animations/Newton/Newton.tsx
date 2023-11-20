import React from 'react'
import { styled } from '@theme'
import NewtonBalls from './Balls'
import NewtonBase from './Base'
import BaseBack from './BaseBack'

const NewtonWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',

  // For the white background on the very top of the container

  '&:after': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 1,
    background: '$white',
    zIndex: 1
  }
})

export const ArtizenNewton = () => {
  return(

    <NewtonWrap>
      <NewtonBalls />
      <NewtonBase />
      <BaseBack />
    </NewtonWrap>
    
  )
}
