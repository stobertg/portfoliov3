import React from 'react'
import { styled } from '@theme'
import { ContactCard } from './ContactCard'

// For the master container of the emergency contact list
// This holds all of te contact the user has set up that will be notified in case of an emergency

const ListWrap = styled('div', {
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginBottom: 8 }
})

// -------------- Typescript declarations -------------- //

interface ListProps {
  contacts: {
    image: string
    imageAlt: string
    relation: string
    name: string
  }[]
}

// ---------- This is the end of declarations ---------- //

export const ContactList = ({ contacts }:ListProps) => {
  return(

    <ListWrap>
      { contacts.map(( contact, i ) => (
        
        <ContactCard
          key={`contact-${ i }`}
          image={ contact.image }
          imageAlt={ contact.imageAlt }
          relation={ contact.relation } 
          name={ contact.name }
        />

      ))} 
    </ListWrap>

  )
}
