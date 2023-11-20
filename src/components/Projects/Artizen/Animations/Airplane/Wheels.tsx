import React from 'react'
import { styled, keyframes } from '@theme'

const MoveWheels = keyframes({
  '0%': { transform: 'translate3d( 1px, 5px ,0 ) rotate( 0deg )' },
  '25%': { transform: 'translate3d( -2px, -7px ,0 ) rotate( 1deg )' },
  '50%': { transform: 'translate3d( 1px, 5px ,0 ) rotate( 0deg )' },
  '75%': { transform: 'translate3d( -2px, -7px ,0 ) rotate( 1deg )' },
  '100%': { transform: 'translate3d( 1px, 5px ,0 ) rotate( 0deg )' },
});

const Wheels = styled('div', {
  position: 'absolute',
  right: 88,
  bottom: -30,
  width: 195,
  zIndex: 0,
  animation: `${MoveWheels} 5000ms ease infinite forwards`,
  animationDelay: '200ms',
});

const AirplaneWheels = () => {
  return(

    <Wheels>
      <svg viewBox="0 0 308.6 99.3">
        <path d="M303.3,26.2c-3.7-6.1-7.9-11.9-11.8-17.9c-3.3-5-7.6-7.3-13.7-6.3c-4,0.7-8.1,0.9-12.1,1.4c0-0.3-0.1-0.5,0-1.1
          c-1,0.2-2.1,0.3-3.1,0.6c-3.2,1.1-6.3,2.6-9.5,3.4c-4.2,1.1-7.8,3.4-10.6,6.4c-7,7.5-10.5,16.4-10.6,26.7c-0.1,6,1.7,11.4,5.3,16.2
          c1.3,1.8,2.6,3.7,3.2,5.7c1.6,5.5,5.2,9,10.2,11.2c6.4,2.8,12.9,1.4,19.3,0.2c3.5-0.7,7-2.1,10.3-3.5c4.1-1.8,8.1-3.6,10.9-7.4
          c2.9-3.8,6-7.5,9.3-11C308.1,42.6,308.5,34.8,303.3,26.2z M253.4,41.9c-0.1-0.9,0.1-1.9,0.6-3c2,2.3,4,4.6,6.2,7.1
          C256,46.2,253.6,44.7,253.4,41.9z M279.4,34.5c-2.8,2.5-7.3,3.3-12.7,2.1c1-1.9,2.2-3.5,3.8-4.7c0.9-0.7,1.8-1.3,2.9-1.8
          c1.4-0.6,2.7-1,4-1c1.6,0,3,0.8,4.1,2.8C281,32.9,280.2,33.8,279.4,34.5z"/>
        <path d="M62.9,58.3c-1.5-2.9-3-5.9-4.6-8.7c-2.8-4.9-6.6-8.5-12.2-10.1c-0.7-0.2-1.4-0.8-1.9-1.4c-3.6-4.2-8.2-5.8-13.4-4.2
          c-8.3,2.6-16.6,5.9-24.8,9c-1.7,0.7-3.1,1.8-4.6,2.7C1,45.9,0.5,46.1,0,46.3c0.3,0.5,0.4,1.1,0.8,1.5c1.7,1.7,3.1,1.5,5.2-0.5
          c0,0.8,0.1,1.5-0.2,2c-0.7,1.8-1.6,3.6-2.3,5.4C1,61.4-0.3,68.2,2.5,75c1.8,4.4,4.2,8.6,6.4,12.8c2.6,5,7,6.7,11,6.7
          c1.7,0,3.5,0.1,5.2,0.5c2.4,0.5,4.6,1.7,7,2.1c2.8,0.5,5.7,0.7,8.4,0.3c4.7-0.6,8.6-2.9,12.3-6.1c3.3-2.9,5.6-6.3,7.5-10
          c1.8-3.3,2.4-7.2,3.6-10.8C65.2,66.3,64.9,62.2,62.9,58.3z M35.6,59.8c-0.7,1.7-1.2,3.5-1.9,5.7c-2-0.3-4.1-0.8-6-1
          c-3.3-0.3-6.4,0.4-8.9,4.4c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0.7-6,4.4-10.2,9.5-10.9c1.8-0.2,3.7-0.7,5.5-0.8c1.4-0.1,2.1,0.4,2.1,1.4
          C35.9,58.9,35.8,59.3,35.6,59.8z M44.7,61c-0.3,2.9-1.9,5.4-5,7.5c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0.5-3.7,0.9-6.9,1.4-10.5
          C42.6,59.1,44.8,60.1,44.7,61C44.7,60.9,44.7,60.9,44.7,61C44.7,61,44.7,61,44.7,61z"/>
      </svg>
    </Wheels>

  )
}

export default AirplaneWheels