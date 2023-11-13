import React from 'react'
import { PageWrap, ProfileCard, MedicalInfoCard, Callout } from '../../../Shared'
import { LocationCard } from './Parts'

// ---------- This is the end of declarations ---------- //

export const Profile = () => {
  return(

    <PageWrap>
      <Callout 
        icon="user"
        title="You profile will be shared with responders in a cardiac event."
      />

      <ProfileCard 
        forcedEntry
        image="/projects/cardiact/ed.jpg"
        imageAlt="Cardiact"
        name="Edward York IV"
        gender="male"
        age={ 40 }
      />

      <LocationCard currentLocation="1483 Westminster England, UK" />

      <MedicalInfoCard 
        title="Medical information"
        listItems={[
          { icon: 'pill', title: 'Takes 50mg of Lipitor daily' },
          { icon: 'leaf', title: 'Has seasonal allergies' },
          { icon: 'graduation-cap', titles: [{ title: 'Primary Care Physician:' }, { title: 'William Hatteclyffe' }] },
          { icon: 'graduation-cap', titles: [{ title: 'Preferred Hospital:' }, { title: 'Hospital of St. John' }] }
        ]}
      />
    </PageWrap>

  )
}
