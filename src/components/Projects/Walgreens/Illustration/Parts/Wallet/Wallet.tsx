import React from 'react'
import { styled, keyframes } from '@theme'

// For the animations of the dollars coming out of the wallet
// This is held by the hand and is the main animation of the illustration

const animate__dollarOne = keyframes({
	'0%': { transform: 'translateY( 50px ) rotate( 0deg )' },
	'20%, 100%': { transform: 'translateY( 30px ) rotate( 26deg )' }
})

// For the dollar on the bottom - first to pop out of the wallet

const animate__dollarTwo = keyframes({
	'0%': { transform: 'translateY( 38px ) rotate( 0deg )' },
	'20%, 100%': { transform: 'translateY( 30px ) rotate( 15deg )' }
})

// For the master container of the wallet, held by the man
// This holds the dolars on the top and the base of the wallet on the bottom of the container

const WalletWrap = styled('div', {
	position: 'absolute',
	top: 0,
	left: 0,
	width: 110,
	paddingTop: 25,
	overflow: 'hidden',
	zIndex: 0
})

// For the base of the wallet
// This is just used to set the layer of the wallet to sit above the dollars

const WalletBase = styled('div', {
	position: 'relative',
	zIndex: 2
})

// For the placement of the dollars that come out of the base of the wallet
// Here we set the position and the animation origin

const Dollar = styled('div', {
	position: 'absolute',
	right: 0,
	top: 0,
	transformOrigin: 'bottom right',

	// Here we add variants for the top and bottom
	// This sets the position for each of them

	variants: {
		variant: {
			1: { 
				width: '70%',
				animation: `${ animate__dollarOne } 3s ease infinite forwards alternate`,
				zIndex: 0
			},

			2: {
				width: '90%',
				animation: `${ animate__dollarTwo } 3s ease infinite forwards alternate`,
				zIndex: 1
			}
		}
	}
})

// Here we have shared colors so we need to set these to be shared between the illustration lines

const LightBlue = styled('polygon', { fill: '#0082aa' })
const DarkBlue = styled('path', { fill: '#323264' })
const Red = styled('polygon', { fill: '#e63214' })
const DarkRed = styled('path', { fill: '#aa0a0a' })

// ---------- This is the end of declarations ---------- //

export const IllusWallet = () => {
  return(

    <WalletWrap>
			<Dollar variant={ 2 }>
				<svg viewBox="0 0 73.72 19.18">
					<LightBlue points="72.32,1.14 71.79,6.11 4.87,16.88 4.86,0 17.8,0.52" />
					<DarkBlue d="M0.81,19.18L0,4.28c-0.03-0.48,0.15-0.95,0.48-1.3c0.33-0.35,0.79-0.54,1.27-0.54c0,0,0.01,0,0.01,0l71.96,
						0.35L73.7,6.29L3.59,5.94L4.3,18.99L0.81,19.18z"
					/>
				</svg>
			</Dollar>

			<Dollar variant={ 1 }>
				<svg viewBox="0 0 84.33 30.71">
					<LightBlue points="84.33,0.35 83.26,27.21 6.85,26.51 5.1,0 19.19,0.46" />
					<DarkBlue d="M79.21,30.71c0,0-0.01,0-0.02,0l-76-0.69c-0.92-0.01-1.67-0.72-1.73-1.64L0,4.69c-0.03-0.48,0.14-0.95,
						0.47-1.3C0.8,3.04,1.26,2.84,1.74,2.84l78.33-0.23c0,0,0,0,0,0c0.47,0,0.93,0.19,1.25,0.53c0.33,0.34,0.51,0.8,0.49,
						1.28l-0.86,24.61C80.93,29.97,80.15,30.71,79.21,30.71z M4.86,26.55l72.67,0.66l0.74-21.1L3.6,6.33L4.86,26.55z"
					/>
				</svg>
			</Dollar>

			<WalletBase>
				<svg viewBox="0 0 104.53 52.04">
					<Red points="104.53,1.8 103.24,50.64 7.71,52.04 5.73,0" />
					<DarkRed d="M97.79,51.51L1.7,51.01L0,4.08L99.57,6.7L97.79,51.51z M4.59,48.03l90.31,0.46l1.55-38.87L3.11,7.16
						L4.59,48.03z"
					/>
				</svg>
			</WalletBase>
    </WalletWrap>

  )
}
