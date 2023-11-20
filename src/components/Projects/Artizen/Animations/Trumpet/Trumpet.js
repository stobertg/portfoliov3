import React from 'react'
import { styled, keyframes } from '@stitches/react'
import { TrumpetHorn, TrumpetBase, TrumpetLines } from './Parts'

const Rotate = keyframes({
  '0%': { transform: 'rotate( -11deg ) scale( 0.7 )' },
  '100%': { transform: 'rotate( -15deg ) scale( 0.7 )' },
});

const Wrap = styled('div', {
  position: 'relative',
  paddingRight: 100,
  transform: 'rotate( -11deg ) scale( 0.7 )',
  animation: `${Rotate} 3000ms ease infinite alternate`,
});

const Base = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  paddingBottom: 30
})

// ---------- This is the end of declarations ---------- //

export const ArtizenTrumpet = () => {
  return(

    <Wrap>
      <Base>
        <TrumpetHorn />
        <TrumpetBase />
      </Base>
      <TrumpetLines />
    </Wrap>

  )
}
