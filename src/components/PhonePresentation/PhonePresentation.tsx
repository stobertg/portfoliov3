import React, { useState } from 'react'
import { styled } from '@theme'
import { Iphone, Cardiact } from '@components'
import{ PresLogo, PresText, TextSegment, PresSwitch } from './Parts'

// For the master container of the phone presentation
// This shows the Cardiact project for now, will scale if needed in the future which required more complex logic

const PresWrap = styled('div', {
  position: 'relative',
  width: '100%'
})

// For all of the content within the master container
// This holds the phone on the left and the text that changes on click on the right of the container

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

// For the container of the phone on the left of the container
// This holds the phone in the center and a background blob behind, positioned absolute

const PresPhone = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative'
})

// For the container of the text on the right of the container
// This comes with the title and the text below, as well as the switch component to change views on the bottom

const PhoneDescp = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  position: 'relative',
  width: '100%',
  marginBottom: 50
})

// For all of the content within the master container 
// This is so the content is positioned centered vertically within the parent container

const PhoneDescpContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'relative',
  height: '79.5%'
})

// For the container of the switch on the bottom of the container
// This is used to change between the Emergency and Static versions of the Cardiact App

const PresBottom = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  width: '100%'
})

// -------------- Typescript declarations -------------- //

type TextSegmentType = {
  headings?: { title: string; }[];
  textItems?: { text: string; }[];
  title?: string;
  text?: string;
}

interface PhoneProps {
  darkMode: boolean
  screen: React.ReactNode
  phoneBackground?: React.ReactNode
  modeTitle?: any
  showEmergency: any
  showStatic: any
  textSegments: Record<string, TextSegmentType>
  currentText: string
  logoAnimation?: React.ReactNode
  logo?: string
  logoAltText?: string
  switchModeTitles: { title: string }[]
}

// ---------- This is the end of declarations ---------- //

export const PhonePresentation = ({
    darkMode, // Optional - For the iPhone to be set to dark mode
    screen, // Required - For the content of the iPhone
    phoneBackground, // Optional - I
    modeTitle,
    switchModeTitles,
    showEmergency,
    showStatic,
    textSegments,
    currentText,
    logo,
    logoAltText,
    logoAnimation
  }:PhoneProps) => {

  return(

    <PresWrap>
      <PresContent>
        <PresPhone>
          <Iphone size="l0" {...{ darkMode, screen }} />
          { phoneBackground && ( <>{ phoneBackground }</> )}
        </PresPhone>

        <PhoneDescp>
          <PhoneDescpContent>

            <PresText switchMode={ modeTitle } titles={ switchModeTitles }>
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
              <PresSwitch {...{ showEmergency, showStatic }} />
            </PresBottom>
          </PhoneDescpContent>
        </PhoneDescp>
      </PresContent>

      { logo && ( <PresLogo {...{ logoAnimation, logo, logoAltText }} /> )}
    </PresWrap>

  )
}