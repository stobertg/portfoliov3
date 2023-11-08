import React from 'react'
import { PageWrap, Button, Callout } from '../../../Shared'
import { ContactList } from './Parts'

// ---------- This is the end of declarations ---------- //

export const Contacts = () => {
  return(

    <PageWrap>
      <Callout 
        icon="users"
        title="These contacts will be notified in the event of an emergency."
      />

      <ContactList 
        contacts={[
          { 
            image: '/projects/cardiact/ed.jpg',
            imageAlt: 'Cardiact',
            relation: 'Wife (Married)',
            name: 'Elizabeth Woodville'
          },
          { 
            image: '/projects/cardiact/ed.jpg',
            imageAlt: 'Cardiact',
            relation: 'Brother & neighbor',
            name: 'Richard York III'
          },
          { 
            image: '/projects/cardiact/ed.jpg',
            imageAlt: 'Cardiact',
            relation: 'Son',
            name: 'Edward York V'
          }
        ]}
      />

      <Button variant="secondary" title="Add Contact" />
    </PageWrap>
  )
}
