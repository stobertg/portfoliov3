import React from 'react'
import { styled } from '@theme'

// For the master container of a text message within the Chat page in Emergency mode
// This is created to be reused within a list, that shows a text thread from multiple people

const BubbleWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',

  // Here we start our variants for either a sender or reciever
  // By default styling, it favors the reciever, so here we inverse the layout for the sender

  variants: {
    person: {
      sender: { justifyContent: 'flex-end' },
      reciever: {}
    }
  }
})

// For the container of all of the content within the master container
// This holds the thumbnail headshot on the left and the text bubble on the right

const BubbleContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  position: 'relative',
  maxWidth: '95%',

  // Here we account for the color of the text bubble and the spacing between the image and text
  // For Senders, we have an inverse layout that needs to has spacing on the right of the text bubble

  variants: {
    person: {
      sender: {
        flexDirection: 'row-reverse',
        '> *:not(:first-child)': { marginRight: 6 },
        '> *:last-child': { background: '#2020ff' }
      },

      // For the reciever, we target spacing for the left side of the text bubble
      // We also set the color to be a subtle gray that is traditional to other messaging apps

      reciever: {
        '> *:not(:first-child)': { marginLeft: 6 },
        '> *:last-child': { background: '#151515', border: '1px solid #262626' }
      }
    }
  }
})

// For the container of the thumbnail headshot image on the left of the container
// This holds the headshot image in the center of the container to act as a backgound-cover

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

  // For the sizing of the image within the container

  img: { 
    height: '100%',
    objectFit: 'cover' 
  }
})

// For the master container of the text message on the right of the container
// This holds the text of the person, as well as sets the spacing and sizing around it - color declared before

const BubbleText = styled('div', {
  position: 'relative',
  padding: '12px 14px',
  borderRadius: '$r1',
  fontSize: 13
})

// -------------- Typescript declarations -------------- //

interface BubbleProps {
  person: 'sender' | 'reciever'
  image: string
  message: string | React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const ChatBubble = ({
    person, // Required - For the 'sender' or a 'reciever' styling
    image, // Required - For the thumbnail image of the person texting 
    message // Required - For the message of the text
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
