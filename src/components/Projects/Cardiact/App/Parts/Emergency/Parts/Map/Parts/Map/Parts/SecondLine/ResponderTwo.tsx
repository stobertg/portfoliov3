import React from 'react'
import { styled, keyframes } from '@theme'
import { Icon } from '@components'

// For the animation of the responder moving to the victim
// This takes the responder along the main lines, moving from the bottom right to the top left

const animateUser = keyframes({
  '0%, 10%': { transform: 'translate3d( 0, 0, 0 )'},
  '60%, 80%': { transform: 'translate3d( 0, 190px, 0 )' },
  '100%': { transform: 'translate3d( -110px, 190px, 0 )' }
})

// For the master container of the responder icon moving towards the victim 
// This is colored in blue, with the location icon in the center

const ResponderLocation = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
  right: 0,
  width: 24,
  height: 24,
  borderRadius: '50%',
  border: '1px solid red',
  background: '#111',
  boxShadow: '0 2px 10px rgba( 0,0,0, 0.8 )',
  zIndex: 10,
  animation: `${ animateUser } 20s linear infinite forwards`,

  // Here we have to set the icon to be smaller than the default
  // We also attach the rotation animation for the user as they move along the path
  
  svg: { 
    width: 12, 
    height: 12
  }
})

// ---------- This is the end of declarations ---------- //

export const ResponderTwo = () => {
  return(

    <ResponderLocation>
      <Icon size="l0" icon="user" />
    </ResponderLocation>
  )
}
