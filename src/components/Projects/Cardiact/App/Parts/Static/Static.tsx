import React from 'react'
import { styled } from '@theme'
import { StaticHeader, StaticNav, Profile } from './Parts'

const StaticWrap = styled('div', {
  position: 'relative',
  width: '100%',
  height: '100%',
  padding: '0 10px'
})

const StaticContent = styled('div', {
  position: 'relative',
  width: '100%',
  marginTop: 8
})

export const CariactStatic = () => {
  return(

    <StaticWrap>
      <StaticHeader />
      
      <StaticContent>
        <Profile />
      </StaticContent>

      <StaticNav />
    </StaticWrap>

  )
}
