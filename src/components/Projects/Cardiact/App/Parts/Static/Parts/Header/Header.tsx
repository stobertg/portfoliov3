import React from 'react'
import { styled } from '@theme'
import { Icon, Heading } from '@components'

// For the master container of the Header within the Static screens of Cardiact
// This is positioned on the top of the app where additonal navigation is provided

const HeaderWrap = styled('div', {
  position: 'relative',
  width: '100%'
})

// For the container of all of the content within the master container
// This contains the menu button on the left, the notifications on the right and the title in the center

const HeaderContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  width: '90%',
  margin: '0 auto',
  padding: '12px 0',
  fontSize: 12
})

// For the container of the logo in the center of the container
// This is for the logo of the cardiact app

const LogoWrap = styled('div', {
  position: 'relative',
  width: 50,
  transform: 'translateY( 3px )',
  opacity: 0.8
})

// ---------- This is the end of declarations ---------- //

export const StaticHeader = () => {
  return(

    <HeaderWrap>
      <HeaderContent>
        <Icon size="l0" icon="grip" />
        <LogoWrap><img src="/projects/cardiact/logo.svg" /></LogoWrap>
        <Icon size="l0" icon="bell" />
      </HeaderContent>
    </HeaderWrap>

  )
}
