import React from 'react'
import { styled, keyframes } from '@theme'
import { Icon } from '@components'

const animateUser = keyframes({
  '0%': { transform: 'translate3d( 0, 0, 0 )'},
  '20%': { transform: 'translate3d( 0, -89px, 0 )'},
  '40%': { transform: 'translate3d( -77px, -89px, 0 )' },
  '60%': { transform: 'translate3d( -77px, -195px, 0 )' },
  '70%, 100%': { transform: 'translate3d( -60px, -195px, 0 )' }
})

const rotateUser = keyframes({
  '0%, 19%': { transform: 'rotate( 0 )' },
  '20%, 39%': { transform: 'rotate( -90deg )' },
  '40%, 59%': { transform: 'rotate( 0 )' },
  '60%, 69%': { transform: 'rotate( 90deg )' },
  '70%, 100%': { transform: 'rotate( 90deg )' }
})

const ResponderLocation = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  bottom: 0,
  right: 0,
  width: 24,
  height: 24,
  borderRadius: '50%',
  border: '2px solid $white',
  background: '#4375ff',
  boxShadow: '0 2px 10px rgba( 0,0,0, 0.8 )',
  animation: `${ animateUser } 20s linear infinite forwards`,
  
  svg: { 
    width: 12, 
    height: 12,
    animation: `${ rotateUser } 20s linear infinite forwards`,
  }
})

export const Responder = () => {
  return(

    <ResponderLocation>
      <Icon size="l0" icon="navigation-2" />
    </ResponderLocation>

  )
}
