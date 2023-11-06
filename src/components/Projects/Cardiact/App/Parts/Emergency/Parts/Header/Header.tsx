import React from 'react'
import { styled } from '@theme'
import { Tabs } from '../../../Shared'
import { HeaderStatus } from './Parts'

// For the master container of the global header on the top of the Emergency screens
// This contains the Victim info and time in distress, as well as the navigation buttons below

const HeaderWrap = styled('div', {
  position: 'relative',
  width: '100%',
})

// For the container of the navigation within the header
// This contain the three options for 'Map, 'Status', and 'Chat' 

const HeaderNav = styled('div', {
  position: 'relative',
  width: '100%',
})

// -------------- Typescript declarations -------------- //

interface HeaderProps {
  image: string
  imageAlt: string
  name: string
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

export const EmergencyHeader = ({ 
    image, // Required - For the image of the victim
    imageAlt, // Required - For the name of the person in the image
    name, // Required - For the name of the vicitim
    triggers, // Required - For the global navigation items in the header
    tabContent // Required - For the content related to each of the tab triggers in the header
  }:HeaderProps) => {

  return(

    <HeaderWrap>
      <HeaderStatus {...{ image, imageAlt, name }} />
      <HeaderNav><Tabs bold {...{ triggers, tabContent }} /></HeaderNav>
    </HeaderWrap>

  )
}
