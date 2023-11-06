import React from 'react'
import { styled } from '@theme'
import { StaticHeader, StaticNav, Profile, Status, Contacts, Help } from './Parts'

const StaticWrap = styled('div', {
  position: 'relative',
  width: '100%',
  height: '100%'
})

interface StatusProps {
  onVitalsClick: React.MouseEventHandler<HTMLButtonElement>
  onContactsClick: React.MouseEventHandler<HTMLButtonElement>
  onProfileClick: React.MouseEventHandler<HTMLButtonElement>
  onHelpClick: React.MouseEventHandler<HTMLButtonElement>
}

export const CariactStatic = ({ 
    onVitalsClick,
    onContactsClick,
    onProfileClick,
    onHelpClick
  }:StatusProps) => {
  
  return(

    <StaticWrap>
      <StaticHeader title="Profile" />

      <StaticNav 
        triggers={[
          { icon: 'heart', title: 'Vitals', onClick: onVitalsClick },
          { icon: 'users-2', title: 'Contacts', onClick: onContactsClick },
          { icon: 'user-2', title: 'Profile', onClick: onProfileClick },
          { icon: 'alert-triangle', title: 'Help', onClick: onHelpClick }
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
