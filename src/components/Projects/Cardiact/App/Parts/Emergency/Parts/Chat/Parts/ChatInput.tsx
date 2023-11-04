import React from 'react'
import { styled } from '@theme'
import { Icon } from '@components'

// For the master container of the chat input on the bottom of the chat page, in Emergency mode
// This is to show the context of the text option a user has when responding to other responders

const InputWrap = styled('div', {
  position: 'relative',
  width: '100%',
  marginBottom: 28
})

// For all of the content within the master container to be positioned centered
// This has the camera icon on the left and the input and speaker icon on the right

const InputContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  width: '95%',
  margin: '0 auto',
  '> *:not(:last-child)': { marginRight: 12 }
})

// For the container of the input and microphone icon on the right of the container
// Here we unstyle the default input and outline the input and the microphone to show it as one input

const Input = styled('div', {
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '8px 12px',
  borderRadius: '$pill',
  border: '1px solid #212121',

  // Here we remove the default styling of the input

  input: { 
    background: 'none',
    margin: 0,
    border: 'none',
    outline: 'none'
  }
})

// ---------- This is the end of declarations ---------- //

export const ChatInput = () => {
  return(

    <InputWrap>
      <InputContent>
        <Icon size="l1" icon="camera" />
        <Input>
          <input placeholder="Aa..." />
          <Icon size="l0" icon="mic" />
        </Input>
      </InputContent>
    </InputWrap>

  )
}
