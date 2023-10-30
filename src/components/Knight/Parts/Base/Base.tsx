import React from 'react'
import { styled, keyframes } from '@theme'
import { HorseHead, HorseBody, HorseTail } from './Parts'

const HorseTop = styled('div', {
  
})

const rotateBody = keyframes({
  '0%': { transform: 'rotate( 0deg) scale(1, 1)' },
	'50%': { transform: 'rotate( 6deg) scale(1.05, 1)' },
	'100%': { transform: 'rotate( 0deg) scale(1, 1)' }
})

const BaseWrap = styled('div', {
  position: 'relative',
	width: 350,
	height: 189,
	animation: `${ rotateBody } 800ms ease infinite`
})

export const HorseBase = () => {
  return(

    <HorseTop>
      <BaseWrap>
        <HorseHead /><HorseBody /><HorseTail />
      </BaseWrap>
    </HorseTop>

  )
}
