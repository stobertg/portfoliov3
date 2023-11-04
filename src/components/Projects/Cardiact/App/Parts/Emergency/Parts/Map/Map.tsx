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

const MapImage = styled('div', {
  display: 'flex',
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'hidden',

  img: {
    height: '100%',
    maxHeight: '100%',
    width: 'auto'
  },

  '&:before': { 
    content: '',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '40%',
    background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)',
    opacity: 0.9
  },
})

interface MapProps {

}

export const Map = ({}:MapProps) => {
  const [ showConfirm, setShowConfirm ] = useState( false )
  const revealConfirm = () => setShowConfirm( !showConfirm )

  return(

    <MapWrap>
      <MapMain />
      <MapImage>
        <img src="/projects/cardiact/map.jpg" alt="Cardiact map" />
      </MapImage>

      <Directions 
        confirmButtonHidden={ false }
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
