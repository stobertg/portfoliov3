import React from 'react'
import { styled, keyframes } from '@theme'
import AirplaneBody from './Body';
import AirplaneBlades from './Blades'
import AirplaneWheels from './Wheels'
import SquibbleOne from './SquibbleOne'
import SquibbleTwo from './SquibbleTwo'

const Move = keyframes({
  '0%': { transform: 'translate3d( 2px, 5px ,0 ) rotate( -1deg )' },
  '25%': { transform: 'translate3d( -4px, -7px ,0 ) rotate( 1deg )' },
  '50%': { transform: 'translate3d( 2px, 5px ,0 ) rotate( -1deg )' },
  '75%': { transform: 'translate3d( -4px, -7px ,0 ) rotate( 1deg )' },
  '100%': { transform: 'translate3d( 2px, 5px ,0 ) rotate( -1deg )' },
});

const MoveUp = keyframes({
  '0%': { transform: 'translate3d( 0, 100px ,0 ) rotate( -20deg )', opacity: 0 },
  '100%': { transform: 'translate3d( 0, 0 ,0 ) rotate( 0deg )', opacity: 1 },
});

const AirplaneScene = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  minWidth: 450,
  height: 158,
  marginBottom: 75,
  animation: `${MoveUp} 1000ms ease forwards`,
  opacity: 0
});

// For the airplane graphic 

const AriplaneWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  transform: 'scale( 0.5 )',

  '@media(max-width: 638px)': {
    transform: 'scale( 0.4 )'
  }
});

const Aeroplane = styled('div', {
  position: 'relative',
  paddingTop: 100,
  animation: `${Move} 5000ms ease infinite forwards`,
  transform: 'translate3d( 2px, 10px, 0 ) rotate( -5deg )',
  transformOrigin: 'center right',
});

const AirplaneBase = styled('div', {
  position: 'relative',
});



export const ArtizenAirplane = () => {
  return(

    <AirplaneScene>
      <AriplaneWrap>
        <Aeroplane>
          <AirplaneBase>
            <AirplaneBody />
            <AirplaneWheels />
          </AirplaneBase>

          <AirplaneBlades />
          <SquibbleTwo />
        </Aeroplane>
      </AriplaneWrap>

      <SquibbleOne />
    </AirplaneScene>

  )
}
