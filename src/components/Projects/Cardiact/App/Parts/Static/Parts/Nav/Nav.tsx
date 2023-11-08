import React from 'react'
import { Tabs } from '../../../Shared'

// -------------- Typescript declarations -------------- //

interface NavProps {
  triggers: {
    icon: string
    title: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
  }[]
  tabContent: {
    content?: React.ReactNode
  }[]
}

// ---------- This is the end of declarations ---------- //

export const StaticNav = ({ 
    triggers, // Required - For the tab buttons
    tabContent // REquired - For the content associated with the tabs
  }:NavProps) => {
  
  return(

    <Tabs variant="mobile" {...{ triggers, tabContent }} />

  )
}
