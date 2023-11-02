import React from 'react'
import { styled } from '@theme'

const BubbleWrap = styled('div', {

})

const BubbleContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative'
})

const BubbleImage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 40,
  height: 40,
  borderRadius: '50%',
  overflow: 'hidden',

  img: { 
    height: '100%',
    objectFit: 'cover' 
  }
})

const BubbleText = styled('div', {
  position: 'relative',
  fontSize: 14
})

interface BubbleProps {

}

export const ChatBubble = ({}:BubbleProps) => {
  return(

    <BubbleWrap>
      <BubbleContent> 
        <BubbleImage><img src="/projects/cardiact/ed.jpg" alt="Cardiact" /></BubbleImage>
        <BubbleText>I'm here. Need an AED!</BubbleText>
      </BubbleContent>
    </BubbleWrap>

  )
}
