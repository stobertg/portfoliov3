import React from 'react'
import { styled, keyframes } from '@theme';

const Rotate = keyframes({
  '0%': { transform: 'rotate( 0deg )' },
  '100%': { transform: 'rotate( 360deg )' },
});

const Wrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  width: '55%',
  zIndex: 7,
  transform: 'rotate( 45deg )',
  animation: `${Rotate} 3000ms linear infinite forwards`,

  // For the white overlay on the bottom of the circle
  // This is used to mask the bottom half of the circle so we ca animate it

  '&:after': {
    content: '',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '50%',
    background: '$white',
    zIndex: 1
  }
});

const Planet = styled('div', {
  position: 'absolute',
  top: 0,
  width: 20,
  fill: '$green',
  transform: 'translate3d(-29px, 4px, 0)'
});

const White = styled('path', {
  fill: '$white'
});

export const InnerRing = () => {
  return(

    <Wrap>
      <Planet>
        <svg viewBox="0 0 32.7 32.4">
          <White d="M31.3,11.1c-3.2-7.4-16-9.1-16-9.1l-1.2,0.5c-0.4-0.7-0.7-1.4-1-2.1c-1,0.2-2.1,0.3-2.9,1.1
            c0.3,0.7,0.6,1.5,1,2.2l-5.1,2L6.5,11c-1.7,0-3.3,0-5-0.4l-0.1,0.1l0.1,0.1c1.5,1.5,3.3,1.7,5.1,1.6l0.3,4.8
            c-1.9-1.5-4.3-2-6.4-2.9C-0.1,14.9,0,15.8,0,16.5c5.3,1.4,6.8,3.5,6,8.7c-0.1,0.5-0.8,1.3,0,1.6c0.7,0.3,1.3-0.3,1.8-0.8
            c1-1,1.4-2.6,1.3-4.1l6.4,3.3c-1,2.4-2.5,4.4-5.3,5.8c0.9,0.3,1.9,0.7,2.8,1c2.4-1.4,3.9-3.3,5.1-5.4l6,3.1l6.3-5.5
            C30.4,24.2,34.5,18.4,31.3,11.1z"/>
          <path d="M25,22.5c1.2-1.3,2.7-0.6,4.1-0.6c1.6,0,2.2,0.7,1.2,2.3c-3.2,5.3-8.6,9.6-17.3,7.9c5-3,6.4-8.1,8-13.1
            c0.7-2.3,0.5-4.2-2.6-4.4c-0.8-0.1-1.6-0.7-2.4-1.2c-2-1.4-4.2-2-6.6-2.2c-2.7-0.2-5.4,0.2-8-0.5c0-4.1,3.5-5.5,5.9-7.6
            c0.8-0.7,1.9-1,2.8-1.5c0.5,1,0.9,2.1,1.4,3.1c0.6,1.1,0.7,2.6,2.4,2.8c3.4,3.1,7.3,5.4,11.8,6.7c1.6,0.5,3.3,0.9,5,0.5
            c1.1-0.3,1.4,0.2,1.7,1.1c0.8,3.2,0,4.3-3.2,4.2c-2.1-0.1-4.1,0.1-5.4,2c-1.5,1-2.1,6-0.8,6.8c0.7,0.4,1.1,0.4,1.5-0.6
            C25.1,26.2,24.5,24.3,25,22.5z"/>
          <path d="M10.2,31c-2.2,0.1-3.7-1.3-5-2.7C1.9,25.1,0.3,21,0,16.5c5.3,1.4,6.8,3.5,6,8.7c-0.1,0.5-0.8,1.3,0,1.6 c0.7,0.3,1.3-0.3,1.8-0.8c1.9-1.9,1.7-6-0.1-8.1c-2-2.3-4.8-2.7-7.3-3.7c0-1.3,0.1-2.5,1-3.5c1.8,1.9,4.2,1.7,6.5,1.5 c4-0.3,6.4,3.4,10.1,3.8c0.5,0.1,0.4,0.7,0.3,1.1C16.2,22.2,16.1,28.3,10.2,31z"/>
          <path d="M13.1,0.3c4.4-0.7,8.5-0.1,12.2,2.6c3,2.1,4.3,5.2,6,8.2c0.7,1.2-0.1,1.7-1.4,1.7c-4.1-0.1-7.6-1.8-10.9-4 c-1.2-0.9-2.4-1.8-3.7-2.6C15.2,3.9,13.8,2.2,13.1,0.3z"/>
        </svg>
      </Planet>

      <svg viewBox="0 0 136.3 134.3">
        <path d="M136,63.2c-0.2-2.3,0.5-4.7-0.4-7c0.1-0.3,0.3-0.7,0.2-1c-2.2-7.9-3.9-16-9.5-22.4c-0.7-0.7-1.2-1.6-1.7-2.4
          c-4.8-7.3-10.4-13.7-17.9-18.4c-2.1-1.3-4.5-2.2-6.5-3.7c-3.8-2.9-8.1-4.6-12.6-5.9c-8.2-2.5-16.7-1.9-25.1-2.3
          c-7.6-0.4-14.6,1.5-21.1,5.1c-0.7,0.1-1.3,0.3-1.7,1c-0.9,0.5-2.1,0.7-2.7,1.7c-1.3,0.2-2,1.2-2.8,2.1c-0.7,0.4-1.4,0.8-2.1,1.2
          c-0.7,0.1-1.4,0.3-1.8,1c-0.6,0.2-1.3,0.2-1.2,1.1c-4.5,2.4-8.5,5.3-11.7,9.4c-0.9,0.4-1.4,1.1-1.7,2.1c-2.2,1.8-3.7,4.1-4.8,6.6
          C10,32,9.6,33,9.3,34.1c-0.8,0.6-0.8,1.5-0.7,2.4c-1.1,0.7-1.5,1.7-1.5,3c-0.3,0.7-0.7,1.5-1,2.2c-1.5,1.9-2.3,4.1-2.5,6.5
          c-0.9,1.3-0.4,2.9-0.8,4.3c-0.4,0.3-0.5,0.7-0.2,1.1c0,0.3,0,0.7,0,1c-0.7,1-0.9,2.1-0.7,3.3c-0.3,0.7-0.8,1.3-0.5,2.1
          c-0.3,1.4-0.9,2.9-0.6,4.4c0,0.4,0,0.7-0.1,1.1c-0.7,3.8-1,7.6-0.1,11.4c-0.2,2.2,0.6,4.2,1.2,6.3c2,6.7,4.1,13.2,9,18.5
          c1.7,1.8,3.3,3.8,4.5,6c5.5,10.1,14.3,16.5,24.6,20.8c10.4,4.3,21.4,6.7,32.8,5.5c3.8-0.4,7.6,0,11.3-0.9
          c9.6-2.3,18.7-5.7,26.7-11.7c2.7-2,5.2-4.1,7-7c1-1.1,2-2.3,3-3.4l0.1-0.1c0.9-0.8,1.8-1.6,2-2.8c4-3.6,5.5-8.9,8.6-13.1
          c1.7-2.4,2.5-5.3,3.3-8.2C136.4,79,136.6,71.1,136,63.2z M130.6,74.2c0,1.4-0.1,2.9-0.1,4.3c-1.1,4.6-1.7,9.4-4.2,13.6
          c0,0.2-0.1,0.4-0.1,0.6c-0.8,0.5-1.1,1.3-1.3,2.2c-0.5,0.4-1,0.8-1,1.5c-2.2,1.9-2.7,4.9-4.3,7.2c-0.5,0.4-1.1,0.8-1.2,1.5
          c-1,0.2-0.8,1.1-1.2,1.7c-6,6.6-12.6,12.7-20.6,16.7c-6.4,3.2-13.1,6.2-20.6,6.3c-3.7,0.1-7.3,1.2-11,1.1
          c-13.4-0.4-25.5-4.3-36.1-12.6c-3-2.4-5.5-5.5-7.5-8.8c-1.7-2.8-3.5-5.5-5.7-7.9c-3.7-4-6.1-8.6-7.8-13.7C7.9,87.1,8,86.3,7,86
          c0.3-1.3-0.5-2.4-0.8-3.6c0.1-0.6,0.1-1.2-0.5-1.6c-0.1-0.5-0.1-1.1-0.2-1.6c0-0.8,0-1.5-0.4-2.2c0-0.5,0-1.1-0.1-1.6
          c0-1.1,0-2.2,0-3.3c0-0.7,0.1-1.4,0.1-2.1c0.5-6.6,1.5-13.2,3.3-19.5c2.1-7.6,5.6-14.8,10.4-21.2c2.5-2.2,4.7-4.7,6.8-7.2
          c0.8-0.6,1.6-1.1,2.3-1.7c1-0.4,1.8-1,2.3-1.9c2.3-1.9,4.7-3.5,7.2-5c1.1-0.6,2.2-1.3,2.5-2.7c0.2,0,0.3-0.1,0.4-0.2
          c0.8,0.1,1.3-0.3,1.6-0.9c0.9-0.5,1.8-1,2.7-1.4C45,8.2,45.3,8.1,45.7,8c0.4-0.1,0.7-0.3,1.1-0.4c1.5-0.2,2.9-0.5,4-1.5
          C56.9,4.4,63.2,4,69.5,4.5c7.2,0.6,14.6-0.1,21.5,3c4,1.8,7.5,4.5,11.4,6.6c8.9,4.8,13.9,13.3,19.6,21.2c2.5,3.6,4.3,7.5,6,11.5
          c0.3,1.3,0.4,2.6,1.3,3.6c0.1,0.2,0.1,0.5,0.2,0.7c-0.3,0.7-0.1,1.3,0.5,1.7c-0.2,0.9-0.1,1.8,0.3,2.6c0,5.1-0.1,10.2-0.1,15.3
          c0.5,0.1,0.5,0.5,0.5,0.8C130.7,72.4,130.7,73.3,130.6,74.2z"/>
      </svg>
    </Wrap>
  )
}
