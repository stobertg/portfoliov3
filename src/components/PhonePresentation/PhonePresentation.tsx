import React from 'react'
import { styled } from '@theme'
import { Iphone, Cardiact } from '@components'
import{ PresLogo, PresText, PresSwitch, PhoneBackground } from './Parts'

const PresWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  position: 'relative',
  width: '100%',
  height: '100%',
  '> *:not(:last-child)': { marginRight: 80 }
})

const PresPhone = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',

  '> *:first-child': {
    zIndex: 10
  },

  '> *:last-child': { 
    position: 'absolute',
    width: 950,
    transform: 'translate3d( 50px, 30px, 0 )',
    zIndex: 0
  }
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
      <PresPhone>
        <Iphone darkMode size="l0" screen={ <Cardiact /> } />
        <PhoneBackground />
      </PresPhone>

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
