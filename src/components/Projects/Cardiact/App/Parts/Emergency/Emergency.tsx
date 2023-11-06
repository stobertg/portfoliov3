import React from 'react'
import { styled } from '@theme'
import { EmergencyHeader, Map, Status, Chat } from './Parts'

const EmergencyWrap = styled('div', {
  position: 'relative',
  width: '100%',
  height: '100%'
})

interface EmergencyProps {
  onMapClick: React.MouseEventHandler<HTMLButtonElement>
  onStatusClick: React.MouseEventHandler<HTMLButtonElement>
  onChatClick: React.MouseEventHandler<HTMLButtonElement>
}

export const CardiactEmergency = ({ 
    onMapClick,
    onStatusClick,
    onChatClick
  }:EmergencyProps) => {

  return(

    <EmergencyWrap>
      <EmergencyHeader 
        image="/projects/cardiact/ed.jpg"
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
