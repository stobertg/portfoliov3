import React from 'react'
import { styled } from '@theme'

const GuiWrap = styled('div', {
  position: 'relative',
  width: '100%',
  padding: '150px 0',
  background: '$white',
  overflow: 'scroll',

  img: { 
    width: 'auto',
    height: 540 
  }
})

export const WalgreensGui = () => {
  return(

    <GuiWrap>
      <img src="/projects/wag/gui/gui.webp" />
    </GuiWrap>

  )
}
