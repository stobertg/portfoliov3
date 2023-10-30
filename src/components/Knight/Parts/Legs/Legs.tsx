import React from 'react'
import { styled } from '@theme'
import { HorseBackLegs } from './Parts'

const BottomWrap = styled('div', {
  position: 'relative',
  width: 350,
  height: 170,
  transform: 'translateY( -32px )'
})

const Legs = styled('div', {
  position: 'absolute',
  width: 250,
  top: 0,
  right: 0
})

export const HorseLegs = () => {
  return(

    <BottomWrap>
			<Legs>
        <HorseBackLegs position="front" />
        <HorseBackLegs position="back" />
      </Legs>
		</BottomWrap>
    
  )
}
