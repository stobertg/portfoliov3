import React from 'react'
import { styled, keyframes } from '@theme'
import { Person, Lance, Saddle } from './Parts'

// For the subtle animation of the entire knight
// This is give the impression that the knight is bouncing up and down as the horse moves

const animateKnight = keyframes({
  '0%': { transform: 'rotate( -3deg )' },
	'50%': { transform: 'rotate( 0deg )' },
	'100%': { transform: 'rotate( -3deg )' }
})

// For the master container of the knight, who sits on the horse
// This contains the lance, body and the saddle

const Knight = styled('div', {
  position: 'absolute',
	top: 0,
	left: 114,
	width: 150,
	zIndex: 10,
  animation: `${ animateKnight } 800ms ease infinite`
})

// ---------- This is the end of declarations ---------- //

export const Noble = () => {
  return(

    <Knight>
	  	<Lance />
			
			<svg viewBox="0 0 305.8 524.9">
				<Saddle />
				<Person />
			</svg>
		</Knight>

  )
}
