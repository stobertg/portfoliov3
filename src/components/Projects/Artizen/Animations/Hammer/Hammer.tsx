import React from 'react'
import { styled } from '@stitches/react'
import { HammerIllus, HammerLines, HammerTable } from './Parts'

const HammerWrap = styled('div', {
  position: 'relative',
  marginTop: 32
});

const HammerBase = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  padding: '50px 25px 0 0'
});

export const ArtizenHammer = () => {
  return(

    <HammerWrap>
      <HammerIllus />
      <HammerBase>
        <HammerLines />
        <HammerTable />
      </HammerBase>
    </HammerWrap>

  )
}
