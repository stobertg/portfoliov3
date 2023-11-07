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

const SwitchButton = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 44,

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

  '&:hover:before': {
    transform: 'scale( 1 )'
  },

  variants: {
    selected: {
      true: { pointerEvents: 'none' }
    }
  }
})

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

  variants: {
    static: {
      true: { transform: 'translateX( 50% )' }
    }
  }
})

interface SwitchProps {
  showStatic: any
  showEmergency: any
}

export const PresSwitch = ({ 
    showStatic, 
    showEmergency 
  }:SwitchProps) => {
  
  const [ isFeatureActive, setIsFeatureActive ] = useState( false )
  const toggleFeature = () => { setIsFeatureActive( prev => !prev ) }

  return (

    <SwitchWrap>
      <SwitchContent>
        <SwitchButton 
          onClick={() => { toggleFeature(); showEmergency() }} 
          selected={ !isFeatureActive }
        >
          <Icon size="l1" icon="heart" />
        </SwitchButton>

        <SwitchButton 
          onClick={() => { toggleFeature(); showStatic() }} 
          selected={ isFeatureActive }
        >
          <Icon size="l1" icon="user-2" />
        </SwitchButton>
      </SwitchContent>

      <SwitchDot static={ isFeatureActive } />
    </SwitchWrap>

  )
}
