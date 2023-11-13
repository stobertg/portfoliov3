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
  minWidth: 360,
  maxWidth: '360px !important',
  height: 724,
  padding: 10,
  background: '$black',
  color: '$black',
  borderRadius: 56,
  boxShadow: '0 5px 15px rgba( 0,0,0, 0.8 )',
  zIndex: 1,

  // Here we add different size the Iphone can be
  // It still maintains the correct aspect ratio

  variants: {
    size: {
      l0: {
        width: 310,
        minWidth: 310,
        maxWidth: '310px !important',
        height: 625,
        borderRadius: 50
      }
    },

    // For Darkmode, we change the color of the text within the header to be white

    darkMode: {
      true: { color: '$white' }
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
  width: '100%',
  height: '100%',
  borderRadius: 40,
  overflow: 'hidden',
  zIndex: 11
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

  // Here we provide support for the Iphone to be Dark Mode
  // This will change the background to black and the color to white

  variants: {
    darkMode: {
      true: {
        background: '#111',
        color: '#fff'
      }
    }
  }
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
    background: '$black',
    borderRadius: '$pill'
  },

  // For Darkmode, we change the background of the dismiss bar to white

  variants: { 
    darkMode: {
      true: { '&:after': { background: '$white' }}
    }
  }
})

const IphoneTransition = styled('div', {

})

// -------------- Typescript declarations -------------- //

interface IphoneProps {
  size?: 'l0'
  screen?: React.ReactNode
  darkMode?: boolean
}

// ---------- This is the end of declarations ---------- //

export const Iphone = ({ 
    size, // Optional - Supporting a smaller Iphone
    screen, // Required - For the content within the Iphone
    darkMode // Optional - Support Dark mode for the Iphone
  }:IphoneProps) => {
  
  return(

    <IphoneWrap {...{ size, darkMode }}>
      <IphoneContent>
        <IphoneTop />

        <IphoneScreen {...{ darkMode }}>
          { screen }
        </IphoneScreen>

        <IphoneBottom {...{ darkMode }} />
      </IphoneContent>
    </IphoneWrap>
      
  )
}
