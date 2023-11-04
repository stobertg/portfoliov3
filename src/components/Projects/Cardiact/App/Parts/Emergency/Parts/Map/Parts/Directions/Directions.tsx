import React, { useState} from 'react'
import { styled } from '@theme'
import { MainButton, DirectionHeader, DirectionList, Buttons } from './Parts'

// For the master container of the directions component
// This holds all of the buttons and directions within the container on the bottom of the map screen

const DirWrap = styled('div', {
  position: 'absolute',
  width: '100%',
  paddingBottom: 32,
  background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)',
  borderRadius: '0 0 48px 48px',
  overflow: 'hidden',
  transition: '$s2',
  zIndex: 10,
  '> *:not(:last-child)': { marginBottom: 8 },

  // Sinced the directions are hidden by default, we need to set as hidden
  // And then once revealed, provide an animation to show the content

  variants: { 
    collapsed: {
      true: { transform: 'translateY( calc( 100% - 152px ) )' },
      false: { transform: 'translateY( 0 )' }
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

  // Here we need to play a little trickery to get the height to animate
  // For this we need to use maxHeight to animate

  variants: {
    collapsed: {
      true: { maxHeight: '82px', transitionDelay: '220ms' },
      false: { maxHeight: '500px' }
    }
  }
})

// -------------- Typescript declarations -------------- //

interface DirectionProps {
  address: string
  location: string
  distance: string
  confirmButtonHidden: boolean
  confirmButtonClick: React.MouseEventHandler<HTMLButtonElement>
  showConfirm: React.MouseEventHandler<HTMLButtonElement>
  directions: {
    icon: string
    title: string
    distance: string
  }[]
}

// ---------- This is the end of declarations ---------- //

export const Directions = ({ 
    address, // Required - For the address of the Victim
    location, // Required - For the location of the victim
    distance, // Required - For how far away the victim is from the user
    directions, // Required - For step-by-step directions to get to the vicitim
    confirmButtonHidden, // Required - For the function to reveal the confirm modal
    confirmButtonClick, // Required - To be able to close the confirm modal
    showConfirm
  }:DirectionProps) => {
  
  const [ collapsed, setCollapsed ] = useState( true )
  const expandDirections = () => setCollapsed( !collapsed )

  return(

    <DirWrap collapsed={ collapsed }>
      { collapsed && ( 
        <MainButton 
          hidden={ confirmButtonHidden } 
          onClick={ confirmButtonClick } 
        /> 
      )}

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
          { variant: 'primary', title: "I'm with victim", onClick: showConfirm },
          { variant: 'secondary', title: 'Back to map', onClick: expandDirections }
        ]}
      />
    </DirWrap>

  )
} 
