import React from 'react'
import { styled } from '@theme'
import { Tabs } from '../../../Shared'
import { HeaderStatus } from './Parts'
import { Heading } from '@components'

const HeaderWrap = styled('div', {
  position: 'relative',
  width: '100%',
})

const HeaderContent = styled('div', {
  position: 'relative',
  margin: '0 auto',
})

const HeaderNavWrap = styled('div', {
  position: 'relative',
  width: '100%'
})

const HeaderNav = styled('div', {
  position: 'relative',
  margin: '0 auto'
})

interface HeaderProps {
  triggers: {
    icon: string
    title: string
  }[]
  tabContent: {
    content?: React.ReactNode
  }[]
}

export const EmergencyHeader = ({ 
    triggers, 
    tabContent 
  }:HeaderProps) => {

  return(

    <HeaderWrap>
      <HeaderContent>
        <HeaderStatus />

        <HeaderNavWrap>
          <HeaderNav><Tabs bold {...{ triggers, tabContent }} /></HeaderNav>
        </HeaderNavWrap>
      </HeaderContent>
    </HeaderWrap>

  )
}
