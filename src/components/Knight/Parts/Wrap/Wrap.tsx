import React from 'react'
import { styled } from '@theme'

const HorseMaster = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',

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
	// transform: 'scale( 0.35 )'
})

interface HorseProps {
  preloader?: boolean
  children: React.ReactNode
}

export const HorseWrap = ({ preloader, children }:HorseProps) => {
  return(

    <HorseMaster {...{ preloader }}>
		  <HorseContent>
        <Horse>{ children }</Horse>
      </HorseContent>
    </HorseMaster>

  )
}
