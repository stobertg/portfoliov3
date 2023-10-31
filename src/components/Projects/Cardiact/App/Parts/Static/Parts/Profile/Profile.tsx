import React from 'react'
import { styled } from '@theme'
import { ProfileCard, LocationCard, MedicalInfo } from './Parts'

const ProfileWrap = styled('div', {
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginBottom: 8 }
})

export const Profile = () => {
  return(

    <ProfileWrap>
      <ProfileCard />
      <LocationCard />
      <MedicalInfo />
    </ProfileWrap>

  )
}
