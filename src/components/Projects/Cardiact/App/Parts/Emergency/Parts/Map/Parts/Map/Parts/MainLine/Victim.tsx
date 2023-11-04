import React from 'react'
import { styled, keyframes } from '@theme'
import { Icon } from '@components'

// For the heart pulse animation of the victim icon
// This animates a traditional heart beat, to give emphasis that this is a heart problem

const heartPulse = keyframes({
  '0%': { transform: 'scale( 0.9 )' },
  '25%': { transform: 'scale( 1.1 )' },
  '50%': { transform: 'scale( 0.95 )' },
  '75%, 100%': { transform: 'scale( 1 )' }
})

// For the master container of the vicitim location within the map
// This is location in the top left of the map, where the main responder eventually gets to

const VictimWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: -12,
  left: 10,
  width: 32,
  height: 32,
  borderRadius: '50%',
  border: '2px solid #cd0000',
  background: 'red',
  boxShadow: '0 2px 10px rgba( 0,0,0, 0.5 )',
  transformOrigin: 'center',
  animation: `${ heartPulse } 1000ms infinite linear`,
  zIndex: 10,
  '> *': { marginTop: 1 }
})

// ---------- This is the end of declarations ---------- //

export const Victim = () => {
  return(

    <VictimWrap>
      <Icon size="l0" icon="heart" />
    </VictimWrap>

  )
}
