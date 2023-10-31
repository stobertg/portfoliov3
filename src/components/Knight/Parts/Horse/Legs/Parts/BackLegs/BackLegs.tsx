import React from 'react'
import { styled, keyframes } from '@theme'

// Here is the declarations for the master container of the horse's leg
// This allows for the whole rotation of the left swinging from left to right

const rotateHindLegFront = keyframes({
  '0%': { transform: 'rotate( 35deg )' },
  '40%': { transform: 'rotate( -55deg )' },
  '100%': { transform: 'rotate( 35deg )' },
})

const rotateHindLegBack = keyframes({
  '0%, 15%': { transform: 'rotate( 40deg )' },
	'50%': { transform: 'rotate( -65deg )' },
	'100%': { transform: 'rotate( 40deg )' }
})

// For the master container of the Horse's leg
// This contains three parts - the top, middle, and the foot of the horse

const LegsWrap = styled('div', {
  position: 'absolute',
  top: -31,
  right: 13,  
  width: 65,
  height: 167,
  transformOrigin: 'top center',
  svg: { fill: '$white' },

  // Here we add the respective animations to each of the legs
  // This is the same animation, but accounts for delay
  
  variants: {
    position: {
      front: { animation: `${ rotateHindLegFront } 800ms cubic-bezier(.73,.25,.28,.73) infinite` },
      back: { animation: `${ rotateHindLegBack } 800ms cubic-bezier(.73,.25,.28,.73) infinite` }
    }
  }
})

// Here is the declarations for the middle part of the horse's leg
// This first contains the animations between the middle parts in the front and back legs

const rotateHindMidFront = keyframes({
  '0%': { transform: 'rotate( -35deg )' },
  '20%': { transform: 'rotate( -60deg )' },
  '50%': { transform: 'rotate( 0deg )' },
  '70%': { transform: 'rotate( 60deg )' },
  '100%': { transform: 'rotate( -35deg )' }
})

const rotateHindMidBack = keyframes({
  '0%': { transform: 'rotate( -45deg )' },
  '30%': { transform: 'rotate( -40deg )' },
  '55%': { transform: 'rotate( 0deg )' },
  '75%': { transform: 'rotate( 60deg )' },
  '100%': { transform: 'rotate( -45deg )' },
})

// For the master container of the bottom part of the leg
// This holds the mid part of the leg on the top and the foot on the bottom of the container

const LegBottom = styled('div', {
  position: 'absolute',
  top: 97,
  left: 38,
  width: 18,
  height: 95,
  transformOrigin: 'top center',

  // Here we add the respective animations to each of the mid sections
  // This is the same animation, but accounts for delay

  variants: {
    position: {
      front: { animation: `${ rotateHindMidFront } 800ms cubic-bezier(.73,.25,.28,.73) infinite` },
      back: { animation: `${ rotateHindMidBack } 800ms cubic-bezier(.73,.25,.28,.73) infinite` }
    }
  }
})

// Here is the declarations for the foot of the horse
// This first contains the animations between the hoves in the front and back legs

const RotateHindFootFront = keyframes({
  '0%, 20%': { transform: 'rotate( 0deg )' },
  '50%': { transform: 'rotate( -50deg )' },
  '65%': { transform: 'rotate( 20deg )' },
  '100%': { transform: 'rotate( 0deg )' }
})

const RotateHindFootBack = keyframes({
  '0%, 20%': { transform: 'rotate( 0deg )' },
  '55%': { transform: 'rotate( -50deg )' },
  '65%': { transform: 'rotate( 20deg )' },
  '100%': { transform: 'rotate( 0deg )' }
})

// For the master container of the foot of the horse
// This sets the position of the foot to be directly below the mid part

const Foot = styled('div', {
  position: 'absolute',
  width: 27,
  bottom: 0,
  right: -1,
  transformOrigin: 'top center',

  // Here we add the respective animations to each of the feet
  // This is the same animation, but accounts for delay
  
  variants: {
    position: {
      front: { animation: `${ RotateHindFootFront } 800ms ease infinite` },
      back: { animation: `${ RotateHindFootBack } 800ms ease infinite` }
    }
  }
})

// -------------- Typescript declarations -------------- //

interface LegProps {
  position?: 'front' | 'back'
}

// ---------- This is the end of declarations ---------- //

export const HorseBackLegs = ({ position }:LegProps) => {
  return(

    <LegsWrap {...{ position }}>
			<div> 
				<svg viewBox="0 0 86.7 140.1">
          <path d="M0.1,29c0,0-4-29,39-29s50,27,47,35s-11,35-11,35c-5,13-7,40-4.9,48.3c0.9,3.3,2.7,4.7,2.8,5.6c0.2,0.9,2,3.1,0.2,
            12.2c-3.7,6.8-18.1,2.8-18.1,2.8c-6.9-9-13.1-27-13.1-27c-1.2-4.2-5.5-7.7-9-11s-5-4-9-8C24.1,93,0.1,65,0.1,29z"
          />
				</svg>
			</div>

			<LegBottom {...{ position }}>
				<div>
					<svg viewBox="0 0 9.1 40.4">
						<path d="M0.7,19C1.2,15.1,1.6,6.6,1.2,4.5C1,3.7,0.8,2.9,0.5,2c0,0,0.6-2,3.6-2c4.9,0,4.9,2,4.9,2c0,0.4,0,1,0,1.6 C9,9,
              8.7,20.9,9,23.4l0,17H2c0,0-2-4-2-8L0.7,19z"
            />
					</svg>
				</div>

				<Foot {...{ position }}>
					<svg viewBox="0 0 13.7 10.5">
            <path d="M12.9,3.9c-0.2,1.7,1.3,2.7,0.6,3.8s-1.9,1.8-3.2,2.2C9.1,10.2,0,11.1,0,9.9s1.4-3.6,2.8-5.1s1.3-1.3,1-1.7c0,0,
              2.3-4,4.3-3S12.7-0.4,12.9,3.9z"
            />
					</svg>
				</Foot>
			</LegBottom>
		</LegsWrap>

  )
}
