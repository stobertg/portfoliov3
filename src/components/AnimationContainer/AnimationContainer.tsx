import React from 'react'
import { styled } from '@theme'

const AnimationWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  height: 350,
  background: '$white'
})

const AnimationContent = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  transform: 'scale( 0.8 )'
})

interface ContainerProps {
  children: React.ReactNode
}

export const AnimationContainer = ({ children }:ContainerProps) => {
  return(

    <AnimationWrap>
      <AnimationContent>
        { children }
      </AnimationContent>
    </AnimationWrap>

  )
}
