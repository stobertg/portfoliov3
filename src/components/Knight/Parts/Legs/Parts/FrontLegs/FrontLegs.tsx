import React from 'react'
import { styled, keyframes } from '@theme'

// Here is the declarations for the master container of the horse's leg
// This allows for the whole rotation of the left swinging from left to right

const rotateLegFront = keyframes({
  '0%': { transform: 'rotate( -40deg )' },
	'60%': { transform: 'rotate( 70deg )' },
	'100%': { transform: 'rotate( -40deg )' }
})

const rotateLegBack = keyframes({
  '0%': { transform: 'rotate( -25deg )' },
	'35%': { transform: 'rotate( 80deg )' },
	'100%': { transform: 'rotate( -25deg )' }
})

// For the master container of the front legs of the horse
// This comes in three parts, with the top, middle, and the foot on the bottom of the container

const LegsWrap = styled('div', {
  position: 'absolute',
  left: 0,
  top: 0,
	width: 50,
	height: 167,
  transformOrigin: 'top center',
  svg: { fill: '$white' },

  // Here we add the respective animations to each of the legs
  // This is the same animation, but accounts for delay
  
  variants: {
    position: {
      front: { animation: `${ rotateLegFront } 800ms infinite cubic-bezier(.73,.25,.28,.73)` },
      back: { animation: `${ rotateLegBack } 800ms infinite cubic-bezier(.73,.25,.28,.73)` }
    }
  }
})

// For the container of the sholder part of the horse's front legs
// This is a static piece that is animated by the master container, so no animations needed here

const LegTop = styled('div', {
  position: 'absolute',
  top: 0,
  right: 0,
  width: 44
})

// Here is the declarations for the middle part of the horse's leg
// This first contains the animations between the middle parts in the front and back legs

const rotateMidLegFront = keyframes({
  '0%, 35%': { transform: 'rotate( -80deg )' },
  '70%, 80%': { transform: 'rotate( 0deg )' },
  '100%': { transform: 'rotate( -80deg )' }
})

const rotateMidLegBack = keyframes({
  '0%, 20%': { transform: 'rotate( -100deg )' },
	'50%, 70%': { transform: 'rotate( 0deg )' },
	'100%': { transform: 'rotate( -100deg )' }
})

// For the master container of the bottom part of the leg
// This holds the mid part of the leg on the top and the foot on the bottom of the container

const LegBottom = styled('div', {
  position: 'absolute',
  top: 86,
  left: 19,
  width: 15,
  height: 82,
  transformOrigin: 'top center',

  // Here we add the respective animations to each of the mid sections
  // This is the same animation, but accounts for delay

  variants: {
    position: {
      front: { animation: `${ rotateMidLegFront } 800ms ease infinite` },
      back: { animation: `${ rotateMidLegBack } 800ms ease infinite` }
    }
  }
})

// Here is the declarations for the foot of the horse
// This first contains the animations between the hoves in the front and back legs

const rotateFootFront = keyframes({
  '0%': { transform: 'rotate( 0deg )' },
  '20%': { transform: 'rotate( -100deg )' },
  '100%': { transform: 'rotate( 0deg )' }
})

const rotateFootBack = keyframes({
  '0%': { transform: 'rotate( 0deg )' },
  '10%': { transform: 'rotate( -100deg )' },
  '100%': { transform: 'rotate( 0deg )' }
})

// For the master container of the foot of the horse
// This sets the position of the foot to be directly below the mid part

const LegFoot = styled('div', {
  position: 'absolute',
  bottom: 0,
  left: -4,
  width: 20,
  transformOrigin: 'top center',

  // Here we add the respective animations to each of the feet
  // This is the same animation, but accounts for delay

  variants: {
    position: {
      front: { animation: `${ rotateFootFront } 800ms ease infinite` },
      back: { animation: `${ rotateFootBack } 800ms ease infinite` }
    }
  }
})

// -------------- Typescript declarations -------------- //

interface LegProps {
  position?: 'front' | 'back'
}

// ---------- This is the end of declarations ---------- //

export const HorseFrontLegs = ({ position }:LegProps) => {
  return(

    <LegsWrap {...{ position }}>
			<LegTop> 
				<svg viewBox="0 0 36.7 77.2">
          <path d="M9,38.5c0.8,3.5,1.7,12.3,2,14.8c0.3,2.4,0.4,11,0.2,15.3c-0.1,2.9,0.5,5.2,1,7.1c0,0,0.7,1.5,4.1,1.5c5,0,4.5-1.5,
            4.5-1.5c0-4.1,2.4-5.3,2.2-8.4c-0.2-3.1,0.2-4.5,0.6-7c0.3-2.5,1.5-13.8,1.9-16.5c0.4-2.8,2.5-9.7,5.2-13.3c0,0,9.4-14.8,
            4.4-24.8s-26-5-32.4,3s0,13.6,0,13.6C6.2,27.6,7.8,33.4,9,38.5z"
          />
				</svg>
			</LegTop>

			<LegBottom {...{ position }}>
				<div>
					<svg viewBox="0 0 9.1 40.4">
						<path d="M0.7,19C1.2,15.1,1.6,6.6,1.2,4.5C1,3.7,0.8,2.9,0.5,2c0,0,0.6-2,3.6-2c4.9,0,4.9,2,4.9,2c0,0.4,0,1,0,1.6 C9,9,
              8.7,20.9,9,23.4l0,17H2c0,0-2-4-2-8L0.7,19z"
            />
					</svg>
				</div>

				<LegFoot {...{ position }}>
					<svg viewBox="0 0 13.7 10.5">
						<path d="M12.9,3.9c-0.2,1.7,1.3,2.7,0.6,3.8s-1.9,1.8-3.2,2.2C9.1,10.2,0,11.1,0,9.9s1.4-3.6,2.8-5.1s1.3-1.3,1-1.7c0,0,
              2.3-4,4.3-3S12.7-0.4,12.9,3.9z"
            />
					</svg>
				</LegFoot>
			</LegBottom>
		</LegsWrap>

  )
}
