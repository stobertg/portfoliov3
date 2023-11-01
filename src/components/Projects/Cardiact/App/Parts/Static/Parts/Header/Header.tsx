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

// ---------- This is the end of declarations ---------- //

export const StaticHeader = () => {
  return(

    <HeaderWrap>
      <HeaderContent>
        <Icon size="l0" icon="grip" />
        <Heading bold title="Profile" />
        <Icon size="l0" icon="bell" />
      </HeaderContent>
    </HeaderWrap>

  )
}
