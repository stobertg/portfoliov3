import React from 'react'
import { styled } from '@theme'
import { ProfileCard, LocationCard, MedicalInfoCard } from './Parts'

// For the master container of the profile screen, within the static version of the app
// This contains the user's info, location, and medical information

const ProfileWrap = styled('div', {
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginBottom: 8 }
})

// ---------- This is the end of declarations ---------- //

export const Profile = () => {
  return(

    <ProfileWrap>
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
          { icon: 'graduation-cap', titles: [{ title: 'Preferred Hospital:' }, { title: 'University Hospital' }] }
        ]}
      />
    </ProfileWrap>

  )
}
