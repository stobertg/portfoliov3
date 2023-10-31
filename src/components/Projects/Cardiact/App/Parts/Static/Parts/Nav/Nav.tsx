import React from 'react'
import { styled } from '@theme'
import { Tabs } from '../../../Shared'

// For the container of the navigation in static mode
// This is more of a traditional app navigation because the UX is different vs active

const NavWrap = styled('div', {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%'
})

interface NavProps {

}

export const StaticNav = ({}:NavProps) => {
  return(

    <NavWrap>
      <Tabs 
        variant="mobile"
        triggers={[
          { icon: 'heart', title: 'Status' },
          { icon: 'users-2', title: 'Contacts' },
          { icon: 'user-2', title: 'Profile' }
        ]}
        tabContent={[
          { }
        ]}
      />
    </NavWrap>

  )
}
