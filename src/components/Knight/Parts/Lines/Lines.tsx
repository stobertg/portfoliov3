import React from 'react'
import { styled, keyframes } from '@theme'

// For the shared animation of the lines in the background
// This animates the line in from the left and out from the right

const horseLines = keyframes({
  '0%': { transform: 'translateX( -100% )' },
	'100%': { transform: 'translateX( 100% )' }
})

// For the master container of the line animation that happens behind the horse
// This is needed to help show the movement of the horse - that it is running

const LinesWrap = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '55%',
  zIndex: 0,

  // For the master container and placement of the individual lines within the background
  // This sets the lines animating from left to right

  span: {
    position: 'absolute',
    width: 40,
    height: 4,
    borderRadius: 5,
    overflow: 'hidden',
    animation: `${ horseLines } 700ms infinite cubic-bezier(.73,.25,.28,.73) forwards`,

    // For the styling of the individual lines
    // These are subtle white lines that animate in from the left and animate out on the right

    '&:before': {
      content: '',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: '#232323',
      animation:`${ horseLines } 700ms infinite cubic-bezier(.73,.25,.28,.73) forwards`,
      transformOrigin: 'center left',
      transform: 'translateX( -100% )'
    },

    // Here we set the placement and the delay of each of the lines
    // This has a staggard effect to help show the movement

		'&:first-child': { top: -20, left: 150 },
		'&:nth-child(2)': { top: 40, right: 100, animationDelay: '200ms', '&:before': { animationDelay: '200ms' }},
		'&:nth-child(3)': { top: 100, left: 50, animationDelay: '400ms', '&:before': { animationDelay: '400ms' }},
		'&:nth-child(4)': { right: 50, bottom: 0, animationDelay: '600ms', '&:before': { animationDelay: '600ms' }},
		'&:nth-child(5)': { right: 50, top: 0, animationDelay: '800ms', '&:before': { animationDelay: '800ms' }}
  }
})

// ---------- This is the end of declarations ---------- //

export const Lines = () => {
  return(

    <LinesWrap>
      <span />
      <span />
      <span />
      <span />
      <span />
    </LinesWrap>

  )
}
