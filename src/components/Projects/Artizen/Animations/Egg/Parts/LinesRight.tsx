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
  top: 50,
  right: 0,
  width: 15,

  svg: {
    overflow: 'visible',
    
    '> path:nth-child(2)': {
      animationDelay: '100ms'
    }
  }
});

const Line = styled('path', {
  animation: `${Move} 3000ms ease infinite forwards`,
});

export const LinesRight = () => {
  return(

    <LinesWrap>
      <svg viewBox="0 0 66.1 152.6">
        <Line d="M65.2,100.3c-0.3,16.6,0.3,29.3-2.1,41.9c-0.3,1.7-0.4,3.5-0.6,5.2c-0.4,3.7-2.5,5.7-6.2,5.1 c-3.1-0.5-3.9-3.1-3.8-6c0.3-8.3,1.2-16.5,1.4-24.9c0.6-28.1-1.8-55.9-7.8-83.4c-0.8-3.8-0.8-7.8-1-11.7c-0.1-2.3,0.4-4.5,3-5.2 c2.8-0.7,5.3,0.2,6.8,2.6c1.1,1.8,2,4,2.3,6.1C60.1,54.7,68.9,78.7,65.2,100.3L65.2,100.3z"/>
        <Line d="M29.7,81.9c0.3,2.8-0.3,5.5-3.4,6.1c-3.9,0.8-5.3-1.6-5.9-5.2C16,56.4,9.7,30.6,0.6,5.4C0,3.8-0.6,1.9,1.3,0.7 c2.2-1.4,4.4-0.5,5.9,1s2.7,3.4,3.5,5.4C19.9,31.3,26.7,56.1,29.7,81.9L29.7,81.9z"/>
      </svg>
    </LinesWrap>

  )
}
