import React from 'react'
import { styled } from '@theme'
import { Directions } from './Parts'

const MapWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
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
  }
})

interface MapProps {

}

export const Map = () => {
  return(

    <MapWrap>
      <MapImage>
        <img src="/projects/cardiact/map.jpg" alt="Cardiact map" />
      </MapImage>

      <Directions />
    </MapWrap>

  )
}
