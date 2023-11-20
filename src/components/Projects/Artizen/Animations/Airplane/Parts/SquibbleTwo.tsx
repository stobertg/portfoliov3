import React from 'react'
import { styled, keyframes } from '@theme'

const DashTop = keyframes({
  '0%': { strokeDashoffset: 169, transform: 'rotate( -5deg )' },
  '50%': { strokeDashoffset: 0, transform: 'rotate( 5deg )' },
  '100%': { strokeDashoffset: -169, transform: 'rotate( -5deg )' },
});

const DashBottom = keyframes({
  '0%': { strokeDashoffset: -169, transform: 'rotate( -5deg )' },
  '50%': { strokeDashoffset: 0, transform: 'rotate( 5deg )' },
  '100%': { strokeDashoffset: 169, transform: 'rotate( -5deg )' },
});

const SquibbleWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between !important',
  alignItems: 'center',
  position: 'absolute',
  top: 50,
  right: 0,
  height: 220,
  opacity: 0.3
})

const SquibbleTop = styled('div', {
  position: 'relative',
  width: 100,
  height: 40,

  '> div': {
    width: 80,

    'svg': {
      animation: `${DashTop} 500ms ease infinite forwards`
    },

    '&:first-child': {
      top: 0,
      left: 0
    },

    '&:last-child': {
      bottom: 0,
      right: 0,
      
      'svg': {
        animationDelay: '200ms',
      }
    }
  }
})

const SquibbleBottom = styled('div', {
  position: 'relative',
  width: 90,
  height: 45,

  '> div': {
    width: 60,

    'svg': {
      animation: `${DashBottom} 500ms ease infinite forwards`
    },

    '&:first-child':{
      top: 0,
      left: 0
    },

    '&:last-child':{
      bottom: 0,
      right: 0,
      
      'svg': {
        animationDelay: '200ms',
      }
    }
  }
})

const Squibble = styled('div', {
  position: 'absolute',

  'svg': {
    fill: 'none',
    stroke: '$moon',
    strokeLinecap: 'round',
    strokeWidth: 6,
    strokeDasharray: 169,
    
  }
})

export const SquibbleTwo = () => {
  return(

    <SquibbleWrap>
      <SquibbleTop>
        <Squibble> 
          <svg viewBox="0 0 159.8 57">
            <path d="M2.4,53.1c0,0,58.4-36.1,87.9-44.8s68.6,0,68.6,0"/>
          </svg>
        </Squibble>

        <Squibble>
          <svg viewBox="0 0 179.5 50.5">
            <path d="M2.5,46.8c0,0,38.8-26.1,88-34.6s60-11.9,87.2,0"/>
          </svg>
        </Squibble>
      </SquibbleTop>

      <SquibbleBottom>
        <Squibble>
          <svg viewBox="0 0 108.4 63.8">
            <path d="M1.1,59.4c0,0,74.8-19.3,103.7-56.7"/>
          </svg>
        </Squibble>

        <Squibble>
          <svg viewBox="0 0 96.2 78.4">
            <path d="M2,74.3c0,0,73.1-36,90.1-72.4"/>
          </svg>
        </Squibble>
      </SquibbleBottom>
    </SquibbleWrap>

  )  
}
