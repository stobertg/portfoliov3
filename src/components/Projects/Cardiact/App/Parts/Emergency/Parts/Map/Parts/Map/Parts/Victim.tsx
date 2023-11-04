import React from 'react'
import { styled, keyframes } from '@theme'
import { Icon } from '@components'

const heartPulse = keyframes({
  '0%': { transform: 'scale( 0.9 )' },
  '25%': { transform: 'scale( 1.1 )' },
  '50%': { transform: 'scale( 0.95 )' },
  '75%, 100%': { transform: 'scale( 1 )' }
})

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

export const Victim = () => {
  return(

    <VictimWrap>
      <Icon size="l0" icon="heart" />
    </VictimWrap>

  )
}
