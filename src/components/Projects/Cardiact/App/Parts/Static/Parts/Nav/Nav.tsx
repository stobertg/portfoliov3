import React from 'react'
import { styled } from '@theme'
import { Tabs } from '../../../Shared'

// For the container of the navigation in static mode
// This is more of a traditional app navigation because the UX is different vs active

const NavWrap = styled('div', {
  
})

interface NavProps {
  triggers: {
    icon: string
    title: string
  }[]
  tabContent: {
    content?: React.ReactNode
  }[]
}

export const StaticNav = ({ triggers, tabContent }:NavProps) => {
  return(

    <NavWrap>
      <Tabs variant="mobile" {...{ triggers, tabContent }} />
    </NavWrap>

  )
}
