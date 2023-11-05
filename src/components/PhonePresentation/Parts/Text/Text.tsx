import React from 'react'
import { styled } from '@theme'
import { Heading, Text } from '@components'

const TextWrap = styled('div', {
  
})

const AppMode = styled('div', {

})

const TextMain = styled('div', {

})

interface TextProps {

}

export const PresText = ({}:TextProps) => {
  return(

    <TextWrap>
      <AppMode><Heading heavy title="Emergency Mode" /></AppMode>
      <TextMain>
        <Heading heavy size="l5" title="Map Screen" />
        <Text>
          <p>
            CardiAct displays emergency mode when a victim request help or a dangerous heart rate is detected with a heart rate 
            monitor. The CPR Responder(s) will be sent an alert and provide the victim's location, along with other vital 
            information needed to help save the victim's life.
          </p>
        </Text>
      </TextMain>
    </TextWrap>

  )
}
