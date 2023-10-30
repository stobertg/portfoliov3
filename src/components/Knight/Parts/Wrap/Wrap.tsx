import React from 'react'
import { styled } from '@theme'
import { Lines } from '../'

// For the master container of the knight animation
// This shows a jousting knight riding a horse, within the joust out in front of the horse

const HorseMaster = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',

  // Here we add support for this animation to be used as a preloader
  // This supports a full screen takeover, sitting on top of the site until it is done loading

  variants: {
    preloader: {
      true: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 9999
      }
    }
  }
})

const HorseContent = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alginItems: 'center',
  position: 'relative',
	// height: 200
})

const Horse = styled('div', {
  position: 'relative',
	width: 477,
	height: 400,
	paddingTop: 79,
	transform: 'scale( 0.35 )'
})

// -------------- Typescript declarations -------------- //

interface HorseProps {
  preloader?: boolean
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const HorseWrap = ({ preloader, children }:HorseProps) => {
  return(

    <HorseMaster {...{ preloader }}>
		  <HorseContent>
        <Horse>{ children }</Horse>
        <Lines />
      </HorseContent>
    </HorseMaster>

  )
}
