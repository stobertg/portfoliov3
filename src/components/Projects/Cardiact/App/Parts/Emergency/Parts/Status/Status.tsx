import React from 'react'
import { styled } from '@theme'
import { PageWrap, Card, ProfileCard } from '../../../Shared'
import { ResponderList } from './Parts'

// For the master container of the content within the Status Screen on the Emergency part of the app
// This autmoates the spacing between each of the content blocks and account for scroll if content gets long

const StatusWrap = styled('div', {
  position: 'relative',
  width: '100%',
  padding: '12px 0',
  height: 465,
  overflow: 'scroll',
  '> *:not(:last-child)': { marginBottom: 8 }
})

// ---------- This is the end of declarations ---------- //

export const Status = () => {
  return(

    <PageWrap>
      <StatusWrap>
        <ProfileCard 
          forcedEntry
          image="/projects/cardiact/ed.jpg"
          imageAlt="Cardiact"
          name="Edward York IV"
          gender="male"
          age={ 40 }
        />

        <Card
          icon="users-2"
          title="Responders"
          headingSize="l0"
          headingColor="secondary"
        >
          <ResponderList 
            responders={[
              { image: '/projects/cardiact/ed.jpg', name: 'George Clearance', distance: '0.2 miles away', hasAed: true },
              { image: '/projects/cardiact/ed.jpg', name: 'Richard Neville', distance: 'There now' }
            ]}
          />
        </Card>

        <Card
          icon="users-2"
          title="Emergency contacts"
          headingSize="l0"
          headingColor="secondary"
        >
          <ResponderList 
            responders={[
              { image: '/projects/cardiact/ed.jpg', name: 'Liz Woodville', relation: 'Wife (Married)', hasPhone: true },
              { image: '/projects/cardiact/ed.jpg', name: 'Richard York', distance: 'Brother & Neighbor', hasPhone: true },
              { image: '/projects/cardiact/ed.jpg', name: 'Edward York', distance: 'Son', hasPhone: true }
            ]}
          />
        </Card>
      </StatusWrap>
    </PageWrap>

  )
}
