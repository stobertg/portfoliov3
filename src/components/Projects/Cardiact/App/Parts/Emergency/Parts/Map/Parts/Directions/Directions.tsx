import React, { useState} from 'react'
import { styled } from '@theme'
import { Button } from '../../../../../Shared'
import { MainButton, DirectionHeader, DirectionList, Buttons } from './Parts'

// For the master container of the directions component
// This holds all of the buttons and directions within the container on the bottom of the map screen

const DirWrap = styled('div', {
  position: 'absolute',
  width: '100%',
  paddingBottom: 32,
  background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)',
  transition: '$s2',
  zIndex: 10,
  '> *:not(:last-child)': { marginBottom: 8 },

  variants: { 
    collapsed: {
      true: { transform: 'translateY( calc( 100% - 152px ) )' }
    }
  }
})

// For the master container of the main direction content
// This comes in two parts with the snapshot address, and then the step-by-step directions below

const DirContent = styled('div', {
  position: 'relative',
  width: '96%',
  margin: '0 auto',
  borderRadius: '$r2',
  background: 'rgba( 0,0,0,0.3 )',
  backdropFilter: 'blur( 10px )',
  border: '1px solid #212121',
  overflow: 'hidden',
  transition: 'max-height $s1 ease-in-out',

  variants: {
    collapsed: {
      true: { maxHeight: '82px' },
      false: { maxHeight: '500px' }
    }
  }
})

// -------------- Typescript declarations -------------- //

interface DirectionProps {
  address: string
  location: string
  distance: string
  directions: {
    icon: string
    title: string
    distance: string
  }[]
}

// ---------- This is the end of declarations ---------- //

export const Directions = ({ 
    address,
    location,
    distance,
    directions
  }:DirectionProps) => {
  
  const [ collapsed, setCollapsed ] = useState( true )
  const expandDirections = () => setCollapsed( !collapsed )

  return(

    <DirWrap collapsed={ collapsed }>
      { collapsed && ( <MainButton hidden={ true } onClick={ () => alert('hello') } /> )}

      <DirContent 
        collapsed={ collapsed } 
        onClick={ expandDirections }
      >
        <DirectionHeader {...{ address, location, distance }} />
        <DirectionList {...{ directions, collapsed }} />
      </DirContent>
      
      <Buttons 
        collapsed={ collapsed }
        buttons={[
          { variant: 'primary', title: "I'm with victim" },
          { variant: 'secondary', title: 'Back to map' }
        ]}
      />
    </DirWrap>

  )
} 
