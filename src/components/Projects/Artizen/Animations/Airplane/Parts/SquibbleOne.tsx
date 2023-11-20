import React from 'react'
import { styled, keyframes } from '@theme'

const Dash = keyframes({
  '0%': { strokeDashoffset: 199, transform: 'rotate( -5deg )' },
  '50%': { strokeDashoffset: 99, transform: 'rotate( 5deg )' },
  '100%': { strokeDashoffset: 0, transform: 'rotate( -5deg )' },
});

const Squibble = styled('div', {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: 100,
  height: 65,
  transform: 'translate3d( 75px, 50px, 0 ) scale( 0.7 )',

  'svg': {
    fill: 'none',
    stroke: '$gray',
    strokeLinecap: 'round',
    strokeDasharray: 99,
    animation: `${ Dash } 3000ms ease infinite forwards`
  }
})

export const SquibbleOne = () => {
  return(

    <Squibble>
      <svg viewBox="0 0 33.4 21.9">
        <path d="M19.8,0.4c0,0,4.5,1.3,6.9,3.5s7,6.7,6.1,8.9s-10,1-13.4-0.8s-5.7-5.7-0.6-4.7s9,6.4,7,8.9s-7.6,1.9-12.3,0.5
        c-4.7-1.4-3.4-4.5,0-2.2s3.5,6.3-2,6.8c-5.5,0.5-11-0.5-11-0.5"/>
      </svg>
    </Squibble>

  )
}