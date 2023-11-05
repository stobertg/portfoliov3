import React from 'react'
import { styled } from '@theme'
import { Iphone, Cardiact } from '@components'
import{ PresLogo, PresText, PresSwitch } from './Parts'

const PresWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  position: 'relative',
  width: '100%',
  height: '100%',
  '> *:not(:last-child)': { marginRight: 80 }
})

const PhoneDescp = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  position: 'relative',
  width: '100%',
  marginBottom: 50
})

const PhoneDescpContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'relative',
  height: '79.5%'
})

const PresBottom = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  position: 'relative',
  width: '100%'
})

interface PhoneProps {

}

export const PhonePresentation = () => {
  return(

    <PresWrap>
      <Iphone darkMode size="l0" screen={ <Cardiact /> } />

      <PhoneDescp>
        <PhoneDescpContent>
          <PresText />

          <PresBottom>
            <PresSwitch />
            <PresLogo />
          </PresBottom>
        </PhoneDescpContent>
      </PhoneDescp>
    </PresWrap>

  )
}
