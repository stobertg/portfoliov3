import React from 'react'
import { styled } from '@theme'
import { PageWrap } from '../../../Shared'
import { ChatList } from './Parts'

interface ChatProps {

}

export const Chat = ({}:ChatProps) => {
  return(

    <PageWrap>
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
            message: "There's one close to me - getting it now"
          },
          { 
            person: 'sender',
            image: '/projects/cardiact/ed.jpg',
            message: "I'm his son and I'm on my way. Let me know how I can help."
          },
          { 
            person: 'reciever',
            image: '/projects/cardiact/ed.jpg',
            message: "I'm here. Need an AED!"
          }
        ]}
      />
    </PageWrap>

  )
}
