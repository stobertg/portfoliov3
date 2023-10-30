import React from 'react'
import { styled, keyframes } from '@stitches/react'

const Rotate = keyframes({
  '0%': { transform: 'rotate( 35deg )' },
  '50%': { transform: 'rotate( 0deg )' },
  '100%': { transform: 'rotate( 0deg )' },
});

const SkewIt = keyframes({
  '0%': { transform: 'skew( -8deg, 0 ) rotate( -8deg )' },
  '50%': { transform: 'skew( 0deg, 0 ) rotate( 0deg )' },
  '100%': { transform: 'skew( 0deg, 0 ) rotate( 0deg )' },
})

const Wrap = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: 65,
  zIndex: 4,
  transformOrigin: 'top right',
  transform: 'rotate( -40deg )',
  animation: `${Rotate} 2000ms cubic-bezier(.46,0,.74,.23) infinite alternate forwards`,
  
  svg: {
    overflow: 'visible'
  }
});

const Skew = styled('polygon', {
  transformOrigin: 'top center',
  animation: `${SkewIt} 2000ms cubic-bezier(.46,0,.74,.23) infinite alternate forwards`,
})

const White = styled('path', {
  fill: '$white'
})

const LeftBall = () => {
  return(

    <Wrap>
      <svg viewBox="0 0 191.4 305.7">
        <Skew points="97.8,229.3 0,4 7.4,0.8 97.6,208.7 184,-1.5 191.4,1.5 "/>
        <path d="M71.1,226.5c19.3-14.9,46-11.1,60,3.7c17,16.5,17.4,44.7-0.3,61.5c-3.2,3-6.6,5.7-10.3,7.8l-2.5-4.2 c2.6-1.5,4.9-3.3,6.9-5.3c2.1-3.1,4.5-6,6.2-9.3c11-20.4-0.8-50.2-29.1-55.8c-10.4-2.1-20.2,0.4-27.5,6.2l-3.5-4.5L71.1,226.5z"/>
        <White d="M102,224.8c28.2,5.7,40,35.4,29.1,55.8c-1.7,3.3-4.1,6.2-6.2,9.3c-2,2-4.3,3.9-6.9,5.3 c-10.3,5.7-24.7,6.2-36.7-1.3c-14.1-8.8-21.2-21.8-19.6-38.8c1-10.2,5.7-18.6,12.8-24.1C81.8,225.2,91.7,222.7,102,224.8z M87,238 c-4.7-2.8-7.5-2-10.3-0.1c-8.9,5.8-9.7,14.5-8.8,23.8c0.1,1.6,1.7,4,3,4.3c2.8,0.7,4-1.5,4.2-4.2c0.2-9.3,2-17.8,12-23.8H87z"/>
        <path d="M76.6,237.9c2.9-1.9,5.6-2.6,10.3,0.1c-10,5.9-11.7,14.5-12,23.8c-0.1,2.7-1.3,4.9-4.2,4.2c-1.3-0.4-2.8-2.7-3-4.3	c-0.9-9.3-0.1-18,8.8-23.8H76.6z"/>
        <path d="M71.1,226.5l3.5,4.5c-7.1,5.5-11.9,14-12.8,24.1c-1.6,17,5.6,30.1,19.6,38.8c12,7.5,26.5,7,36.7,1.3l2.5,4.2 c-17,9.8-37.9,8.8-54.5-7.3c-15.6-15-20.9-38.7-0.4-60.7C67.4,229.6,69.1,227.9,71.1,226.5L71.1,226.5z"/>
      </svg>
    </Wrap>

  )
}

export default LeftBall