import React from 'react'
import { styled, keyframes } from '@theme'
import { IllusWallet } from '../Wallet/Wallet'

const animate__main = keyframes({
  '0%': { transform: 'rotate( -5deg ) scale( 0.95 )' },
  '30%, 100%': { transform: 'rotate( 0deg ) scale( 1 )' }
})

const animate__hand = keyframes({
  '0%': { transform: 'rotate( -15deg ) scale( 0.95 )' },
  '30%, 100%': { transform: 'rotate( 0deg ) scale( 1 )' }
})

const ArmWrap = styled('div', {
  position: 'absolute',
  right: 0,
  bottom: 0,
  width: '100%',
  height: 310,
  animation: `${ animate__main } 5s ease infinite forwards alternate`,
  transformOrigin: 'top right'
})

const HandWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row-reverse',
  position: 'absolute',
  top: 0,
  left: 0,
  width: 125,
  paddingTop: 42,
  animation: `${ animate__hand } 5s ease infinite forwards alternate`,
  transformOrigin: 'bottom right'
})

const HandMain = styled('div', {
  position: 'relative',
  width: 90,
  zIndex: 10
})

const ArmMain = styled('div', {
  position: 'absolute',
  right: 0,
  bottom: 0,
  width: 270
})

const DarkSkin = styled('path', { fill: '#a24f14' })
const LightBlue = styled('path', { fill: '#0082aa' })

export const Arm = () => {
  return(

    <ArmWrap>
      <HandWrap>
        <IllusWallet />

        <HandMain>
          <svg viewBox="0 0 83.92 95.71">
            <DarkSkin d="M83.92,77.83L47.1,95.71C34.54,77.62-1.42,31.92,0.04,28.82C1.37,25.99,19,45.42,20.39,44.85c0,0-20.17-27.
              11-16.49-29.8c2.71-1.98,19.79,23.62,23.2,24.48C25.18,33.56,5.62,5.79,9.02,3.87S36.25,36.12,38.8,34.41c2.55-1.7-16.
              59-32.76-13.83-34.27C29.9-2.54,48.8,32.29,53.49,34.2c0.43,0,13.62-0.11,13.62-0.11C72.42,38.77,81.37,54.85,83.92,
              77.83z"
            />
          </svg>
        </HandMain>
      </HandWrap>

      <ArmMain>
        <svg viewBox="0 0 260.89 254.59">
          <LightBlue d="M140.42,254.5c-16.15,0-33.51-2.67-51.89-8.05c-29.38-8.6-52.78-31.4-69.55-67.78C7.01,152.69,1.52,125.62,
            0.16,113.72c-1.03-9.05,3.08-17.4,10.49-21.26c7.04-3.68,15.42-2.44,21.86,3.24c1.88,1.66,4.84,4.87,8.58,8.95c17.36,
            18.88,53.47,58.17,76.64,45.36c19.96-11.03,24.62-34.97,31.68-71.21c3.1-15.92,6.61-33.98,12.08-54.25c4.26-15.81,17.
            44-25.41,33.57-24.48c13.56,0.79,27.1,8.74,38.14,22.4c12.82,15.87,21.79,38.98,25.93,66.83l0,0c6.59,44.29-4.49,104.
            43-44.12,138.97C195.01,245.7,169.72,254.5,140.42,254.5zM19.13,95.35c-2.1,0-4.19,0.51-6.17,1.54c-5.64,2.94-8.64,9.
            18-7.83,16.26c0.12,1.07,13.06,107.5,84.81,128.5c26.52,7.76,50.76,9.84,72.06,6.17c19-3.28,35.73-11.12,49.73-23.32c17.
            33-15.11,30.37-36.92,37.7-63.08c6.48-23.12,8.17-48.48,4.76-71.39c-6.09-40.94-26.83-83.09-59.42-84.97c-13.88-0.8-24.
            78,7.16-28.45,20.79c-5.42,20.1-8.92,38.06-12,53.9c-7.32,37.62-12.16,62.47-34.17,74.63c-3.89,2.15-8.02,3.1-12.3,3.1
            c-24.98,0-54.89-32.54-70.44-49.46c-3.64-3.96-6.52-7.09-8.2-8.58C26.13,96.74,22.61,95.35,19.13,95.35z"
          />
        </svg>
      </ArmMain>
    </ArmWrap>

  )
}
