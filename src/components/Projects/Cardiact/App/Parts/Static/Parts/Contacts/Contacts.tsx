import React from 'react'
import { PageWrap, Button } from '../../../Shared'
import { ContactList } from './Parts'

// ---------- This is the end of declarations ---------- //

export const Contacts = () => {
  return(

    <PageWrap>
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
