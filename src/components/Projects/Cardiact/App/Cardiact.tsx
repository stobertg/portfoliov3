import React from 'react'
import { styled } from '@theme'
import { CardiactEmergency, CariactStatic } from './Parts'

const AppWrap = styled('div', {
  position: 'relative',
  width: '100%'
})

interface AppProps {
  emergencyMode: boolean
  staticMode: boolean,
  onMapClick: React.MouseEventHandler<HTMLButtonElement>
  onStatusClick: React.MouseEventHandler<HTMLButtonElement>
  onChatClick: React.MouseEventHandler<HTMLButtonElement>
  onVitalsClick: React.MouseEventHandler<HTMLButtonElement>
  onContactsClick: React.MouseEventHandler<HTMLButtonElement>
  onProfileClick: React.MouseEventHandler<HTMLButtonElement>
  onHelpClick: React.MouseEventHandler<HTMLButtonElement>
}

export const Cardiact = ({ 
    emergencyMode, 
    staticMode,
    onMapClick,
    onStatusClick,
    onChatClick,
    onVitalsClick,
    onContactsClick,
    onProfileClick,
    onHelpClick
  }:AppProps) => {

  return(

    <AppWrap>
      { emergencyMode && ( <CardiactEmergency {...{ onMapClick, onStatusClick, onChatClick }} /> )}
      { staticMode && ( <CariactStatic {...{ onVitalsClick, onContactsClick, onProfileClick, onHelpClick }} /> )}
    </AppWrap>

  )
}
