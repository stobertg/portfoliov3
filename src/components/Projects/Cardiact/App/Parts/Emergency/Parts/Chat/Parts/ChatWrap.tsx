import React from 'react'
import { styled } from '@theme'

// For the master container of the chat screen in Emergency Mode
// This shows the message thread that could happen between responders that are helping a victim

const Chat = styled('div', {
  position: 'relative',
  width: '100%',
  height: '100%'
})

// For the container of all of the content within the master container
// This holds the messages on the top and the input field on the bottom

const ChatContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'relative',
  width: '90%',
  height: '100%',
  margin: '0 auto'
})

// -------------- Typescript declarations -------------- //

interface ChatProps {
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const ChatWrap = ({ children }:ChatProps) => {
  return(

    <Chat>
      <ChatContent>{ children }</ChatContent>
    </Chat>

  )
}
