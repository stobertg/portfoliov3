import React, { useState } from 'react'
import { styled } from '@theme'
import { MapMain, Directions, Confirm } from './Parts'

const MapWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  position: 'relative',
  width: '100%',
  height: '100%'
})

// ---------- This is the end of declarations ---------- //

export const Map = () => {
  const [ showConfirm, setShowConfirm ] = useState( false )
  const revealConfirm = () => setShowConfirm( !showConfirm )

  return(

    <MapWrap>
      <MapMain />

      <Directions 
        confirmButtonHidden={ true }
        confirmButtonClick={ revealConfirm }
        showConfirm={ revealConfirm }
        address="1483 Westminster"
        location="London, England"
        distance="4 min away"
        directions={[
          { 
            icon: 'corner-up-left',
            title: 'Left at East Liberty St.',
            distance: '0.3 miles away'
          },
          { 
            icon: 'corner-up-left',
            title: 'Left at Wheeler St.',
            distance: '0.4 miles away'
          },
          { 
            icon: 'heart',
            title: 'Victim on the left',
            distance: '0.5 miles away'
          }
        ]}
      />

      <Confirm 
        confirm={ showConfirm } 
        closeConfirm={ revealConfirm }
        buttons={[
          { variant: 'primary', title: "I'm here with AED" },
          { variant: 'primary', title: "I'm here without AED" }
        ]}
      />
    </MapWrap>

  )
}
