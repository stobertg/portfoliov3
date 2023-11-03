import React from 'react'
import { styled } from '@theme'

const BubbleWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',

  variants: {
    person: {
      sender: { justifyContent: 'flex-end' },
      reciever: {}
    }
  }
})

const BubbleContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  position: 'relative',
  maxWidth: '95%',

  variants: {
    person: {
      sender: {
        flexDirection: 'row-reverse',
        '> *:not(:first-child)': { marginRight: 6 },
        '> *:last-child': { background: '#2020ff' }
      },

      reciever: {
        '> *:not(:first-child)': { marginLeft: 6 },
        '> *:last-child': { background: '#151515', border: '1px solid #262626' }
      }
    }
  }
})

const BubbleImage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 28,
  minWidth: 28,
  height: 28,
  marginTop: 4,
  borderRadius: '50%',
  overflow: 'hidden',

  img: { 
    height: '100%',
    objectFit: 'cover' 
  }
})

const BubbleText = styled('div', {
  position: 'relative',
  padding: '12px 14px',
  borderRadius: '$r1',
  fontSize: 13
})

interface BubbleProps {
  person: 'sender' | 'reciever'
  image: string
  message: string | React.ReactNode
}

export const ChatBubble = ({
    person,
    image,
    message
  }:BubbleProps) => {
  
  return(

    <BubbleWrap {...{ person }}>
      <BubbleContent {...{ person }}> 
        <BubbleImage><img src={ image } alt="Cardiact Responder" /></BubbleImage>
        <BubbleText>{ message }</BubbleText>
      </BubbleContent>
    </BubbleWrap>

  )
}
