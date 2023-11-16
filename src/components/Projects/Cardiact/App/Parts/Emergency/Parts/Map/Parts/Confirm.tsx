import React from 'react'
import { styled } from '@theme'
import { Heading, Icon } from '@components'
import { Button } from '../../../../Shared'

// For the master container of the Confirm modal on the bottom the of Iphone screen
// This holds the two buttons asking the user confirm they are with the victim with our without an AED

const ConfirmWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: 240,
  backdropFilter: 'blur( 10px )',
  background: 'rgba( 0,0,0, 0.3 )',
  borderRadius: '$r3 $r3 40px 40px',
  transform: 'scale( 0.95 )',
  transition: '$s1 ease',
  pointerEvents: 'none',
  opacity: 0,
  overflow: 'hidden',
  zIndex: 10,

  // For the red gradient that sits on top of the blur black background
  // This is used to give more highlight to the modal

  '&:before': { 
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient( 140deg, rgba( 0,0,0, 0.3 ) 20%, rgba( 255,0,0, 0.5 ) 100%)',
    borderRadius: '$r3 $r3 40px 40px'
  },

  // By default, the confirm button is hidden and we set the css to be hidden
  // This variant is so the modal will apprear with a subtle animation scaling into the screen

  variants: {
    showConfirm: {
      true: {
        transform: 'scale( 1 )',
        pointerEvents: 'auto',
        opacity: 1
      }
    }
  }
})

// For the container of all of the content within the master container
// This holds the title on the top and the buttons on the bottom of the container

const ConfirmContent = styled('div', {
  position: 'relative',
  width: '85%',
  margin: '0 auto',
  '> *:not(:last-child)': { marginBottom: 12 }
})

// For the container of the buttons on the bottom of the container
// This is used to set the spacing in between the buttons

const ConfirmButtons = styled('div', {
  position: 'relative',
  '> *:not(:last-child)': { marginBottom: 8 }
})

// For the container of the close button on the top right of the modal
// This holds the button to close out the modal

const CloseButton = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 10,
  right: 10,
  width: 32,
  height: 32,
  borderRadius: '50%',
  transition: '$s1',
  '&:hover': { background: 'rgba( 255, 255, 255, 0.1 )' }
})

// -------------- Typescript declarations -------------- //

interface ConfirmProps {
  confirm: boolean
  closeConfirm: React.MouseEventHandler<HTMLButtonElement>
  buttons: {
    variant?: 'primary' | 'secondary'
    title: string
  }[]
}

// ---------- This is the end of declarations ---------- //

export const Confirm = ({ 
    confirm,
    closeConfirm,
    buttons
  }:ConfirmProps) => {

  return(

    <ConfirmWrap showConfirm={ confirm }>
      <ConfirmContent>
        <Heading align="center" size="l0" title="Are you with the victim?" />
        <ConfirmButtons>
          { buttons.map(( button, i ) => (

            <Button 
              key={`button-${ i }`}
              variant={ button.variant }
              title={ button.title }
            />

          ))}
        </ConfirmButtons>
      </ConfirmContent>

      <CloseButton onClick={ closeConfirm }>
        <Icon size="l0" icon="x" />
      </CloseButton>
    </ConfirmWrap>

  )
}
