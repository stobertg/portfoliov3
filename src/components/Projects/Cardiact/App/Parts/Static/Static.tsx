import React from 'react'
import { styled } from '@theme'
import { StaticHeader, StaticNav, Profile, Status, Contacts, Help } from './Parts'

// For the master container of the Static Screens for the CardiAct app
// This holds the pages for Vitals, Contacts, Profile, and Help Screens

const StaticWrap = styled('div', {
  position: 'relative',
  width: '100%',
  height: '100%'
})

// -------------- Typescript declarations -------------- //

interface StatusProps {
  onVitalsClick: React.MouseEventHandler<HTMLButtonElement>
  onContactsClick: React.MouseEventHandler<HTMLButtonElement>
  onProfileClick: React.MouseEventHandler<HTMLButtonElement>
  onHelpClick: React.MouseEventHandler<HTMLButtonElement>
}

// ---------- This is the end of declarations ---------- //

export const CariactStatic = ({ 
    onVitalsClick, // Required - For the function to change the text to the Vitals screen
    onContactsClick, // Required - For the function to change the text to the Contacts screen
    onProfileClick, // Required - For the function to change the text to the Profile screen
    onHelpClick // Required - For the function to change the text to the Help screen
  }:StatusProps) => {
  
  return(

    <StaticWrap>
      <StaticHeader />

      <StaticNav 
        triggers={[
          { icon: 'heart', title: 'Vitals', onClick: onVitalsClick },
          { icon: 'users', title: 'Contacts', onClick: onContactsClick },
          { icon: 'user', title: 'Profile', onClick: onProfileClick },
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
