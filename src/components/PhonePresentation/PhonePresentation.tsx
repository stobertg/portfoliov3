import React, { useState } from 'react'
import { styled } from '@theme'
import { Iphone, Cardiact } from '@components'
import{ PresLogo, PresText, PresSwitch, PhoneBackground } from './Parts'

const PresWrap = styled('div', {
  position: 'relative',
  width: '100%'
})

const PresContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  position: 'relative',
  maxWidth: 880,
  width: '100%',
  height: '100%',
  margin: '0 auto',
  '> *:not(:last-child)': { marginRight: 80 }
})

const PresPhone = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative'
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
  const [ isEmergency, setIsEmergency ] = useState( true )
  const changeToEmergency = () => setIsEmergency( true )
  const changeToStatic = () => setIsEmergency( false )

  return(

    <PresWrap>
      <PresContent>
        <PresPhone>
          <Iphone 
            darkMode 
            size="l0" 
            screen={ <Cardiact emergencyMode={ isEmergency } staticMode={ !isEmergency } /> } 
          />
          <PhoneBackground />
        </PresPhone>

        <PhoneDescp>
          <PhoneDescpContent>
            <PresText 
              switchMode={ !isEmergency }
              headings={[
                { title: 'Map Screen' },
                { title: 'Unified Response' }
              ]}
            />

            <PresBottom>
              <PresSwitch showEmergency={ changeToEmergency } showStatic={ changeToStatic } />
            </PresBottom>
          </PhoneDescpContent>
        </PhoneDescp>
      </PresContent>

      <PresLogo />
    </PresWrap>

  )
}
