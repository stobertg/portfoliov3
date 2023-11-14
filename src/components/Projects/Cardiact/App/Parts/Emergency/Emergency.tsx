import React from 'react'
import { styled } from '@theme'
import { EmergencyHeader, Map, Status, Chat } from './Parts'

// For the master container of the entire emergency part of CardiAct app
// This contains the map, status, and chat screen, as well as the victim status on the top of the app

const EmergencyWrap = styled('div', {
  position: 'relative',
  width: '100%',
  height: '100%'
})

// -------------- Typescript declarations -------------- //

interface EmergencyProps {
  onMapClick: React.MouseEventHandler<HTMLButtonElement>
  onStatusClick: React.MouseEventHandler<HTMLButtonElement>
  onChatClick: React.MouseEventHandler<HTMLButtonElement>
}

// ---------- This is the end of declarations ---------- //

export const CardiactEmergency = ({ 
    onMapClick, // Required - For the function to change the text to the Map screen
    onStatusClick, // Required - For the function to change the text to the Status screen
    onChatClick // Required - For the function to change the text to the Chat screen
  }:EmergencyProps) => {

  return(

    <EmergencyWrap>
      <EmergencyHeader 
        image="/projects/cardiact/ed.webp"
        imageAlt="Cardiact victim name"
        name="Edward York IV"
        triggers={[
          { icon: 'map-pin', title: 'Map', onClick: onMapClick },
          { icon: 'activity', title: 'Status', onClick: onStatusClick },
          { icon: 'message-circle', title: 'Chat', onClick: onChatClick }
        ]}
        tabContent={[
          { content: <Map /> },
          { content: <Status /> },
          { content: <Chat /> }
        ]}
      />
    </EmergencyWrap>

  )
}
