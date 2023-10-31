import React from 'react'
import type { NextPage } from 'next'
import { SiteContainer, Block, Intro, PhonePresentation } from '@components'

const Gather: NextPage = () => {
  return (
    
    <SiteContainer 
      hasContactForm 
      shareURL="https://tylerstober.com"
      pageTitle="TS - Gather"
      content="Tyler Stober is a multidisicplinary designer"
      socialImage="https://mxmlcreative.com/global/social-hero.jpeg"
      blockSpacing="l2"
    >

      <Block width="small">
        <PhonePresentation />
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
