import React, { useState } from 'react'
import { styled } from '@theme'
import { Directions, Confirm } from './Parts'

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
  return(

    <MapWrap>
      <MapImage>
        <img src="/projects/cardiact/map.jpg" alt="Cardiact map" />
      </MapImage>

      <Directions />
      <Confirm confirm={ false } />
    </MapWrap>

  )
}
