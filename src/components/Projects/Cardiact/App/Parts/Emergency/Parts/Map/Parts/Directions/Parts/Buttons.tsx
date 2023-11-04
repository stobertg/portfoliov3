import React from 'react'
import { styled } from '@theme'
import { Button } from '../../../../../../Shared'

// For the master conainer of the buttons on the bottom of the directions container
// These options allow the user to choose between saying they're with the victim or go back to the map

const DirButtonsWrap = styled('div', {
  position: 'relative',
  width: '100%',
  transition: '$s2',

  // Since the buttons are hidden by default, we will acomidate a subtle animation on show
  // This will animate the container in from the bottom, and reveal the content

  variants: {
    collapsed: {
      true: { transform: 'translateY( 20px )', opacity: 0 },
      false: { transform: 'translateY( 0 )', transitionDelay: '200ms', opacity: 1 }
    }
  }
})

// For the container of the buttons to be centered in the parent container
// This can contain as many buttons as needed and stying to to automate more buttons

const DirButtons = styled('div', {
  position: 'relative',
  width: '92%',
  margin: '0 auto',
  '> *:not(:last-child)': { marginBottom: 4 }
})

// -------------- Typescript declarations -------------- //

interface ButtonProps {
  collapsed: boolean
  buttons: {
    variant?: 'primary' | 'secondary'
    title: string
  }[]
}

// ---------- This is the end of declarations ---------- //

export const Buttons = ({ 
    collapsed, // Required - For the state to show if hidden or visible
    buttons // Required - For the list of buttons in the container
  }:ButtonProps) => {

  return(

    <DirButtonsWrap {...{ collapsed }}>
      <DirButtons>
        { buttons.map(( button, i ) => (
          
          <Button 
            key={`button-${ i }`}
            variant={ button.variant }
            title={ button.title }
          />

        ))}
      </DirButtons>
    </DirButtonsWrap>

  )
}
