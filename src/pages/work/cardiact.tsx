import React, { useState } from 'react'
import type { NextPage } from 'next'
import { SiteContainer, Block, Intro, PhonePresentation, Cardiact, Blob } from '@components'
import { Victim } from '../../components/Projects/Cardiact/App/Parts/Emergency/Parts/Map/Parts/Map/Parts'

// -------------- Typescript declarations -------------- //

type TextSegmentType = {
  headings?: { title: string; }[];
  textItems?: { text: string; }[];
  title?: string;
  text?: string;
}

// ---------- This is the end of declarations ---------- //

const Gather: NextPage = () => {
  const [ isEmergency, setIsEmergency ] = useState( true )
  const [ currentText, setCurrentText ] = useState('map')
  const changeToEmergency = () => { setIsEmergency( true ), showText( 'map' )}
  const changeToStatic = () => { setIsEmergency( false ), showText( 'vitals' ) }
  const showText = ( text:string ) => { setCurrentText( text )}

  return (
    
    <SiteContainer 
      hasContactForm 
      shareURL="https://tylerstober.com/work/cardiact"
      pageTitle="TS - CardiAct"
      content="CardiAct is a project created by Tyler Stober and Geoff Burroughs. It won the Director's Choice Award winner at the University of Cincinnati school of Design, Architecture, Art & Planning in 2014"
      socialImage="https://mxmlcreative.com/global/social-hero.jpeg"
      blockSpacing="l2"
    >

      <Block width="medium">
        <PhonePresentation 
          darkMode
          logo="/projects/cardiact/logo.svg"
          logoAnimation={ <Victim /> }
          phoneBackground={ <Blob /> }
          leftSwitchIcon="heart"
          showLeftSwitchScreen={ changeToEmergency } 
          rightSwitchIcon="user-2"
          showRightSwitchScreen={ changeToStatic }
          textSegments={ textSegments }
          currentText={ currentText }
          modeTitle={ !isEmergency }
          switchModeTitles={[
            { title: 'Emergency Mode' },
            { title: 'Static Mode' }
          ]}
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
      </Block>

      <Block>
        <Intro 
          title="A Response Effort for Vicitims of Cardiac Arrest"
          text={
            <>
              <p>
                CardiAct is a mobile application designed to reduce response time for victims of cardiac arrest by crowdsourcing 
                assistance from CPR-certified individuals near a victim during an emergency. Pairing the application with a 
                supported physical heart monitor will allow it to keep track of a user&apos;s heart rate and detect any 
                abnormalities. The app can even request help automatically if the victim is unresponsive.
              </p>

              <p>
                The application would be used by both the potential victims, and the potential responders. When a user requires 
                emergency assistance, they can use the app to request help and responders within a 2 mile radius receives an 
                alert with the victims name, address and estimated time it would take to reach them.
              </p>
            </>
          }
          skills={[
            { title: 'UX/UI Design of the mobile app' },
            { title: 'Motion Piece' },
            { title: 'React Prototype' }
          ]}
          project={[
            { title: '2014 GRCD Directors Choice Awards' },
            { title: 'Senior Capstone' },
            { title: 'Collaboration with Geoff Burroughs' }
          ]}
        />
      </Block>
    </SiteContainer>

  )
}

export default Gather

// For the content of the 

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
    title: "Vitals Screen",
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
