import React from 'react'
import { styled } from '@theme'
import { Button } from '../../../../../../Shared'

const DirButtonsWrap = styled('div', {
  position: 'relative',
  width: '100%',
  transition: '$s2',

  variants: {
    collapsed: {
      true: { transform: 'translateY( 0 )', opacity: 0 },
      false: { transform: 'translateY( 20px )', opacity: 1 }
    }
  }
})

const DirButtons = styled('div', {
  position: 'relative',
  width: '92%',
  margin: '0 auto',
  '> *:not(:last-child)': { marginBottom: 4 }
})

// -------------- Typescript declarations -------------- //

interface ButtonProps {
  collapsed: boolean
}

// ---------- This is the end of declarations ---------- //

export const Buttons = ({ collapsed }:ButtonProps) => {
  return(

    <DirButtonsWrap {...{ collapsed }}>
      <DirButtons>
        <Button variant="primary" title="I'm with Victim" />
        <Button variant="secondary" title="Back to map" />
      </DirButtons>
    </DirButtonsWrap>

  )
}
