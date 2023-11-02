import React from 'react'
import { styled } from '@theme'
import { StaticHeader, StaticNav, Profile, Status, Contacts, Help } from './Parts'

const StaticWrap = styled('div', {
  position: 'relative',
  width: '100%',
  height: '100%'
})

export const CariactStatic = () => {
  return(

    <StaticWrap>
      <StaticHeader title="Profile" />

      <StaticNav 
        triggers={[
          { icon: 'heart', title: 'Status' },
          { icon: 'users-2', title: 'Contacts' },
          { icon: 'user-2', title: 'Profile' },
          { icon: 'alert-triangle', title: 'Help' }
        ]}
        tabContent={[
          { content: <Status /> },
          { content: <Contacts /> },
          { content: <Profile /> },
          { content: <Help /> }
        ]}
      />
    </StaticWrap>

  )
}
