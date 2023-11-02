import React from 'react'
import { styled } from '@theme'
import { EmergencyHeader, Chat } from './Parts'

const EmergencyWrap = styled('div', {

})

export const CardiactEmergency = () => {
  return(

    <EmergencyWrap>
      <EmergencyHeader 
        triggers={[
          { icon: 'map-pin', title: 'Map' },
          { icon: 'activity', title: 'Status' },
          { icon: 'message-circle', title: 'Chat' }
        ]}
        tabContent={[
          {},
          {},
          {}
        ]}
      />
      {/* <Chat /> */}
    </EmergencyWrap>

  )
}
