import React from 'react'
import { styled, keyframes } from '@theme'
import { Aed, ResponderTwo } from '../'

const animateLineOne = keyframes({
  '0%, 10%': { transform: 'scale( 1, 1 )' },
  '60%, 100%': { transform: 'scale( 1, 0 )' }
})

const animateLineTwo = keyframes({
  '0%, 80%': { transform: 'scale( 1, 1 )' },
  '100%': { transform: 'scale( 0.3, 1 )' }
})

const LineMaster = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: -25,
  right: 18,
  width: 178,
  height: 207,
})

const LineWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
  position: 'relative',
  width: 157.5,
  height: '100%',
  zIndex: 0,

  '&, *': {
    '&:before, &:after': {
      content: '',
      position: 'absolute',
      bottom: 0,
      background: '#2b2b2b',
      borderRadius: 4
    },
  },

  '&:before': {
    right: 0,
    width: 4,
    height: '100%',
    transformOrigin: 'bottom center',
    animation: `${ animateLineOne } 20s linear infinite forwards`,
  },

  '&:after': {
    left: 0,
    width: '100%',
    height: 4,
    transformOrigin: 'left center',
    animation: `${ animateLineTwo } 20s linear infinite forwards`,
  }
})

const LineBottom = styled('div', {
  position: 'relative',
  width: '100%',
  height: 112,

  '&:before': {
    left: 0,
    top: 0,
    width: 20, 
    height: 4,
  },

  '&:after': {
    left: 0,
    width: 4,
    height: '100%'
  }
})

export const SecondLine = () => {
  return(

    <LineMaster>
      <LineWrap>
        <LineBottom />
        <Aed />
      </LineWrap>

      <ResponderTwo />
    </LineMaster>

  )
}
