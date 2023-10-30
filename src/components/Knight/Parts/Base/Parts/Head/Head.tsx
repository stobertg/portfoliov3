import React from 'react'
import { styled, keyframes } from '@theme'

const HeadWrap = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: 154,
  height: 134
})

const rotateHead = keyframes({
  '0%': { transform: 'rotate( 0deg ) translate3d(0, 0, 0)' },
  '50%': { transform: 'rotate( 6deg ) translate3d(0, 6px, 0)' },
  '100%': { transform: 'rotate( 0deg ) translate3d(0, 0, 0)' },
})

const Head = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: 94,
  animation: `${ rotateHead } 800ms ease infinite` 
})

const rotateNeck = keyframes({
  '0%': { transform: 'rotate( 0deg ) translate3d(0, 0, 0) scale(1, 1)' },
  '50%': { transform: 'rotate( -6deg ) translate3d(0, 2px, 0) scale(0.95, 0.95)' },
  '100%': { transform: 'rotate( 0deg ) translate3d(0, 0, 0) scale(1, 1)' }
})

const Neck = styled('div', {
  position: 'absolute',
  bottom: 0,
  right: 0,
  width: 107,
  animation: `${ rotateNeck } 800ms ease infinite`
})

export const HorseHead = () => {
  return(

    <HeadWrap>
      <Head>
        <svg viewBox="0 0 65.8 66.1">
          <path d="M59,21.9c-5.6-2.6-25.8-9.3-26.7-10c-0.9-0.7-0.9-1.3-2.7-2.1s-7.1-10-7.3-9.8s-0.2,2.1,0.4,3.7s1,5.6,1,5.6
            c-3.1-0.5-5-9.7-5.7-7.8c-0.7,1.9-0.4,9.8,2,12.7s-8.4,10.7-8.7,13.6S10,33.8,4,45.3S0.6,60.2,0.6,60.2s0.7,0.7,1.8,3.8
            C3.6,67,7.5,66,8.8,65.4s1.7-1.5,1.7-1.5c4.2,0.8,4.8-1.2,4.8-2.6c0-1.3-0.1-2,0.5-2.4c0.6-0.4,3.5-1.8,5.3-3.4
            c1.8-1.6,6.5-5.2,8.6-5.7c2.1-0.4,4.6-1.7,7.3-1.7c0,0,13.5,4.6,24.5-5.3S59,21.9,59,21.9z"/>
        </svg>
      </Head>

      <Neck>
        <svg viewBox="0 0 74.4 70.2">
          <path d="M24.5,0c5.6,2.6,5.9,3.5,9.2,4.9s14.2,7.5,20,11.8c0,0,13.7,7.5,19,10.8s-0.1,40.2-42.5,42.8
            c-0.6-1.7-1.8-5.5-2.2-7.3c-0.3-1.8-4.4-11.2-7.1-14.6c-2.7-3.3-8.8-13.5-10.6-16.7s-5.2-5.3-7.9-5.3c0,0-5.5-9.6,0-15.1
            S24.5,0,24.5,0z"/>
        </svg>
      </Neck>
    </HeadWrap>

  )
}
