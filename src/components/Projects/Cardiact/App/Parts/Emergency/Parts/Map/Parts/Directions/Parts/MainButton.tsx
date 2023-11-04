import React from 'react'
import { Button } from '../../../../../../Shared'
import { styled } from '@theme'

// For the master container of the main button on the top of the container
// This button shows once the animation user is next to the vicitim - prompting them to clairfy if they are w/ victim

const ButtonWrap = styled('div', {
  position: 'relative',
  width: '100%',
  transition: '$s1',

  // Since this button is not shown by default, we need to hide it and animate it in when ready
  // We also need to keep the container for structural purposes, but remove the click events

  variants: {
    hidden: {
      true: { pointerEvents: 'none', opacity: 0 },
      false: { opacity: 1 }
    }
  }
})

// For the container of the button to sit in the center of the parent container
// This dictates the width and spacing of that button in the container

const MainButtonContent = styled('div', {
  position: 'relative',
  width: '96%',
  margin: '0 auto'
})

// -------------- Typescript declarations -------------- //

interface ButtonProps {
  hidden: boolean
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

// ---------- This is the end of declarations ---------- //

export const MainButton = ({ 
    hidden, // Requird - For the button to show and hide when needed
    onClick // Required - For the click of the button to show the confirm screen
  }:ButtonProps) => {

  return(

    <ButtonWrap {...{ hidden }}>
      <MainButtonContent>
        <Button variant="primary" title="I'm with Victim" {...{ onClick }} />
      </MainButtonContent>
    </ButtonWrap>

  )
}
