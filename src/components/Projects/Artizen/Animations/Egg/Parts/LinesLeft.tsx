import React from 'react'
import { styled, keyframes } from '@theme'

const Move = keyframes({
  '0%': { transform: 'translate3d( 0,0,0 )', opacity: 0 },
  '7%': { transform: 'translate3d( 2px,-5px,0 )', opacity: 1 },
  '14%': { transform: 'translate3d( 0,5px,0 )', opacity: 1 },
  '21%': { transform: 'translate3d( 0,0,0 )', opacity: 0 },
  '100%': { transform: 'translate3d( 0,0,0 )', opacity: 0 },
});

const LinesWrap = styled('div', {
  position: 'absolute',
  left: 0,
  top: 20,
  width: 15,

  svg:{
    overflow: 'visible',

    '> path:nth-child(2)': {
      animationDelay: '100ms'
    }
  },
});

const Line = styled('path', {
  animation: `${Move} 3000ms ease infinite forwards`,
});

export const LinesLeft = () => {
  return(

    <LinesWrap>
      <svg viewBox="0 0 52.4 133.8">
	      <Line id="g" d="M0.1,79.4c3.1-21.6,9.2-41.7,19.2-60.5c3.1-5.8,6.3-11.5,9.7-17.2c0.9-1.6,2.8-2.1,4.6-1.3c1.9,0.8,2.7,2.4,2.2,4.2 c-1,3.8-2,7.7-3.6,11.3c-8.7,20.7-16.6,41.6-20.6,63.8c-0.2,1.3-0.6,2.6-1.1,3.8c-1,2.4-1.9,5.2-5.4,4.4c-2.8-0.6-4.8-2.1-5.1-5.2 C-0.1,81.4,0,80.1,0.1,79.4L0.1,79.4z"/>
	      <Line id="h" d="M25,126.6c3.6-23.8,6.8-47.8,17.3-69.9c1.5-3.1,2-9.3,7.5-6.6c4.4,2.1,2,7.1,0.8,10.7c-4.8,14.1-8.3,28.6-10.9,43.2 c-1.4,7.8-2.6,15.5-4,23.3c-0.6,3.7-1.9,7.2-6.5,6.4c-3.9-0.6-4.1-4-4.1-7.2L25,126.6z"/>
      </svg>
    </LinesWrap>

  )
}
