import React from 'react'
import { styled } from '@theme'
import { NewtonBalls, NewtonBase, BaseBack } from './Parts'

// For the master container of the Newton illustration animation
// This shows the left and right balls swinging back and forth, with the three balls in the middle staying still 

const NewtonWrap = styled('div', {
  display: 'inline-flex',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',

  // For the white background on the very top of the container

  '&:after': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '80%',
    height: 1,
    // background: '$white',
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
