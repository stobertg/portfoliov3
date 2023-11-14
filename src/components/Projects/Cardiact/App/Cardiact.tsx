import React from 'react'
import { styled } from '@theme'
import { CardiactEmergency, CariactStatic } from './Parts'

// For the basic master container of the entire app for CardiAct
// This holds the entire app from the Emergency Screens and the Static Screens
// The following variables are exported for so that we can change text and screens within the iPhone presentation

const AppWrap = styled('div', {
  position: 'relative',
  width: '100%'
})

// -------------- Typescript declarations -------------- //

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

// ---------- This is the end of declarations ---------- //

export const Cardiact = ({ 
    emergencyMode, //  Required - For the ability to switch and show the Emergency Mode
    staticMode, //  Required - For the ability to switch and show the Static Mode
    onMapClick, // Required - For the function to change the text to the Map screen
    onStatusClick, // Required - For the function to change the text to the Status screen
    onChatClick, // Required - For the function to change the text to the Chat screen
    onVitalsClick, // Required - For the function to change the text to the Vitals screen
    onContactsClick, // Required - For the function to change the text to the Contacts screen
    onProfileClick, // Required - For the function to change the text to the Profile screen
    onHelpClick // Required - For the function to change the text to the Help screen
  }:AppProps) => {

  return(

    <AppWrap>
      { emergencyMode && ( <CardiactEmergency {...{ onMapClick, onStatusClick, onChatClick }} /> )}
      { staticMode && ( <CariactStatic {...{ onVitalsClick, onContactsClick, onProfileClick, onHelpClick }} /> )}
    </AppWrap>

  )
}
