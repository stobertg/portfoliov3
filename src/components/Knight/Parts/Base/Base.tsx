import React from 'react'
import { styled, keyframes } from '@theme'
import { HorseHead, HorseBody, HorseTail } from './Parts'

// For the overall animation of the body of the horse
// This is added to help give the feel that the horse is running

const rotateBody = keyframes({
  '0%': { transform: 'rotate( 0deg) scale(1, 1)' },
	'50%': { transform: 'rotate( 6deg) scale(1.05, 1)' },
	'100%': { transform: 'rotate( 0deg) scale(1, 1)' }
})

// For the master container of the horse - seperated in two part
// This contains the head, body and tail on the top, and the legs on the bottom of the container

const BaseWrap = styled('div', {
  position: 'relative',
	width: 350,
	height: 189,
	animation: `${ rotateBody } 800ms ease infinite`,
  svg: { fill: '$white' }
})

// ---------- This is the end of declarations ---------- //

export const HorseBase = () => {
  return(

    <BaseWrap>
      <HorseHead /><HorseBody /><HorseTail />
    </BaseWrap>

  )
}
