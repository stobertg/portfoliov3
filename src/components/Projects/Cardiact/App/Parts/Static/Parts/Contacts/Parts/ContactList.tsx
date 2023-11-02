import React from 'react'
import { styled } from '@theme'
import { ContactCard } from './ContactCard'

const ListWrap = styled('div', {
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginBottom: 8 }
})

interface ListProps {
  contacts: {
    image: string
    imageAlt: string
    relation: string
    name: string
  }[]
}

export const ContactList = ({ contacts }:ListProps) => {
  return(

    <ListWrap>
      { contacts.map(( contact, i ) => (
        
        <ContactCard
          image={ contact.image }
          imageAlt={ contact.imageAlt }
          relation={ contact.relation } 
          name={ contact.name }
        />

      ))} 
    </ListWrap>

  )
}
