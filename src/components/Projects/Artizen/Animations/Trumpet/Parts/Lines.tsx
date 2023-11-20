import React from 'react'
import { styled, keyframes } from '@stitches/react'

const Dash = keyframes({
  '0%': { strokeDashoffset: 611, opacity: 0 },
  '50%': { strokeDashoffset: 411, opacity: 1 },
  '100%': { strokeDashoffset: 211, opacity: 0 },
});

const FadeIn = keyframes({
  '0%': { transform: 'translateX( -50px )', opacity: 0 },
  '50%': { transform: 'translateX( 0px )', opacity: 1 },
  '100%': { transform: 'translateX( 50px )',  opacity: 0 },
});

const LineWrap = styled('div', {
  position: 'absolute',
  top: 0,
  right: 0,
  width: 80,
  height: '100%',
});

const LineGroup = styled('g', {
  '> path:nth-child(2)': { animationDelay: '50ms' },
  '> path:nth-child(3)': { animationDelay: '100ms' },
  '> path:nth-child(4)': { animationDelay: '150ms' },
  '> path:nth-child(5)': { animationDelay: '200ms' },
  '> path:nth-child(6)': { animationDelay: '250ms' },
  '> path:nth-child(7)': { animationDelay: '300ms' }
})

const Line = styled('path', {
  fill: 'none',
  stroke: '$black',
  strokeWidth: 9,
  strokeDasharray: 210,
  strokeDashoffset: 611,
  animation: `${Dash} 3000ms ease infinite forwards`
});

const CircleGroup = styled('g', {

});

const Circle = styled('path', {
  fill: '$moss',
  animation: `${FadeIn} 3000ms ease infinite forwards`
});

export const TrumpetLines = () => {
  return(

    <LineWrap>
      <svg viewBox="0 0 224.2 365.5">
        <LineGroup>
          <Line d="M7.4,190.8c0,0,51,5.6,82,14.3c31.1,8.7,109.2,37.9,109.2,37.9"/>
          <Line d="M76.9,232.3c0,0,24.7,10,40.5,23.6c15.7,13.6,48,46.4,50.6,50.6c0,0,11.5,15.7,13,22.8"/>
          <Line d="M21.8,236.8c0,0,76.7,35.6,94.6,73.1"/>
          <Line d="M74.8,158.2c0,0,108.5-54.2,129.6-52.3"/>
          <Line d="M110.5,97.3c0,0,70.3-38.2,88.2-59.7"/>
          <Line d="M30,86.1c0,0,56.4-41,66-85.1"/>
          <Line d="M2,140.5c0,0,49.5-23.8,76.3-47.8s29.2-32.6,35-35.9"/>
        </LineGroup>
         
        <CircleGroup>
          <Circle d="M166.5,17l-2.6-1.4c-2.8,0.9-4.1,3.2-5.3,5.6c-2.1,3.9,0.9,6.2,2.9,8.9c1,1.4,2.8,2.1,4.2,1 c2.3-1.8,3.6-4.6,3.1-7.7C168.6,21.1,167.4,19.1,166.5,17L166.5,17z"/>
          <Circle d="M42.8,11.3l-1.4,2.6c1.1,0.5,1.1,1.5,0.8,2.4c-1.5,4.8,1.8,6.9,5.3,8.3c2.6,1,4.8,0,4.9-3.3 C52.6,15.8,48.1,11.3,42.8,11.3L42.8,11.3z"/>
          <Circle d="M76.9,119.3c-4.1-2.4-4.1,1.8-5.7,3.2c-2.2,3.8-1.3,7.7,2.2,9.6c2.6,1.4,5,1,6.5-1.8 c1.8-3.1,0.1-9.3-2.9-11.1L76.9,119.3z"/>
          <Circle d="M217.5,252.1c2.3,0,4.3-1.9,5.9-4.7c1.1-2.8,1.2-6.3-1.5-9.1c-2.4-2.6-5.2-0.9-7.5,0.4 c-4.2,2.3-1.2,5.7-0.7,8.6C214.1,249.4,214.9,252.2,217.5,252.1L217.5,252.1z"/>
          <Circle d="M159.7,248.9c-1.3-0.3-2.5-0.9-3.6,0.3c-2.2,2.4-3.5,4.9-2,8.2c1.4,3.1,3.1,5.5,6.8,5.8 c1.6,0.2,2.8-0.5,3.4-2.1C165.7,257.6,163,250.5,159.7,248.9L159.7,248.9z"/>
          <Circle d="M193,128.7c-3.2-1.5-4.9,0.8-6.4,2.8c-1.8,3.6,0,7.8,4,9.8c2.7,1.4,4.5,0.9,5.9-1.8 C198.1,136,196.5,130.3,193,128.7L193,128.7z"/>
          <Circle d="M166.3,351.8c-2.9-1.7-6.8-0.6-8.3,2.3c-1.8,3.4,0,7.4,4.9,10c2.2,1.2,4.2,2.7,6.1-0.5 C171.3,359.5,170.1,353.9,166.3,351.8z"/>
          <Circle d="M45.8,273.7c-2.5-1.1-4.3,0-5.6,2.1c-1.5,2.6,0.9,7.6,4.5,9.4c2,1,4,1.4,5.4-1 c1.7-2.9-0.9-9-4.4-10.6L45.8,273.7z"/>
        </CircleGroup>
      </svg>
    </LineWrap>

  )
}
