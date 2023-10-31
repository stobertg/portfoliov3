import React from 'react'
import { styled } from '@theme'
import { Icon, Heading } from '@components'

const HeaderWrap = styled('div', {
  position: 'relative',
  width: '100%'
})

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
