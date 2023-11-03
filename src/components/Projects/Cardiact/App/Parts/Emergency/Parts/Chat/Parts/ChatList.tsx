import React from 'react'
import { styled } from '@theme'
import { ChatBubble } from './ChatItem'
import { Heading } from '@components'

const ListWrap = styled('div', {
  position: 'relative',
  width: '100%',
})

const ListContent = styled('div', {
  position: 'relative',
  width: '100%',
  margin: '0 auto',
  padding: '12px 0',
  '> *:not(:first-child, :last-child)': { marginBottom: 8 }
})

const TimeStamp = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  marginBottom: 12,
  fontSize: 10
})

interface ListProps {
  messages: {
    person: 'sender' | 'reciever'
    image: string
    message: string
  }[]
}

export const ChatList = ({ messages }:ListProps) => {
  return(

    <ListWrap>
      <ListContent>
        <TimeStamp><Heading color="secondary" title="Today @ 10:64 PM" /></TimeStamp>

        { messages.map(( message, i ) => (

          <ChatBubble 
            key={`message-${ i }`}
            person={ message.person }
            image={ message.image }
            message={ message.message }
          />

        ))}
      </ListContent>
    </ListWrap>

  )
}
