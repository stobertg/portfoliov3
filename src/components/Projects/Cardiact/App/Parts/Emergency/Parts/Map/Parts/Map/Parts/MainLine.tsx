import React from 'react'
import { styled, keyframes } from '@theme'
import { Victim, Responder } from './'

const animateUser = keyframes({
  '0%': { transform: 'translate3d( 0, 0, 0 )'},
  '20%': { transform: 'translate3d( 0, -89px, 0 )'},
  '40%': { transform: 'translate3d( -77px, -89px, 0 )' },
  '60%': { transform: 'translate3d( -77px, -195px, 0 )' },
  '70%, 100%': { transform: 'translate3d( -60px, -195px, 0 )' }
})

const animateLineOne = keyframes({
  '0%': { transform: 'scale( 1, 1 )' },
  '20%, 100%': { transform: 'scale( 1, 0 )' }
})

const animateLineTwo = keyframes({
  '0%, 20%': { transform: 'scale( 1, 1 )' },
  '40%, 100%': { transform: 'scale( 0, 1 )' }
})

const animateLineThree = keyframes({
  '0%, 40%': { transform: 'scale( 1, 1 )' },
  '60%, 100%': { transform: 'scale( 1, 0 )' }
})

const animateLineFour = keyframes({
  '0%, 60%': { transform: 'scale( 1, 1 )' },
  '70%, 100%': { transform: 'scale( 0, 1 )' }
})

const LineMaster = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'flex-end',
  position: 'relative',
  width: 101,
  height: 210,
  transform: 'translateY( -20px )'
})

const LineWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'relative',
  width: 80,
  height: '100%',

  '*': {
    '&:before, &:after': {
      content: '',
      position: 'absolute',
      top: 0,
      background: '#4375ff',
      borderRadius: 4
    }
  }
})

const TopLines = styled('div', {
  position: 'relative',
  width: '100%',
  height: 108,

  '&:before, &:after': { left: 0 },

  '&:before': { 
    width: 20, 
    height: 4,
    transformOrigin: 'right center',
    animation: `${ animateLineFour } 20s linear infinite forwards` 
  },

  '&:after': { 
    width: 4, 
    height: '102%',
    transformOrigin: 'top center',
    animation: `${ animateLineThree } 20s linear infinite forwards` 
  },
})

const BottomLines = styled('div', {
  position: 'relative',
  width: '100%',
  height: 102,

  '&:before': { 
    left: 0, 
    width: '100%', 
    height: 4,
    transformOrigin: 'left center',
    animation: `${ animateLineTwo } 20s linear infinite forwards`
  },

  '&:after': { 
    right: 0, 
    height: '100%', 
    width: 4, 
    transformOrigin: 'top center',
    animation: `${ animateLineOne } 20s linear infinite forwards` 
  }
})

export const MainLine = () => {
  return(

    <LineMaster>
      <LineWrap>
        <TopLines><Victim /></TopLines>
        <BottomLines />
      </LineWrap>

      <Responder />
    </LineMaster>

  )
}
