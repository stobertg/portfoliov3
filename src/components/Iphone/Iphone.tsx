import React from 'react'
import { styled } from '@theme'
import { Heading, Icon } from '@components'
import { IphoneTop } from './Parts'

// For the master container of the iphone component
// This is set up to look like the iPhone Max 14

const IphoneWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 360,
  maxWidth: '360px !important',
  height: 724,
  background: '$black',
  color: '$black',
  borderRadius: 56,
  boxShadow: '0 2px 20px rgba( 0,0,0, 0.2 )',

  variants: {
    size: {
      l0: {},
      l1: {
        width: 310,
        maxWidth: '310px !important',
        height: 625,
        borderRadius: 50
      }
    }
  }
})

// For all of the content within the iphone
// This holds the inteface of the iphone, wrapped on the border - and has the header features on top and the dismiss bar on the bottom

const IphoneContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: '94.5%',
  height: '97.1%',
  borderRadius: 44,
  background: '#fff',
  overflow: 'hidden'
})

// For the dismiss line on the bottom of the container
// This is static, doesn't have a function

const IphoneBottom = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  bottom: 0,
  width: '100%',
  zIndex: 9000,

  // For the close bar on the bottom of the container
  // Position horizonatally centered in the parent container

  '&:after': {
    content: '',
    position: 'absolute',
    bottom: 8,
    width: 120,
    height: 2,
    background: '$white',
    borderRadius: '$pill'
  }
})

// For the container of the screen content within the iPhone
// For our purposes, this holds the Gather Wallet app, as an interactive prototype
// For that spcific code, you can see the Gather Wallet app in the components

const IphoneScreen = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  position: 'realtive',
  width: '100%',
  height: '100%',
  background: '#fff',
  paddingTop: 40,

  variants: {
    screenColor: {
      black: {
        background: '#111',
        color: '#fff'
      }
    }
  }
})

// -------------- Typescript declarations -------------- //

interface IphoneProps {
  size?: 'l0' | 'l1'
  screen?: React.ReactNode
  screenColor?: 'black'
}

// ---------- This is the end of declarations ---------- //

export const Iphone = ({ 
    size,
    screen,
    screenColor
  }:IphoneProps) => {
  
  return(

    <IphoneWrap {...{ size }}>
      <IphoneContent>
        <IphoneTop />

        <IphoneScreen {...{ screenColor }}>
          { screen }
        </IphoneScreen>

        <IphoneBottom />
      </IphoneContent>
    </IphoneWrap>
      
  )
}
