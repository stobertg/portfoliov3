import React from 'react'
import { styled } from '@theme'
import { MainLine } from './Parts'

const MapImage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  height: '100%',
  zIndex: 0,
  overflow: 'hidden',

  img: {
    height: '110%',
    maxHeight: '110%',
    width: 'auto',
    transform: 'translate3d( 3px, -50px, 0 )'
  },

  '&:before': { 
    content: '',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '40%',
    background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)',
    opacity: 0.9,
    zIndex: 1
  },
})

const MapLines = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: 300
})

export const MapMain = () => {
  return(

    <MapImage>
      <img src="/projects/cardiact/map.jpg" alt="Cardiact map" />
      <MapLines><MainLine /></MapLines>
    </MapImage>

  )
}
