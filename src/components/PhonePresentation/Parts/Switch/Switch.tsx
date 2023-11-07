import React, { useState } from 'react'
import { styled } from '@theme'
import { Icon } from '@components'

// For the master container of the switch within the phone presentation
// This switches the feature app, if there is more than one (i.e. User version & Admin Version )

const SwitchWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 100,
  height: 56,
  background: '#750c0d',
  border: '1px solid #720000',
  borderRadius: '$pill'
})

// For the container of the icons within the center of the master container
// These are represented by icons, where clicking one will change the app to the respective screens

const SwitchContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: '100%',
  zIndex: 1
})

// For the container of the individual buttons within the container
// Clicking these buttons will change the iPhone screen to their respective parts of the app

const SwitchButton = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 44,

  // For the hover effect of the buttons - where the circle scales up and fades in behind the icon
  // This is set so at first it is hidden and adds a google-mui-like iteraction where the circle scales in

  '&:before': { 
    content: '',
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: '50%',
    background: 'rgba( 255,255,255, 0.05 )',
    transition: '$s1',
    transform: 'scale( 0 )'
  },

  // On hover, we scale in the background of the button
  // This give the afforance that the button is clickable

  '&:hover:before': {
    transform: 'scale( 1 )'
  },

  // Here we set the button to not be clickable if selected

  variants: {
    selected: {
      true: { pointerEvents: 'none' }
    }
  }
})

// For the container and interaction of the bg red dot that changes based on the button click
// This is a traditional switch-like dot that animates to the button clicked to show it has been selected

const SwitchDot = styled('div', {
  position: 'absolute',
  width: 44,
  height: 44,
  padding: 4,
  borderRadius: '50%',
  background: 'red',
  transform: 'translateX( -50% )',
  transition: '$s1',
  zIndex: 0,

  // Here we set the location of the dot once the right button is clicked
  // By default, this starts on the left as the first button is on by default

  variants: {
    static: {
      true: { transform: 'translateX( 50% )' }
    }
  }
})

// -------------- Typescript declarations -------------- //

interface SwitchProps {
  showLeftSwitchScreen: any
  showRightSwitchScreen: any
  leftSwitchIcon: string
  rightSwitchIcon: string
}

// ---------- This is the end of declarations ---------- //

export const PresSwitch = ({ 
    showLeftSwitchScreen, // Required - For the function to show the screens accociated with the left icon
    showRightSwitchScreen, // Required - For the function to show the screens accociated with the right icon
    leftSwitchIcon, // Required - For the icon on the left
    rightSwitchIcon // Required - For the icon on the right
  }:SwitchProps) => {
  
  const [ isFeatureActive, setIsFeatureActive ] = useState( false )
  const toggleFeature = () => { setIsFeatureActive( prev => !prev ) }

  return (

    <SwitchWrap>
      <SwitchContent>
        <SwitchButton 
          onClick={() => { toggleFeature(); showLeftSwitchScreen() }} 
          selected={ !isFeatureActive }
        >
          <Icon size="l1" icon={ leftSwitchIcon } />
        </SwitchButton>

        <SwitchButton 
          onClick={() => { toggleFeature(); showRightSwitchScreen() }} 
          selected={ isFeatureActive }
        >
          <Icon size="l1" icon={ rightSwitchIcon } />
        </SwitchButton>
      </SwitchContent>

      <SwitchDot static={ isFeatureActive } />
    </SwitchWrap>

  )
}
