import React, { useState } from 'react'
import { styled } from '@theme'
import { Iphone, Cardiact } from '@components'
import{ PresLogo, PresText, TextSegment, PresSwitch, PhoneBackground } from './Parts'

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

type TextSegmentType = {
  headings?: { title: string; }[];
  textItems?: { text: string; }[];
  title?: string;
  text?: string;
}

export const PhonePresentation = () => {
  const [ isEmergency, setIsEmergency ] = useState( true )
  const changeToEmergency = () => { setIsEmergency( true ), showText( 'map' )}
  const changeToStatic = () => { setIsEmergency( false ), showText( 'vitals' ) }

  const [ currentText, setCurrentText ] = useState('map')
  const showText = ( text:string ) => { setCurrentText( text )}

  return(

    <PresWrap>
      <PresContent>
        <PresPhone>
          <Iphone 
            darkMode 
            size="l0" 
            screen={ 
              <Cardiact 
                emergencyMode={ isEmergency } 
                staticMode={ !isEmergency } 
                onMapClick={() => showText( 'map' )}
                onStatusClick={() => showText( 'status' )}
                onChatClick={() => showText( 'chat' )}
                onVitalsClick={() => showText( 'vitals' )}
                onContactsClick={() => showText( 'contacts' )}
                onProfileClick={() => showText( 'profile' )}
                onHelpClick={() => showText( 'help' )}
              /> 
            } 
          />
          <PhoneBackground />
        </PresPhone>

        <PhoneDescp>
          <PhoneDescpContent>
            <PresText switchMode={ !isEmergency }>
              { Object.entries( textSegments ).map(([ key, value ]) => (
                currentText === key && (

                  <TextSegment
                    key={ key }
                    {...( value.headings && value.textItems ? {
                      headings: value.headings,
                      textItems: value.textItems,
                    } : {
                      title: value.title,
                      text: value.text,
                    })}
                  />

                )
              ))}
            </PresText>

            <PresBottom>
              <PresSwitch 
                showEmergency={ changeToEmergency } 
                showStatic={ changeToStatic } 
              />
            </PresBottom>
          </PhoneDescpContent>
        </PhoneDescp>
      </PresContent>

      <PresLogo />
    </PresWrap>

  )
}

const textSegments: Record<string, TextSegmentType> = {
  map: {
    headings: [
      { title: "Map Screen" },
      { title: "Unified Response" }
    ],
    textItems: [
      { text: "CardiAct displays emergency mode when a victim request help or a dangerous heart rate is detected with a heart rate monitor. The CPR Responder(s) will be sent an alert and provide the victim's location, along with other vital information needed to help save the victim's life." },
      { text: "Every responder and emergency contact can see the locations of other responders. When a responder reaches the victim, they can confirm they are with them, allowing other responders to play a supportive role, such as getting the AED." }
    ]
  },

  status: {
    title: "Status Screen",
    text: "Here, users can view the current heart rate and the duration of distress. This is important information because a victim can start to experience brain damage in 4-6 minutes."
  },

  chat: {
    title: "Chat Screen",
    text: "Responders and emergency contacts have the ability to communicate in a chat room setting, providing transparency between all parties."
  },

  vitals: {
    title: "Static Mode",
    text: "Static mode is for at-risk individuals who could experience a cardiac arrest. The app is married to a heart rate monitor, that the individual wears and the app alerts CPR responders and emergency contacts. Here the user can see their current heart rate."
  },

  contacts: {
    title: "Contacts Screen",
    text: "Here, a user can add or edit their existing contacts. Contacts are friends or family who are notified in addition to CPR responders when an at-risk individual experiences a cardiac arrest."
  },

  profile: {
    title: "Profile Screen",
    text: "A user can update the valuable information of responding parties by inputting their personal health information or any other important information."
  },

  help: {
    title: "Help Screen",
    text: "Static mode is for at-risk individuals who could experience a cardiac arrest. The app is married to a heart rate monitor, that the individual wears and the app alerts CPR responders and emergency contacts. Here the user can see their current heart rate."
  }
}