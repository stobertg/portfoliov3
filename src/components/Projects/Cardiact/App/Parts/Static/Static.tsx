import React from 'react'
import { styled } from '@theme'
import { Profile } from './Parts'

const StaticWrap = styled('div', {
  position: 'relative',
  width: '100%',
  height: '100%',
  padding: '0 10px',
  overflow: 'scroll',
})

export const CariactStatic = () => {
  return(

    <StaticWrap>
      <Profile />
    </StaticWrap>

  )
}
