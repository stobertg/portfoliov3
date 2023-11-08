import React from 'react'
import { styled } from '@theme'
import { Heading, Icon } from '@components'
import { Card } from '../../../../Shared'

// For the master container of the contact cards within the contact page of the Static mode
// This contains the info of the contact, as well as the option to message or call them

const ContactWrap = styled('div', {
  position: 'relative',
  width: '100%'
})

// For the container of the content on the top of the container
// This holds the image on the left and the name and relation on the right of the container

const ContactInfo = styled('div', {
  position: 'relative',
  width: '100%',
  padding: '12px 0',

  // For the container of the image on the left and the text on the right
  // This is so the content can be centered horizontally within the master container

  figure: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    width: 'calc( 100% - 24px )',
    margin: '0 auto',
    '> *:not(:last-child)': { marginRight: 12 }
  },

  // For the container of the text to the right of the image
  // This holds the relationship on the top and the name below that

  figcaption: {
    position: 'relative',
    '> *:not(:last-child)': { marginBottom: 2 },
    '> *:first-child': { fontSize: 12 }
  }
})

// For the container of the headshot image on the left of the container
// This positions the image in the center of the container, giving outlined styling

const CardImage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 44,
  height: 44,
  borderRadius: '$r0',
  overflow: 'hidden',

  // Here we set the image to be in the center of the container
  // This acts like the object fit cover css property
  
  img: {  
    position: 'absolute',
    height: '100%',
    width: 'auto'
  }
})

// For the master container of the button on the bottom of the container, below the contact's info
// This allows the user to be able to call or message an emergency contact

const ContactControls = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  borderTop: '1px solid $borderDeco',
  '> *:not(:last-child)': { borderRight: '1px solid $borderDeco' }
})

// For the styling of the indivdual buttons within the container
// These are for the buttons to call of message the contact, provided a hover effect for affordance

const ControlButton = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '50%',
  padding: '12px 0',
  fontSize: 12,
  transition: '$s1',
  '> *:not(:last-child)': { marginRight: 8 },
  '&:hover': { background: '$border' }
})  

// -------------- Typescript declarations -------------- //

interface ContactProps {
  image: string
  imageAlt: string
  relation: string
  name: string
}

// ---------- This is the end of declarations ---------- //

export const ContactCard = ({  
    image, // Required - For the headshot image of the contact
    imageAlt, // Required - For the description of the image
    relation, // Required - For the relation to the user (i.e. Son, Brother, Wife, ect)
    name // Required - For the name of the emergency contact
  }:ContactProps) => {
  
  return(

      <Card removeSpacing>
        <ContactWrap>
          <ContactInfo>
            <figure>
              <CardImage><img src={ image } alt={ imageAlt } /></CardImage>

              <figcaption>
                <Heading color="secondary" title={ relation } />
                <Heading heavy title={ name } />
              </figcaption>
            </figure>
          </ContactInfo>

          <ContactControls>
            <ControlButton>
              <Icon size="l0" icon="message-circle" />
              <Heading bold title="Message" />
            </ControlButton>

            <ControlButton>
              <Icon size="l0" icon="phone" />
              <Heading bold title="Call" />
            </ControlButton>
          </ContactControls>
        </ContactWrap>
      </Card>

  )
}
