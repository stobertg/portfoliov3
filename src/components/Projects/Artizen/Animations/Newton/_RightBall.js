import React from 'react'
import { styled, keyframes } from '@stitches/react'

const Rotate = keyframes({
  '0%': { transform: 'rotate( 0deg )' },
  '50%': { transform: 'rotate( 0deg )' },
  '100%': { transform: 'rotate( -35deg )' },
});

const SkewIt = keyframes({
  '0%': { transform: 'skew( -8deg, 0 ) rotate( -8deg )' },
  '50%': { transform: 'skew( 0deg, 0 ) rotate( 0deg )' },
  '100%': { transform: 'skew( 0deg, 0 ) rotate( 0deg )' },
})

const Wrap = styled('div', {
  position: 'absolute',
  top: 0,
  right: 0,
  width: 64,
  zIndex: 1,
  transformOrigin: 'top left',
  transform: 'rotate( 40deg )',
  animation: `${Rotate} 2000ms cubic-bezier(.16,.39,.29,.99) infinite alternate forwards`,
  
  svg: {
    overflow: 'visible'
  }
});

const Skew = styled('polygon', {
  transformOrigin: 'top center',
  animation: `${SkewIt} 2000ms cubic-bezier(.16,.39,.29,.99) infinite alternate forwards`,
})

const White = styled('path', {
  fill: '$white'
})


const RightBall = () => {
  return(

    <Wrap>
      <svg viewBox="0 0 191.4 305.7">
        <Skew points="92.7,230.9 0,5.4 7.4,2.4 92.9,210.3 184,0 191.4,3.2 	"/>
        <path d="M125.6,235.4c8.8,10.8,13.6,25.3,9.2,40.8c-4.9,17.5-20.1,29.4-38.2,29.5c-13.4,0-25.4-5.5-34.1-14.2l5.4-2.5 c6.2,5.9,14.6,9.5,23.8,9.6c19.8,0.1,35.8-16.2,35.9-36.7c0-9.3-2.9-17.7-7.8-24.2l5.9-2.1L125.6,235.4z"/>
        <White d="M119.7,237.6c4.9,6.5,7.8,14.9,7.8,24.2c0,20.5-16,36.9-35.9,36.7c-9.3,0-17.6-3.6-23.8-9.6 c-7.1-6.8-11.5-16.6-11.5-27.7c0.1-18.8,14.5-37.5,36.5-37.2C103.8,224,113.4,229.3,119.7,237.6z"/>
        <path d="M125.6,235.4l-5.9,2.1c-6.3-8.3-15.9-13.5-26.9-13.6c-21.9-0.2-36.4,18.4-36.5,37.2c0,11.2,4.3,21,11.5,27.7l-5.4,2.5 c-10.5-10.6-16.1-25.8-13.2-41.3c4.6-24.1,29-36.5,48.6-32.3C107.9,219.9,118.2,226.3,125.6,235.4L125.6,235.4z"/>
      </svg>
    </Wrap>

  )
}

export default RightBall