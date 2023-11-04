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
    </ChatWrap>

  )
}
