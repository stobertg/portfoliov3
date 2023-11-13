import React from 'react'
import { ChatWrap, ChatList, TypingAnimation, ChatInput } from './Parts'

// ---------- This is the end of declarations ---------- //

export const Chat = () => {
  return(

    <ChatWrap>
      <ChatList 
        timeStamp="Today @ 10:64 PM"
        messages={[
          { 
            person: 'reciever',
            image: '/projects/cardiact/neville.webp',
            message: "I'm here. Need an AED!"
          },
          { 
            person: 'reciever',
            image: '/projects/cardiact/george_clarence.webp',
            message: "There's one close to me and I am getting it now"
          },
          { 
            person: 'sender',
            image: '/projects/cardiact/richardiii.webp',
            message: "I'm his brother and I live next door. On my way."
          },
          { 
            person: 'reciever',
            image: '/projects/cardiact/neville.webp',
            message: <TypingAnimation />
          }
        ]}
      />

      <ChatInput />   
    </ChatWrap>

  )
}
