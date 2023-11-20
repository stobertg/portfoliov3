import React from 'react'
import { styled } from '@theme'

// For the master container of the design systems for the Walgreens project
// This holds the huge horizontal layout that shows the selected GUI elements of the design systems

const GuiWrap = styled('div', {
  position: 'relative',
  width: '100%',
  padding: '150px 0',
  background: '$white',
  overflow: 'scroll',
  img: { width: 'auto', height: 540 }
})

interface GuiProps {
  image: string
}

// ---------- This is the end of declarations ---------- //

export const WalgreensGui = ({ image }:GuiProps) => {
  return(

    <GuiWrap><img src={ image } alt="Walgreens Design Systems" /></GuiWrap>

  )
}
