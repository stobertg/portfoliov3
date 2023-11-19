import React from 'react'
import { styled, keyframes } from '@theme'

const animate__eyes = keyframes({
  '0%': { transform: 'scale( 1,1 )' },
  '5%': { transform: 'scale( 1,0 )' },
  '10%, 100%': { transform: 'scale( 1,1 )' }
})

const EyeWrap = styled('div', {
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  top: 80,
  width: '100%',
  height: 30,
  paddingLeft: 25,
  zIndex: 10,

  div: {
    position: 'relative',
    width: 50,
    height: 8,
    transform: 'rotate(5deg)',

    '&:before, &:after': {
      content: '',
      position: 'absolute',
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: '$black',
      animation: `${ animate__eyes } 5s ease infinite`
    },

    '&:before': { left: 0 },
    '&:after': { right: 0 }
  }
})

export const Eyes = () => {
  return(

    <EyeWrap><div /></EyeWrap>

  )
}
