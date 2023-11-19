import React from 'react'
import { styled } from '@theme'
import { Blob, Arm, Head, Body } from './Parts'

// For the master container of the illustration animation for Walgreens
// This shows the man holding the wallet and the money pops out of the wallet

const AnimationWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 170,
  height: 170
})

// For all the content of the illustrations, held in the center of the master container
// This hols the decorative blob in the background and the man holding the money in the forground

const AnimationContent = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  padding: '50px 0',
  transform: 'scale( 0.3 )'
})

// For the container of the main illustration of the man holding the wallet
// This is filled with animations of the man looking down and then up when the money pops out of the wallet

const Man = styled('div', {
  display: 'inline-flex',
  position: 'relative',
  padding: '0 20px 20px 50px',
  svg: { display: 'flex' }
})

// For the container of the background elements of the animations
// This holds the Hhead and the body of the man, seperate from the arm, which is the main focus

const WallletAnimationBase = styled('div', {
  position: 'relative',
  width: 300,
  paddingTop: 143
})

// ---------- This is the end of declarations ---------- //

export const ManWithWallet = () => {
  return(

    <AnimationWrap>
      <AnimationContent>
        <Man>
          <WallletAnimationBase><Head /><Body /></WallletAnimationBase>
          <Arm />
        </Man>

        <Blob />
      </AnimationContent>
    </AnimationWrap>

  )
}
