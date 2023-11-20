import React from 'react'
import { styled, keyframes } from '@stitches/react'
import { Clover, Phone, Apple } from './'

const Move = keyframes({
  '0%': { transform: 'translateY( 0 ) rotate( -30deg )' },
  '25%': { transform: 'translateY( -150px ) rotate( 10deg )' },
  '50%': { transform: 'translateY( 0 ) rotate( 30deg )' },
  '100%': { transform: 'translateY( 0 ) rotate( -10deg )' },
});

const ItemsWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  bottom: 0,
  width: '100%',
  height: '100%',
  zIndex: 1,

  svg: { width: 50 },

  '> div:nth-child(2)': {
    animationDelay: '2500ms'
  },
  
  '> div:nth-child(3)': {
    animationDelay: '5000ms'
  }
});

const Item = styled('div', {
  position: 'absolute',
  animation: `${Move} 7500ms cubic-bezier(.36,.19,.11,.94) infinite forwards`,
});

export const HatItems = () => {
  return(

    <ItemsWrap>
      <Item><Apple /></Item>
      <Item><Clover /></Item>
      <Item><Phone /></Item>
    </ItemsWrap>

  )
}
