import React from 'react'
import { styled } from '@theme'
import { HorseFrontLegs, HorseBackLegs } from './Parts'

// For the master container of the legs on the bottom of the horse
// This contain the front legs on the left of the container and the back legs on the right of the container

const BottomWrap = styled('div', {
  position: 'relative',
  width: 350,
  height: 170,
  transform: 'translateY( -32px )'
})

// For the container of the legs themselves
// This is needed to set the position of the legs to be on the right of the container

const Legs = styled('div', {
  position: 'absolute',
  width: 250,
  top: 0,
  right: 0
})

// ---------- This is the end of declarations ---------- //

export const HorseLegs = () => {
  return(

    <BottomWrap>
			<Legs>
        <HorseFrontLegs position="front" />
        <HorseFrontLegs position="back" />
        <HorseBackLegs position="front" />
        <HorseBackLegs position="back" />
      </Legs>
		</BottomWrap>
    
  )
}
