import React from 'react'
import { styled } from '@theme'
import { EmergencyHeader, Map, Status, Chat } from './Parts'

const EmergencyWrap = styled('div', {
  position: 'relative',
  width: '100%',
  height: '100%'
})

export const CardiactEmergency = () => {
  return(

    <EmergencyWrap>
      <EmergencyHeader 
        image="/projects/cardiact/ed.jpg"
        imageAlt="Cardiact victim name"
        name="Edward York IV"
        triggers={[
          { icon: 'map-pin', title: 'Map' },
          { icon: 'activity', title: 'Status' },
          { icon: 'message-circle', title: 'Chat' }
        ]}
        tabContent={[
          { content: <Map /> },
          {},
          { content: <Chat /> }
        ]}
      />
    </EmergencyWrap>

  )
}
