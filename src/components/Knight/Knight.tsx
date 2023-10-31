import React from 'react'
import { styled } from '@theme'
import { Noble, HorseBase, HorseLegs, Lines } from './Parts'

// For the master container of the knight animation
// This shows a jousting knight riding a horse, within the joust out in front of the horse

const HorseMaster = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  height: 150,

  // Here we add support for this animation to be used as a preloader
  // This supports a full screen takeover, sitting on top of the site until it is done loading

  variants: {
    preloader: {
      true: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999
      }
    }
  }
})

// For the container of all of the content within the master container
// This contains the knight in the center and the lines in the background

const HorseContent = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alginItems: 'center',
  position: 'relative',
  height: '100%',
})

// For the master container of the entire Knight scene
// This contains the knight on the top and the horse on the bottom of the container

const KnightWrap = styled('div', {
  position: 'relative',
	width: 477,
	height: 400,
	paddingTop: 79,
  marginTop: 20,
	transform: 'scale( 0.3 )',
  transformOrigin: 'top center'
})

// -------------- Typescript declarations -------------- //

interface KnightProps {
  preloader?: boolean
}

// ---------- This is the end of declarations ---------- //

export const Knight = ({ preloader }:KnightProps) => {
  return(

    <HorseMaster {...{ preloader }}>
		  <HorseContent>
        <KnightWrap><Noble /><HorseBase /><HorseLegs /></KnightWrap>
        <Lines />
      </HorseContent>
    </HorseMaster>

  )
}
