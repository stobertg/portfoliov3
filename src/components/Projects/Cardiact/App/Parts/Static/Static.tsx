import React from 'react'
import { styled } from '@theme'
import { StaticHeader, StaticNav, Profile, Status, Contacts } from './Parts'

const StaticWrap = styled('div', {
  position: 'relative',
  width: '100%',
  height: '100%'
})

const StaticContent = styled('div', {
  position: 'relative',
  width: '100%',
  marginTop: 8
})

export const CariactStatic = () => {
  return(

    <StaticWrap>
      <StaticHeader />
      
      <StaticContent>
        {/* <Contacts /> */}
        {/* <Status /> */}
        {/* <Profile /> */}
      </StaticContent>

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
          { content: <Profile /> }
        ]}
      />
    </StaticWrap>

  )
}
