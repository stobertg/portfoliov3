import React from 'react'
import { styled } from '@theme'
import { PageWrap } from '../../../Shared'
import { ChatList, TypingAnimation, ChatInput } from './Parts'

const ChatWrap = styled('div', {
  position: 'relative',
  width: '100%',
  height: '100%'
})

const ChatContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'relative',
  width: '90%',
  height: '100%',
  margin: '0 auto'
})

interface ChatProps {

}

export const Chat = ({}:ChatProps) => {
  return(

    <ChatWrap>
      <ChatContent>
        <ChatList 
          messages={[
            { 
              person: 'reciever',
              image: '/projects/cardiact/ed.jpg',
              message: "I'm here. Need an AED!"
            },
            { 
              person: 'reciever',
              image: '/projects/cardiact/ed.jpg',
              message: "There's one close to me and I am getting it now"
            },
            { 
              person: 'sender',
              image: '/projects/cardiact/ed.jpg',
              message: "I'm his son and I'm on my way. Let me know how I can help."
            },
            { 
              person: 'reciever',
              image: '/projects/cardiact/ed.jpg',
              message: <TypingAnimation />
            }
          ]}
        />

        <ChatInput />   
      </ChatContent>
    </ChatWrap>

  )
}
