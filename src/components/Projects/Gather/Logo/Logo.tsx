import React from 'react'
import { styled } from '@theme'

// For the master container of the Gather logo component
// This holds the G logo of the project, but made in css so we can animate it

const LogoWrap = styled('div', {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
  position: 'relative',
	width: 110,
	height: 130,
	overflow: 'hidden',
})

// For the container of the hex caps on the top and the bottom of the container
// This contains two slants for each that create the top and bottom of the 'G'

const LogoCap = styled('div', {
	display: 'flex',
	position: 'absolute',
	left: 0,
	width: '100%',
	height: 58,
	zIndex: 1,
	
	// For the shared styling of the bars on the top and bottom that form the G
	// We do this by having a master container with the bar being set and transformed within the center of the container

	div: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
		width: '50%',
		height: '100%',

		// For the size of the bars on the top nd bottom of the container
		// Here we set this to overflow the width of the container to give it the hex feel

		'&:before': {
			content: '',
			position: 'absolute',
			width: 78,
			height: 24
		}
	},

	// Here we use shared styling and address the inverse styling for top v bottom caps and position
	// This will form an arrow pointing to the top and on the bottom, vice versa

	variants: {
		placement: {
			top: { 
				top: 0,
				'*:before': { background: '#545554' },
				'> *:first-child:before': { transform: 'rotate( -30deg )', boxShadow: '-3px 3px 2px rgba( 0,0,0, 0.2 )' },
				'> *:last-child:before': { transform: 'rotate( 30deg )' }
			},

			bottom: { 
				bottom: 0,
				'*:before': { background: '#f37223' },
				'> *:first-child:before': { transform: 'rotate( 30deg )' },
				'> *:last-child:before': { transform: 'rotate( -30deg )' },
			}
		}
	}
})

// For the container of the content in the middle of the component
// This is for the G connector on the left of the container and the final line on the right 

const LogoMid = styled('div', {
	display: 'flex',
	position: 'relative',
	width: '100%',
	height: 68,

	// Fror the line on the left of the container
	// This connected the top and bottom caps, to form the left side of the 'G'

	'> div:first-child': {
		position: 'relative',
		width: 24,
		height: '100%',
		background: '#f37223',
		zIndex: 0
	},

	// For the container of the finnisher of the G, on the right side of the container
	// This one is a bit different because it is not as uniformed as the other (i.e. placement, rotation)

	'> div:last-child': {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		bottom: 0,
		right: 0,
		width: 36.5,
		height: 50,
		overflow: 'hidden',
		zIndex: 2,

		// For the line to sit in the center of the container

		'&:before': {
			content: '',
			position: 'absolute',
			width: 24,
			height: 78,
			background: '#f37223',
			transform: 'rotate( -59deg )',
			boxShadow: '-1px 25px 5px rgba( 0,0,0, 0.4 )',
			zIndex: 1
		}
	}
})

export const GatherLogo = () => {
  return(

		<LogoWrap>
			<LogoCap placement="top"><div /><div /></LogoCap>
			<LogoMid><div /><div /></LogoMid>
			<LogoCap placement="bottom"><div /><div /></LogoCap>
		</LogoWrap>

  )
}
