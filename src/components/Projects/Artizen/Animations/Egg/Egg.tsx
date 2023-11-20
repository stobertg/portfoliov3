import React from 'react'
import { styled } from '@theme'
import { EggBase, EggIllustration, LinesLeft, LinesRight } from './Parts'

const EggWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: 200,
  paddingBottom: 25
})

const EggMain = styled('div', {
  position: 'relative',
  padding: '0 20px'
})

export const ArtizenEgg = () => {
  return(

    <EggWrap>
      <EggMain>
        <LinesLeft />
        <EggIllustration />
        <LinesRight />
      </EggMain>
      <EggBase />
    </EggWrap>

  )
}
