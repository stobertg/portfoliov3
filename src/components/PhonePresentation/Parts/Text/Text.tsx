import React from 'react'
import { styled } from '@theme'
import { Heading, Text } from '@components'

const TextWrap = styled('div', {
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginBottom: 4 }
})

const AppMode = styled('div', {
  position: 'relative',
  height: 20,
  overflow: 'hidden',
  
})

const AppModeContent = styled('div', {
  position: 'relative',
  transition: '$s3 ease',
  '> *': { transition: '$s3' },
  '> *:not(:last-child)': { marginBottom: 4 },

  variants: {
    switchMode: {
      true: { 
        transform: 'translateY( calc( -100% + 17px ))',
        '> *:first-child': { opacity: 0 },
        '> *:last-child': { opacity: 1 }
      },

      false: {
        '> *:first-child': { opacity: 1 },
        '> *:last-child': { opacity: 0 }
      }
    }
  }
})

const TextMain = styled('div', {
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginBottom: 4 }
})

const TextHeading = styled('div', {
  position: 'relative',
  height: 60,
  overflow: 'hidden'
})

interface TextProps {
  switchMode: boolean
  title?: string
  headings?: {
    title: string
  }[]
}

export const PresText = ({ title, headings, switchMode }:TextProps) => {
  return(

    <TextWrap>
      <AppMode>
        <AppModeContent {...{ switchMode }}>
          <Heading color="secondary" heavy title="Emergency Mode" />
          <Heading color="secondary" heavy title="Static Mode" />
        </AppModeContent>
      </AppMode>

      <TextMain>
        { headings ? (

          <TextHeading>
            { headings?.map(( heading, i ) => (
              <Heading 
                heavy 
                key={`heading-${ i }`} 
                size="l5" 
                title={ heading.title } 
              />
            ))}
          </TextHeading>

        ) : (

          <Heading 
            heavy 
            size="l5" 
            {...{ title }}
          />

        )}

        <Text font="sansSerif" fontSize="l0" color="secondary">
          <p>
            CardiAct displays emergency mode when a victim request help or a dangerous heart rate is detected with a heart rate 
            monitor. The CPR Responder(s) will be sent an alert and provide the victim's location, along with other vital 
            information needed to help save the victim's life.
          </p>

          {/* <p>
            Every responder and emergency contact can see the locations of other responders. When a responder reaches the victim, 
            they can confirm they are with them, allowing other responders to play a supportive role, such as getting the AED.
          </p> */}
        </Text>
      </TextMain>
    </TextWrap>

  )
}
