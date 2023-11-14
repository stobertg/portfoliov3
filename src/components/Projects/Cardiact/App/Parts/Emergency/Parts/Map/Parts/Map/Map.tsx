import React from 'react'
import { styled } from '@theme'
import { MainLine, SecondLine } from './Parts'

// For the master container of the map within the map screen of the emergency part of the app
// This contains the underlying map, the responder one and two lines, as well as the animation of the user to the vicitim

const MapImage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  height: '100%',
  zIndex: 0,
  overflow: 'hidden',

  // For the position of the map wihtin the master container
  // This makes the main roads be in the center of the container so the lines are easy to place

  img: {
    height: '110%',
    maxHeight: '110%',
    width: 'auto',
    transform: 'translate3d( 3px, -50px, 0 )'
  },

  // For the gradient on the bottom of the container
  // This gradient goes from 0% opacity to 100% opacity black to give another layer without using a solid color

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

// For the container of all the lines within the map container
// This contains the lines for Responder One and Responder Two

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

// ---------- This is the end of declarations ---------- //

export const MapMain = () => {
  return(

    <MapImage>
      <img src="/projects/cardiact/map.webp" alt="Cardiact map" />
      
      <MapLines>
        <MainLine />
        <SecondLine />
      </MapLines>
    </MapImage>

  )
}
