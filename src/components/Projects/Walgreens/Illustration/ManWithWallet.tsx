import React from 'react'
import { styled } from '@theme'
import { Blob, Arm, Head, Body } from './Parts'

const AnimationWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 170,
  height: 170
})

const AnimationContent = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  padding: '50px 0',
  transform: 'scale( 0.3 )'
})

const WalletAnimation = styled('div', {
  display: 'inline-flex',
  position: 'relative',
  padding: '0 20px 20px 50px',
  svg: { display: 'flex' }
})

const WallletAnimationBase = styled('div', {
  position: 'relative',
  width: 300,
  paddingTop: 143
})

export const ManWithWallet = () => {
  return(

    <AnimationWrap>
      <AnimationContent>
        <WalletAnimation>
          <WallletAnimationBase><Head /><Body /></WallletAnimationBase>
          <Arm />
        </WalletAnimation>

        <Blob />
      </AnimationContent>
    </AnimationWrap>

  )
}
