import React from 'react'
import { styled, keyframes } from '@theme'

const HorseTop = styled('div', {

})

const BaseWrap = styled('div', {
  position: 'relative',
	width: 350,
	height: 189,
	animation: `rotate__body 800ms ease infinite`
})

const HorseBaseHead = styled('div', {
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

const HorseHead = styled('div', {
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

const HorseNeck = styled('div', {
  position: 'absolute',
  bottom: 0,
  right: 0,
  width: 107,
  animation: `${ rotateNeck } 800ms ease infinite`
})

const HorseBody = styled('div', {
  position: 'absolute',
  bottom: 0,
  right: 0,
  width: 260
})

const animateTail = keyframes({
  '0%': { transform: 'scale(1) rotate(-6deg)' },
  '50%': { transform: 'scale(1.1, 0.9) rotate(-6deg)' },
  '100%': { transform: 'scale(1) rotate(-6deg)' }
})

const HorseTail = styled('div', {
  position: 'absolute',
  width: 140,
  right: -120,
  top: 65,
  transform: 'rotate(-6deg)',
  animation: `${ animateTail } 800ms ease infinite`,
  transformOrigin: 'top left'
})

export const HorseBase = () => {
  return(

    <HorseTop>
      <div className="horse__base">
        <div className="horse__base--head">
          <div className="horse__head--face">
            <svg viewBox="0 0 65.8 66.1">
              <path d="M59,21.9c-5.6-2.6-25.8-9.3-26.7-10c-0.9-0.7-0.9-1.3-2.7-2.1s-7.1-10-7.3-9.8s-0.2,2.1,0.4,3.7s1,5.6,1,5.6
                c-3.1-0.5-5-9.7-5.7-7.8c-0.7,1.9-0.4,9.8,2,12.7s-8.4,10.7-8.7,13.6S10,33.8,4,45.3S0.6,60.2,0.6,60.2s0.7,0.7,1.8,3.8
                C3.6,67,7.5,66,8.8,65.4s1.7-1.5,1.7-1.5c4.2,0.8,4.8-1.2,4.8-2.6c0-1.3-0.1-2,0.5-2.4c0.6-0.4,3.5-1.8,5.3-3.4
                c1.8-1.6,6.5-5.2,8.6-5.7c2.1-0.4,4.6-1.7,7.3-1.7c0,0,13.5,4.6,24.5-5.3S59,21.9,59,21.9z"/>
            </svg>
          </div>

          <div className="horse__head--neck">
            <svg viewBox="0 0 74.4 70.2">
              <path className="st0" d="M24.5,0c5.6,2.6,5.9,3.5,9.2,4.9s14.2,7.5,20,11.8c0,0,13.7,7.5,19,10.8s-0.1,40.2-42.5,42.8
                c-0.6-1.7-1.8-5.5-2.2-7.3c-0.3-1.8-4.4-11.2-7.1-14.6c-2.7-3.3-8.8-13.5-10.6-16.7s-5.2-5.3-7.9-5.3c0,0-5.5-9.6,0-15.1
                S24.5,0,24.5,0z"/>
            </svg>
          </div>
        </div>

        <div className="horse__base--body">
          <svg viewBox="0 0 161.8 78.2">
            <path className="st0" d="M155.6,56.5c4.5-6.7,5.5-15.1,6.1-19.9c0.6-4.8-0.7-14.5-1.9-16.1s-1.7-2.9-4.3-6.8c-2.7-3.8-5.1-6.1-10.8-8.5
              s-18.5-6-27.2-4.9S96,6.1,87.8,8.7s-22,2.8-25.9,1S49.8,6.2,45.2,6.1C40.5,6,32.4,4.2,26.7,0C26.7,0-6,17,1,46.2
              c0.4,1.8,1.6,5.7,2.2,7.3c0.6,1.7,0.1,4.3,0.5,7C4.1,63.2,5,65.7,6,67.7s5.2,4.5,6.6,5.2c0,0,10.4,6.8,30.8,5.1
              c5.2-0.6,13.2-1.2,20.4-1.7s5.5-0.7,13.5-1.5s18.3-5.8,25.3-11l10-4.7c6.8-2.5,10.6,0.5,10.6,0.5S143.8,75.1,155.6,56.5z"/>
          </svg>
        </div>

        <div className="horse__base--tail">
          <svg viewBox="0 0 87.4 41.3">
            <path d="M3.8,14.1c0,0,1.7,2.2,2.2,5.5s2.1,5.4,2.7,5.7c0.6,0.2-0.7-1-0.8-2.3c-0.2-1.3-0.6-4.8-1.2-6s-0.7-2.7,0-1.8
              c0.7,0.8,1,3.6,1.7,5.3s1.3,2.2,1.4,3.5c0.1,1.2,1.6,3.2,2.2,3.8c0.7,0.5,6.2,3.7,8.6,2.8s0.2-0.7-1.8-1.9s-3.7-3.8-3.8-4.5
              c-0.1-0.7-0.1-0.7-0.1-0.7S12.6,21,12,19.7c-0.6-1.3,0.8-3.4,2.1-1s5.8,7.8,6.9,8.9c1.1,1.1,4.3,3.9,7.8,5.2s10.5,0.2,11.4,0
              s-4.4,0.2-6.5-0.8c-2.1-1.1-4.1-1.5-3.8-2.7s0.8-0.2,2.6,0.1c1.8,0.3,6.1,1.4,10.5,1.4s15.8-1.5,18.8,1.8s5.4,6.5,7.8,8.3
              c2.4,1.8-1.5-2-2.2-4.5c-0.7-2.5-2.8-3-3.6-4.9c-0.8-1.9-2.6-1.8-0.8-1.9c1.7-0.1,4.1-1.2,6.7-0.9c2.6,0.2,3.3-0.6,2.4-0.9
              s-2.7,0.5-2.4-0.4c0.2-0.8,2.7-2.2,4.6-0.9c1.9,1.3,4.5,2,5.4,3.8c0.9,1.8,2,2.1,1.9,3.6s0.8,1.5,1.1,1.5c0.3,0-0.4-2.5-0.9-3.9
              s-3.2-5-5.3-5c-2.2,0,1.8-2.6,4.2-1.2c2.4,1.3,6.6,5.1,6.8,6.6c0,0,0.3-2.3-1.2-4.4c-1.6-2.1-4-2.7-5.9-3.9s-3.8,0.2-5.1-2.2
              s-3.9-3.6-6.2-3.9c-2.3-0.3-4.9,0.4-7.4-0.1s-6.8-0.8-8.5-1.8s-1.8-2.5-1.8-1.1c0.1,1.4,3.6,3.5,2.5,4.2c-1.1,0.8-5.7-1.2-5.2-2.5
              c0.4-1.2,1.2-0.3,1-1c-0.2-0.7-0.5-2.5-2.3-3.1c-1.8-0.6-6.2,0-7.2-2.2S35.8,2.9,32.7,2S19.9-0.5,14.5,0.2S1.2,5.6,0.2,5.5
              S3.8,14.1,3.8,14.1z"/>
          </svg>
        </div>
      </div>
    </HorseTop>

  )
}
