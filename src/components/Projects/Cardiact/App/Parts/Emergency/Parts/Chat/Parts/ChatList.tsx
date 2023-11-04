import React from 'react'
import { styled } from '@theme'
import { ChatBubble } from './ChatItem'
import { Heading } from '@components'

// For the master container of the message thread within the chat screen
// This is used a map function to add as many messages as needed in the thread

const ListWrap = styled('div', {
  position: 'relative',
  width: '100%',
})

// For the container of all of the content within the master container
// This sets the top and bottom spacing, as well as the spacing between the time stamps and the thread

const ListContent = styled('div', {
  position: 'relative',
  width: '100%',
  margin: '0 auto',
  padding: '12px 0',
  '> *:not(:first-child, :last-child)': { marginBottom: 8 }
})

// For the time stamp on the top of the container
// This holds the time when the current conversation started 

const TimeStamp = styled('div', {
  position: 'relative',
  width: '100%',
  marginBottom: 12,
  fontSize: 10
})

// -------------- Typescript declarations -------------- //

interface ListProps {
  timeStamp: string
  messages: {
    person: 'sender' | 'reciever'
    image: string
    message: string | React.ReactNode
  }[]
}

// ---------- This is the end of declarations ---------- //

export const ChatList = ({ 
    timeStamp, // Required - For the start time of the current message thread
    messages // Required - For the messages in the thread
  }:ListProps) => {

  return(

    <ListWrap>
      <ListContent>
        <TimeStamp>
          <Heading align="center" color="secondary" title={ timeStamp} />
        </TimeStamp>

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
