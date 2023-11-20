import React from 'react'
import { styled, keyframes } from '@theme'

// For the rotation animation of the blade of the airplane
// This infintily spins it around in a circle

const Rotate = keyframes({
  '0%': { transform: 'rotate( 0deg )' },
  '100%': { transform: 'rotate( 360deg )' }
})

// For the container of the spinning blade on the front of the aiplane
// This is obvisouly used for the airplane to be able to fly

const Blades = styled('div', {
  position: 'absolute',
  top: -8,
  right: 50,
  width: 53,
  transformOrigin: 'center center',
  animation: `${Rotate} 200ms linear infinite forwards`,
  zIndex: 10,
  fill: '$slate'
})

// ---------- This is the end of declarations ---------- //

export const AirplaneBlades = () => {
  return(

    <Blades>
      <svg viewBox="0 0 79.2 480.8">
        <path d="M61,192.8c0.6,0.2,0.8,0.4,0.9,0.9c0.1,1.7-0.1,3.4-0.6,5.1c-0.2,0.5,0,1-0.1,1.5c-0.5,1.6,0.2,3.3-0.4,5
          c-0.5,1.3-0.6,2.9-0.4,4.5c0.2,1.8-0.6,3.3-0.7,5c-0.1,1-0.5,2.2-0.1,3.2c0.4,1-0.7,1.8-0.2,2.9c0.4,0.9-0.3,2.2-0.5,3.4
          c-1.9,0.5-3.8,0.4-5.6,0.1c-0.5,0.1,0,0.7-0.4,1c-1.1-0.4-2.2-0.3-3.4-0.1c1.4,1.8,1.4,1.8,5.2,2.8c0.1,0.1,0.4-0.1,0.5,0
          c3.2,1,3.6,1.7,3.2,5c-0.4,3.3-0.5,6.7-0.5,10c0,1.1-0.2,2.1-0.7,3.1c-0.6,1.5-1.3,2.9-1.9,4.3c-0.6,1.6-1.7,3-3.1,4
          c-1.2,0.8-2,0.8-2.8-0.3c-1-1.6-2.3-3.1-2.8-5.2c-0.5-1.9-1.2-3.9-2.5-5.6c-0.6-0.9-0.6-2-1.1-2.9c-1.8-3.7-3.4-7.4-5.2-11
          c-1.3-2.6-2.1-5.3-3-8c-2.1-5.6-3.5-11.5-5-17.3c-0.6-2.4-1-4.8-1.7-7.1c-1.3-4.4-2.3-8.8-3.7-13.1c-1.8-5.2-3.2-10.6-4.6-16
          c-0.5-1.8-1.1-3.6-1.8-5.2c-0.6-1.6-1-3.3-1.6-5c-1.7-5.4-3.6-10.5-5.3-15.9c-0.7-2.3-1.4-4.6-2.5-6.8c-0.7-1.5-0.9-3.2-1.3-4.8
          c-1.8-7.2-3-14.4-4.2-21.7c-0.7-4.2-1-8.4-1.6-12.6c-0.4-2.8-0.5-5.7-0.4-8.5c0-3.1,0-6.2-0.2-9.2c-0.1-2.8-0.5-5.7-0.9-8.6
          c-0.3-2.1-0.1-4.1,0-6.2c0.1-2.5,0.3-5,0.1-7.5c-0.1-1.4,0.8-2.6,0.4-4c-0.3-1.2,0-2.7,0.4-3.9c0.8-2,0.4-4.1,1.5-6
          c0.6-1-0.1-2.2,0.2-3.3c0.6-2.4,2-4.4,2.5-6.8c0.3-1.1,1.2-1.8,1.9-2.5C7,29,6.6,28.6,7,28c1.6-2.5,2.9-5.2,4.8-7.6
          c3.3-4,6-8.4,10-11.7c4.6-3.8,9.3-7.3,15.4-8.3C45.9-0.9,53.8,1,60.5,6.8c3.9,3.4,6.6,7.8,8.3,12.7c2,5.8,3,11.9,3.7,17.9
          c0.4,3.4,1.2,6.7,1.6,10.1c0.3,3.6,0.8,7.1,1.1,10.6c0.1,1.8,0.4,3.6-0.4,5.3c-0.1,0.3-0.2,0.3,0,0.7c0.6,1.1,0.6,2.3-0.2,3.4
          c1,1.1,0.2,2.1,0,3.2c-0.1,0.9,0.3,1.8,0.1,2.9c-0.8,6.3-1.3,12.5-2.3,18.7c-0.1,1.4-0.1,2.8-0.5,4.1c-0.6,1.6,0.2,3.4-0.4,5
          c-0.5,1.5-0.2,3.2-0.5,4.8c-0.3,1.6-0.3,3.2-0.5,4.8c-0.8,6.7-0.9,13.4-1.6,20.1c-0.7,6-1.1,12.1-2,18.2c-0.3,2.1-0.7,4.1-0.6,6.3
          c0,2.1-0.3,4.2-1.2,6.1c0.9,1.6-0.5,3-0.3,4.5c0.5,3-0.5,5.8-0.8,8.7c-0.3,2.4-1,4.8-0.9,7.2c0.1,3.4-0.4,6.7-0.7,10
          C62.2,192.3,61.6,192.4,61,192.8z M62.1,58.6c-0.5-0.2-1-0.3-0.9-0.8c0.6-2.3,0.1-4.7,0-7c0-4.6-0.5-9.1-0.7-13.7
          c-0.3-5.2-1.1-10.3-2.5-15.4c-0.7-2.8-1.6-5.5-3.4-8c-0.6,0.6-1.4,1.1-1.6,1.7c-1.1,2.6-3.1,4.7-3.4,7.6c-0.1,0.5-0.3,1-0.5,1.5
          c-1.3,3-1.9,6.1-2.7,9.2c-0.6,2.5-1.1,5.1-1.6,7.6c-0.6,2.8-1.4,5.5-1.9,8.3c-0.8,3.6-1.6,7.3-2.1,10.9c-0.3,2-0.9,4-1.1,6
          c-0.1,2.9-1.1,5.5-1.3,8.4c-0.1,1.9-0.7,3.7-0.7,5.7c0.1,1.8-0.7,3.7-0.7,5.6c-0.1,9.3-1,18.4-0.6,27.6c0.1,0.9-0.2,1.6-0.6,1.9
          c0.2,1.9,0.7,3.6,0.6,5.2c-0.4,4.5,0.6,8.9,0.4,13.5c-0.1,3.2,0.3,6.4,0.3,9.6c-0.1,3.5,0.1,7,0.3,10.5c0.3,4.4,0.6,8.7,1.1,13
          c0.3,3.7,0.5,7.5,1.1,11c1,5.7,1.9,11.4,3,17.2c0.9,5.3,2.1,10.6,3.3,15.8c0.1,0.4-0.1,1.4,1.1,1.4c0.5-0.2,0.5-0.8,0.6-1.4
          c0.1-3.9,0.6-7.7,1-11.6c0.1-0.8,0.2-1.5,0.4-2.4c0.4-2.4,1.1-4.8,1.3-7.2c0.2-3.3,0.7-6.3,1.2-9.5c0.8-4.8,1.8-9.5,2.5-14.2
          c0.7-4.3,1.4-8.6,1.7-12.9c0.3-4.9,1-9.8,1.5-14.7c0.5-4.6,0.9-9.3,1.2-13.9c0.4-5.1,0.8-10.3,1.4-15.4c0.3-2.3,0-4.7,0.3-7.1
          c0.3-2.4,0.2-5,0.1-7.5c0-0.8,0.5-1.3,0.7-1.4c-0.3-11.5,0.5-22.6,0.4-33.7C61.4,59.7,61.5,59.1,62.1,58.6z M25.8,152.8
          c0.9-1.1-0.2-2.1,0-3.3c0.3-3.2,0.2-6.4-0.3-9.6c-0.1-0.9-0.2-2-0.1-2.9c0.3-3.7-0.3-7.2-0.4-10.9c0-3-0.5-6-0.3-9
          c0.1-2.8,0-5.6,0.1-8.5c0-3.1-0.1-6.2,0-9.2c0.1-2.9,0.3-5.8,0.5-8.7c0.1-1.3-0.2-2.5-0.1-3.9c0.1-1.2,0.3-2.5,0.4-3.7
          c0.3-2.1,0.2-4.2,0.6-6.3c1-4.8,0.7-10,2.9-14.6c-0.5-2.2,0.8-4.2,0.8-6.1c-0.1-2.6,1.6-4.8,1.2-7.3c-0.1-1,0.7-2.3,0.9-3.6
          c0.2-1.2,0.1-2.5,0.8-3.5c0.9-1.1,0-2.3,0.5-3.4c0.9-1.7,1-3.6,1.4-5.4c0.3-1.1,1.2-2,1.1-3.1c-0.1-2.2,0.4-4.1,1.4-6
          c1.4-2.8,1.7-5.9,3.6-8.6c0.2-0.3,0.3-0.7,0.2-1c0-0.7,0.4-1.1,0.7-1.6c1.4-2.5,2.9-4.9,6.2-6.3c-2.1-0.6-3.6-0.6-5.1-0.1
          c-4.4,1.4-8.5,3.3-11.6,6.8c-0.4,0.5-0.8,1.1-1.7,1.1c-0.2,0-0.3,1.1-0.8,1.6c-2.3,1.9-4.3,4.1-5.8,6.6c-1.7,3-4.2,5.3-5.8,8.3
          c-0.6,1.1-0.8,2.3-1.4,3.5c-2.8,5.2-3.7,11-4.3,16.7c-0.5,4.7-0.9,9.6-0.7,14.4c0.1,1.2,0.1,2.4-0.1,3.5s0,2.3,0.3,3.4
          c0.2,1.1,0.3,2.4,0,3.4c-0.5,1.2,0.4,2,0.6,3c0.6,4.1,0.4,8.3,0.8,12.3c0.3,3.4,0.2,6.8,0.6,10.2c0.4,3.3,0.8,6.5,1.6,9.8
          c0.4,1.6,0.7,3.2,0.1,4.6c1.8,1.7,1.5,3.7,1.1,5.6c0.8,0.5,1.1,1.4,1.2,2.3c0.2,3.6,1.6,7.1,2.7,10.4c0.3,1.3,0.5,2.6,1.1,3.9
          c1.3,2.7,1.9,5.6,2.9,8.3C24.1,148.5,24.6,150.7,25.8,152.8z"/>

        <path d="M74.6,442.6c0.5,1.9,0,3.3-1.4,4.2c0.4,0.2,0.6,0.4,0.9,0.6c-1.9,3.4-2.2,7.4-4.5,10.7c-0.4-0.2-0.7-0.3-0.9-0.4
          c-0.5,0.4-0.5,1.1-0.7,1.6c0.3,0.3,0.5,0.6,0.8,0.8c-0.8,0.7-1.9,1.2-1.4,2.6c0.1,0.2-0.2,0.6-0.3,0.7c-1.5,0.6-1.8,2-2.7,3.1
          c-1.2,1.5-2.6,2.8-4,4.1c-1.9,1.7-3,4-4.5,5.9c-1.9,2.5-4.1,3.7-6.8,4c-3.6,0.5-7.2,0-10.3-2.2c-0.5-0.3-0.8-0.6-1.5-0.6
          c-4.1,0-7.1-2.2-10.1-4.6c-2.5-2.1-5-4.1-6.7-7c-1.7-2.9-3.1-6-4.1-9.1c-0.5-1.5-1.1-3-1.4-4.5c-0.2-2-0.6-3.9-0.9-5.9
          c-0.3-2.1-0.8-4.2-1.2-6.3c-0.2-0.7,0.4-1,0.7-1.4c-0.2-0.5-0.8-0.6-0.9-1.2c-0.9-6.6-1.3-13.3-1.6-20c-0.2-0.5-0.6-1.1-0.7-1.6
          c-0.1-0.5,0-1.1,0.1-1.6c0.2-2.6-0.7-5.3,0.1-7.8c1.3-3.7,1.1-7.7,1.7-11.6c0.5-4.2,1.6-8.4,1.9-12.6c0.2-2.7,0.9-5.4,1.3-8
          c0.9-4.3,0.7-8.9,2.8-12.9c0.3-0.7-0.6-1.6,0.4-2c0.5-4.9,2.3-9.6,3.7-14.3c0.8-2.8,1.9-5.6,2.5-8.4c0.4-2.3,1.8-4.3,1.6-6.6
          c0-1.1,1-1.5,1.3-2.5c0.3-1.3-0.1-2.6,0.3-3.9c0.8-2.3,1.5-4.6,2.1-7c0.7-2.7,2.3-5.1,3.2-7.7c0.9-2.8,1.9-5.7,3.2-8.3
          c0.8-1.8,1.6-3.5,2.2-5.4c0.5-1.8,0.4-3.5,0.2-5c-0.4-3.2-0.5-6.3-0.7-9.6c-0.3-4-0.1-8.2-0.5-12.2c-0.1-1.4,0-2.5,1.5-3.1
          c0.3-0.1,0.5-0.2,0.7-0.4c0.4-0.9,0.3-2,1.5-2.2c1.7-0.3,3.4-0.5,5.1,0.4c1,1.6,1.7,3.5,1.8,5.7c2.5,1,4.6,2.8,7.6,3.2
          c0.9,2,1.8,4,2.7,6.1c0.4,0.8,0.6,1.7,1.1,2.5c1.6,2,1.9,4.5,1.9,6.8c0,2.6,0.9,5.2,1,7.7c0.4,4.5,1.2,9,1.5,13.5
          c0.3,3.7,0.8,7.4,1.8,11c1.4,5.3,2.7,10.5,3.3,15.9c1.7,2.4,0.9,5.5,2.2,8c0.2,0.5,1,1.4,0,2.1c1.1,0.9,0.2,2.5,0.7,3.3
          c0.9,1.5,0.9,2.9,0.9,4.3c0.2,2.9,1.9,5.6,1.3,8.6c2.1,3.7,2.2,7.9,2.4,12c0.1,3.2,0.6,6.4,0.8,9.7c0.3,3.4,0.4,6.8,0.9,10.2
          c0.3,1.6,0.1,2.4-0.7,3.7c1.4,1.6,1.2,3.4,0.8,5.1c-0.2,1-0.6,1.5,0.1,2.6c0.6,1.1,0.5,3.1-0.1,4.7c-0.2,0.5-0.2,4.2-0.1,4.9
          c0,0.5-0.4,2.6-0.7,3.6c0.1,0.5,0.4,0.9,0.3,1.4c-0.2,2.1-0.1,4.1-0.4,6c-0.2,1.4-0.1,2.9-0.3,4.3c-0.4,2.7-0.5,5.5-0.9,8.2
          C76.5,440.1,76.1,441.7,74.6,442.6z M51.4,466.7c0.1-2.4,1.4-4.7,1.5-7.4c0.1-2.5,0.9-5.1,1.3-7.6c0.5-2.6,1-5.3,1.2-7.8
          c0.2-2.6,0.3-5.2,1.1-7.7c-0.5-0.6-0.7-1.6-0.3-2.3c0.5-1.5,0.9-3.1,0.5-4.7c1-0.5,0.6-1.6,0.5-2.3c-0.2-1.4-0.2-2.6,0-3.9
          c0.8-4.8-0.3-9.9,1.5-14.7l-0.2-0.1c-0.4-4.6-0.2-9.2,0.3-13.8c0.2-2.6,0.7-5.3,0.7-7.8c0-3.6,0.2-7.2,0.3-10.9
          c0.2-4.8,0.4-9.6,0.4-14.4c-0.1-2.8-0.4-5.7-0.7-8.5c-0.5-4.1-1.3-8.3-2-12.4c-0.2-1.5-0.4-3.2-1-4.8c-0.5-1.6-0.8-3.5-1-5.2
          c-0.1-0.7,0.8-1.4,0-2.2c-0.9-0.9-0.8-2.4-1.1-3.6c-0.4-2.2-0.3-4.5-1-6.6c-0.2-0.5-0.5-0.8-1-0.6c0.6,1.1-0.5,1.6-0.9,2.6
          c1.2,0.9,0.1,2.2,0.4,3.4c0.3,1.2-0.7,2.7-0.4,4.1c-0.5,0.3-1,0.8-1.4,1.1c0.2,0.2,0.7,0.4,0.7,0.7c-0.7,3.1,0,6.7-1.9,9.5
          c0.3,0.2,0.6,0.4,0.7,0.5c-0.2,1.6-0.4,3.2-0.7,4.8c-0.2,1.4,0.7,3-0.7,4.3c0.2,2.9-0.8,5.5-0.9,8.4c0,1.4-0.1,3-1.5,3.8
          c0.7,3.6,0.7,6.9-0.5,10.2c-0.1,0.4-0.5,0.8-0.4,0.9c0.8,1.5-0.4,2.5-0.7,3.7c0.2,0.5,0.9,0.9,0.7,1.5c-0.6,2-0.1,4.1-0.7,6
          c-0.4,1.1-0.3,2.2-0.4,3.3c0,1.5,0,3.4-1.6,4.5c-0.1,0-0.1,0.3-0.2,0.3c0.4,0.1,0.7,0.1,1.2,0.1c0.2,1.6-0.2,3-0.3,4.5
          c-0.1,1.4,0.2,2.9-0.4,3.9c-0.9,1.5,0.3,2.9-0.3,4.3c-0.4,0.8,0,1.7-0.4,2.6c-0.2,0.4-0.2,1-0.1,1.3c0.4,1-0.3,1.7-0.4,2.5
          c-0.1,0.8,0.4,1.8,0.1,2.8c-0.4,1.8-0.4,3.7-0.8,5.5c-0.2,1.1,0.5,2.3-0.1,3.4c-0.6,1,0.7,2.4-0.7,3.3c-0.2,0.1-0.1,0.8,0,1
          c1.1,1.6,0.5,3.3,0.5,4.9c-0.2,4.8-1.1,9.5-0.4,14.2c0.2,1.5-0.3,3.1-0.2,4.6c0.2,4.9,0.4,9.8,1.5,14.6c0.4,2.2,0.9,4.4,2.1,6.5
          C46.1,469.8,49.1,469.1,51.4,466.7z M22.7,398.6c-0.9,1.7-0.7,3.7-1,5.5c-0.3,1.6-0.9,2.9-0.7,4.6c0.3,1.7-0.7,3.4-0.6,5.2
          c0.2,1.6,0.5,3.2-0.1,4.7c1.3,1.7,0.5,3.8,1.3,5.6c-0.4,0.9-1.4,1.6-0.8,2.8c-0.5,0-0.8-0.4-1.2-0.1c0,0.5,0.1,1,0.1,1.5
          c0.4,0.2,0.8-0.1,1.3,0.4c0.5,0.6,0.4,1.7,1.2,2.3c-0.5,0.7-0.8,1.1-0.5,1.9c0.8,1.7,0.5,3.3-1.2,4.5c0.8,0,1.3-0.6,1.7-0.3
          c0.8,1.2-0.1,2.5,0.3,3.4c0.8,1.8,0.6,3.8,0.8,5.7c0.3,2.1,0.2,4.4,1.2,6c1.2,1.9,0.4,3.2-0.1,4.9c0.7,0,1.2,0,1.9,0
          c0.1,0.3,0.3,0.5,0.3,0.7c-0.2,2.3,1.1,4,2.1,5.9c0.7,1.2,1.6,2.2,2.3,3.5c0.5,0.8,1,0.8,1.8,0.5c-2.5-4.1-4.1-26.9-1.9-30.7
          c-0.3-0.7-0.7-1.5-0.4-2.2c0.7-2.7,0.1-5.6,0.7-8.4c0.3-1.3-0.2-2.7,0.7-4c-0.9-2.1,0.3-4.3,0-6.4c-0.3-2.2,0.8-4.3,0.6-6.6
          c-0.2-2.1,0.3-4.2,0.5-6.3c0.3-4.2,0.7-8.3,1.1-12.4c0.4-3.2,0.7-6.6,1-9.8c0.2-2.3,0.3-4.5,0.8-6.7c0.6-2.6,0.7-5,1-7.7
          c0.2-2.7,0.8-5.4,1-8.1c0.1-1.8,0.7-3.5,0.9-5.4c0.2-3.5,0.9-7,1.4-10.5c0.4-2.4,0.8-4.6,1.1-6.9c0.2-2,0.4-4,0.6-6.1
          c0.2-2.8,0.8-5.6,1.3-8.4c0.7-3.9,0.7-7.8,1.2-11.7c0.1-0.1-0.2-0.2-0.5-0.6c-0.8,2.1-1.4,4.2-2.8,5.7c1.2,2.7-0.3,4.7-1.7,6.8
          c1.5,2.4-0.2,4.5-0.9,6.5c-0.8,2.2-0.1,5-2.8,6.3c0.4,0.5,1-0.1,1.3,0.4c-0.6,2.3-2.9,3.9-1.7,6.7c-1.5,2.1-2,4.7-3.5,6.8
          c0.1,0.5,0.8,0.3,1.1,0.7c-0.8,0.5-0.8,1.2-0.6,2c-0.4,0-0.9,0-1.3,0c-0.2,0.4-0.3,0.9-0.4,1.3c0.3,0.1,0.6,0.2,0.8,0.3
          c0.7,1.6-0.9,2.7-0.4,4c-0.5,0.8-1.5,0.5-2.1,1.2c0.3,0.2,0.7,0.3,0.7,0.7c-0.2,1.3-1.3,2.4-0.4,3.9c0.3,0.3-0.1,1-0.3,1.6
          c-0.5,1.4-0.9,2.8-1.8,4.1c0.5,0.4,0.6,0.9,0.6,1.5c-0.1,0.9-0.6,1.8-0.7,2.7c-0.3,2.1-1,4.2-0.8,6.3c0,0.8-0.3,1.7-0.1,2.4
          c0.1,0.8-1.3,0.9-0.7,1.9c0.4,0.7-0.8,1.4-0.2,2.2c0,0.1-0.7,0.6-1,0.9c0.4,2.6,0,5.1-0.7,7.3c-0.4,1.7-0.5,3.6-1.3,5.3
          C22,398,22.5,398.4,22.7,398.6z"/>
      </svg>
    </Blades>

  )
}