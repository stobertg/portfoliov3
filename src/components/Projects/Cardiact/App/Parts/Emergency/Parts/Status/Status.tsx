import React from 'react'
import { styled } from '@theme'
import { PageWrap, Card, ProfileCard, MedicalInfoCard } from '../../../Shared'
import { ResponderList } from '../../../Shared'

// For the master container of the content within the Status Screen on the Emergency part of the app
// This autmoates the spacing between each of the content blocks and account for scroll if content gets long

const StatusWrap = styled('div', {
  position: 'relative',
  width: '100%',
  height: 465,
  padding: '10px 0 20px',
  overflow: 'scroll',
  '> *:not(:last-child)': { marginBottom: 8 },
  '&::-webkit-scrollbar': { display: 'none' }
})

// ---------- This is the end of declarations ---------- //

export const Status = () => {
  return(

    <PageWrap>
      <StatusWrap>
        <ProfileCard 
          emergency
          forcedEntry
          image="/projects/cardiact/ed.webp"
          imageAlt="Cardiact"
          name="Edward York IV"
          gender="Male"
          age={ 40 }
        />

        <Card
          icon="users"
          title="Responders"
          headingSize="l0"
          headingColor="secondary"
        >
          <ResponderList 
            responders={[
              { image: '/projects/cardiact/george_clarence.webp', name: 'George Clearance', distance: '0.2 miles away', hasAed: true },
              { image: '/projects/cardiact/neville.webp', name: 'Richard Neville', distance: 'There now' }
            ]}
          />
        </Card>

        <Card
          icon="users"
          title="Emergency contacts"
          headingSize="l0"
          headingColor="secondary"
        >
          <ResponderList 
            responders={[
              { image: '/projects/cardiact/woodville.webp', name: 'Liz Woodville', relation: 'Wife (Married)', hasPhone: true },
              { image: '/projects/cardiact/richardiii.webp', name: 'Richard York', distance: 'Brother & Neighbor', hasPhone: true },
              { image: '/projects/cardiact/edwardv.webp', name: 'Edward York', distance: 'Son', hasPhone: true }
            ]}
          />
        </Card>

        <MedicalInfoCard 
          title="Medical information"
          listItems={[
            { icon: 'pill', title: 'Takes 50mg of Lipitor daily' },
            { icon: 'leaf', title: 'Has seasonal allergies' },
            { icon: 'graduation-cap', titles: [{ title: 'Primary Care Physician:' }, { title: 'William Hatteclyffe' }] },
            { icon: 'graduation-cap', titles: [{ title: 'Preferred Hospital:' }, { title: 'Hospital of St. John' }] }
          ]}
        />
      </StatusWrap>
    </PageWrap>

  )
}
