import React from 'react'
import { styled } from '@theme'
import { Iphone } from '@components'
import{ PresLogo, PresText, TextSegment, PresSwitch, InteractiveText } from './Parts'

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
  '> *:not(:last-child)': { marginRight: 80 },

  // On tablet breakpoints we remove the text to the right of the iphone
  // We alsodisplay the content in the column format and remove the spacing

  '@tablet': { 
    flexDirection: 'column',
    '> *:not(:last-child)': { marginRight: 0 },
    '@tablet': { '> *:not(:last-child)': { marginBottom: 32 }}
  }
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
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginBottom: 4 },

  '@tablet': { 
    alignItems: 'center', 
    '*': { alignSelf: 'center !important' },
    '> *:not(:last-child)': { marginBottom: 12 }
  }
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
  showLeftSwitchScreen: any
  showRightSwitchScreen: any
  leftSwitchIcon: string
  rightSwitchIcon: string
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
    phoneBackground, // Optional - Supporting a decorative background behind the iPhone
    modeTitle, // Required - boolean item that allows the switching of the titles below
    switchModeTitles, // Required - For the titles of the app modes 
    showLeftSwitchScreen, // Required - For the function to show the screens associated with the left switch button
    showRightSwitchScreen, // Required - For the function to show the screens associated with the right switch button
    leftSwitchIcon, // Required - For the icon on the left of the switch 
    rightSwitchIcon, // Required - For the icon on the right of the switch 
    textSegments, // Required - Setting the title and descriptive text the content
    currentText, // Required - Setting the title and descriptive text of the default content
    logo, // Optional - For the image of the logo
    logoAltText, // Required if 'logo' - For the description of the logo image
    logoAnimation // Optional - For a subtle animation that sits above the logo
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
              <PresSwitch {...{ showLeftSwitchScreen, showRightSwitchScreen, leftSwitchIcon, rightSwitchIcon }} />
              <InteractiveText />
            </PresBottom>
          </PhoneDescpContent>
        </PhoneDescp>
      </PresContent>

      { logo && ( <PresLogo {...{ logoAnimation, logo, logoAltText }} /> )}
    </PresWrap>

  )
}
