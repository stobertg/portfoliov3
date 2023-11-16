import React, { useState } from 'react'
import type { NextPage } from 'next'
import { SiteContainer, Block, Intro, PhonePresentation, Cardiact, CardiactProcess, Blob, NextProject } from '@components'
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
      blockSpacing="l3"
    >

      <Block width="medium">
        <PhonePresentation 
          darkMode
          logo="/projects/cardiact/logo.svg"
          logoAnimation={ <Victim /> }
          phoneBackground={ <Blob /> }
          leftSwitchIcon="heart"
          rightSwitchIcon="user"
          showLeftSwitchScreen={ changeToEmergency } 
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

      <Block width="medium">
        <img src="/projects/cardiact/process/poster.webp" alt="Cardiact Web Poster" />
      </Block>

      <Block width="medium" spacing="l1">
        <CardiactProcess
          mainImage="/projects/cardiact/process/pone.webp"
          title="1. Research and Benchmarking"
          text={
            <p>
              Our process began with extensive research into the human heart, and cardiac arrest. We needed to understand how it 
              functioned, and what exactly was occurring during cardiac arrest in order to design for a scenario where it was 
              happening.
            </p>
          }
        />

        <CardiactProcess
          variant="v1"
          title="2. Research, Defining Users, and User Flows"
          mainImage="/projects/cardiact/process/ptwo.webp"
          text={
            <p>
              After becoming familiar with the process of treating a victim of cardiac arrest, we needed to look into how our 
              application would fit into this scenario. We began to develop flow charts in order to visually develop the 
              functionality of the app, and identify opportunities where we could save time or solve an issue.
            </p>
          }
          images={[
            { image: '/projects/cardiact/process/pthree.webp', imageAlt: 'Cardiact Process', size: 'l1' },
            { image: '/projects/cardiact/process/pfour.webp', imageAlt: 'Cardiact Process', size: 'l2', hasBackground: true }
          ]}
        />

        <CardiactProcess
          variant="v2"
          title="3. Sketching, Paper Prototypes, and Wireframes"
          mainImage="/projects/cardiact/process/pfive.webp"
          imageSize="l3"
          text={
            <p>
              Based on our research and interviews, we began to develop our application beginning with sketching. After completing 
              the paper prototype, we developed digital wireframes. Here we concentrated on taking revisions and additions from 
              the paper prototype and refined our flow, hierarchical structure and typography along with developing graphic 
              elements.
            </p>
          }
          images={[
            { image: '/projects/cardiact/process/psix.webp', imageAlt: 'Cardiact Process' },
            { image: '/projects/cardiact/process/pseven.webp', imageAlt: 'Cardiact Process', size: 'l4' }
          ]}
        />

        <CardiactProcess
          variant="v3"
          title="4. User Testing & Refinement"
          mainImage="/projects/cardiact/process/peight.webp"
          imageSize="l3"
          text={
            <p>
              To test our initial prototype, we visited University Hospital at the University of Cincinnati where we tested and 
              interviewed five employees who are CPR certified in Basic Life Support (BLS). We conducted a mix of Obtrusive and 
              Unobtrusive testing. For three of the five testers we let them explore the app, having them speak aloud their thoughts 
              as they went though, while we were quiet and documenting if what they were seeing is what we expected or any areas 
              that proved to be confusing.
            </p>
          }
          images={[
            { image: '/projects/cardiact/process/pnine.webp', imageAlt: 'Cardiact Process', size: 'l4' },
            { image: '/projects/cardiact/process/pten.webp', imageAlt: 'Cardiact Process', size: 'l0' }
          ]}
        />
      </Block>

      <Block>
        <NextProject 
          pageLink="/work/gather"
          title="Gather E-Learning app" 
          image="/projects/gather/profile.png"
          imageAlt="Gather by Tyler Stober"
        />
      </Block>
    </SiteContainer>

  )
}

export default Gather

// For the content of the text on the right of the iPhone

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
