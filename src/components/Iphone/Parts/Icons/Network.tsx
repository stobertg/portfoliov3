import React from 'react'
import { styled } from '@theme'

const NetworkWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
  position: 'relative',
  height: 10,
  '> *:not(:last-child)': { marginRight: 2 }
})

const NetworkBar = styled('div', {
  position: 'relative',
  width: 2,
  borderRadius: 2,
  background: '$white',

  variants: {
    height: {
      l0: { height: '25%' },
      l1: { height: '50%' },
      l2: { height: '75%' },
      l3: { height: '100%' }
    },

    opacity: {
      l0: { opacity: 0.3 }
    }
  }
})

export const IconNetwork = () => {
  return(

    <NetworkWrap>
      <NetworkBar height="l0" />
      <NetworkBar height="l1" />
      <NetworkBar height="l2" />
      <NetworkBar height="l3" opacity="l0" />
    </NetworkWrap>

  )
}
