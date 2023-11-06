import React from 'react'
import { styled } from '@theme'
import { Heading, Text } from '@components'

const TextWrap = styled('div', {
  
})

const AppMode = styled('div', {
  position: 'relative',
  height: 20,
  overflow: 'hidden',
  
})

const AppModeContent = styled('div', {
  position: 'relative',
  transition: '$s1',
  '> *:not(:last-child)': { marginBottom: 4 },

  variants: {
    switchMode: {
      true: { transform: 'translateY( calc( -100% + 17px ))' }
    }
  }
})

const TextMain = styled('div', {

})

const TextHeading = styled('div', {

})

interface TextProps {
  switchMode: boolean
}

export const PresText = ({ switchMode }:TextProps) => {
  return(

    <TextWrap>
      <AppMode>
        <AppModeContent {...{ switchMode }}>
          <Heading heavy title="Emergency Mode" />
          <Heading heavy title="Static Mode" />
        </AppModeContent>
      </AppMode>

      <TextMain>
        <TextHeading>
          <Heading heavy size="l5" title="Map Screen" />
          <Heading heavy size="l5" title="Unified Response" />
        </TextHeading>

        <Text>
          <p>
            CardiAct displays emergency mode when a victim request help or a dangerous heart rate is detected with a heart rate 
            monitor. The CPR Responder(s) will be sent an alert and provide the victim's location, along with other vital 
            information needed to help save the victim's life.
          </p>

          <p>
            Every responder and emergency contact can see the locations of other responders. When a responder reaches the victim, 
            they can confirm they are with them, allowing other responders to play a supportive role, such as getting the AED.
          </p>
        </Text>
      </TextMain>
    </TextWrap>

  )
}
