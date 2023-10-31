import React from 'react'
import { styled } from '@theme'
import { Heading, Icon } from '@components'

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
  background: '#000',
  color: '$black !important',
  borderRadius: 56,
  boxShadow: '0 2px 20px rgba( 0,0,0, 0.2 )',

  variants: {
    size: {
      l0: {},
      l1: {
        width: 300,
        maxWidth: '300px !important',
        height: 603
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

// For the container of the iPhone default within the header
// This holds the time on the left, the center animated bar, and the wireless connections, battery, ect on the right

const IphoneHeader = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alginItems: 'center',
  position: 'absolute',
  top: 0,
  width: '100%',
  height: 'calc( 28px + 16px )',
  padding: '8px 0',
  '> *:first-child': { fontSize: '14px' },
  '> *:last-child': { fontSize: '13px' },
  zIndex: 10
})

// For the container of the camera section in the center of the container
// This is the black, pill-like comp that is new with the iPhone 14 Max

const IphoneCamera = styled('div', {
  position: 'relative',
  width: 88,
  minWidth: 90,
  height: 28,
  background: '#000',
  borderRadius: '$pill'
})

// For the container of the content for the items on the side of the iphone header
// These are to the left and the right of the camera in the center of the container

const IphoneHeaderSide = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: 'calc( 50% - 14px )',
  height: '100%',
  '> *:not(:last-child)': { marginRight: 6 }
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

  // For the close bar on the bottom of the container
  // Position horizonatally centered in the parent container

  '&:after': {
    content: '',
    position: 'absolute',
    bottom: 4,
    width: 120,
    height: 4,
    background: '#000',
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
  paddingTop: 40
})

// -------------- Typescript declarations -------------- //

interface IphoneProps {
  size?: 'l0' | 'l1'
  screen?: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Iphone = ({ 
    size,
    screen
  }:IphoneProps) => {
  
  return(

    <IphoneWrap {...{ size }}>
      <IphoneContent>
        <IphoneHeader>
          <IphoneHeaderSide><Heading bold title="05:29" /></IphoneHeaderSide>
          <IphoneCamera />
          <IphoneHeaderSide>
            <Icon size="l0" icon="wifi" />
            <Heading bold title="5G" />
            <Icon size="l1" icon="battery" />
          </IphoneHeaderSide>
        </IphoneHeader>

        <IphoneScreen>
          { screen }
        </IphoneScreen>

        <IphoneBottom />
      </IphoneContent>
    </IphoneWrap>
      
  )
}
