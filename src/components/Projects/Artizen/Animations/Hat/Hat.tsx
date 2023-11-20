import React from 'react'
import { styled } from '@stitches/react'
import { HatBase, HatItems } from './Parts'

const Hat = styled('div', {
  position: 'relative',
  paddingTop: 100
});

const HatWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  paddingTop: 31
})

export const ArtizenHat = () => {
  return(

    <Hat>
      <HatWrap>
        <HatItems />
        <HatBase />
      </HatWrap>
    </Hat>

  )
}
