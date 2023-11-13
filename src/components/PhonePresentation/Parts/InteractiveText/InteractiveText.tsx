import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

// For the container of the text below the switch button, on the bottom of the container
// This holds the text to show the user that the phone to the left is interactive

const TextWrap = styled('div', {
  display: 'inline-flex',
  alignSelf: 'flex-start',
  position: 'relative',
  padding: '10px 16px',
  backdropFilter: 'blur( 10px )',
  background: 'rgba( 0,0,0, 0.3 )',
  borderRadius: '$pill',
  fontSize: 14,
  '*': { display: 'inline-flex', width: 'auto' }
})

// ---------- This is the end of declarations ---------- //

export const InteractiveText = () => { 
  return(

    <TextWrap>
      <Heading title="It's interactive! Click around" />
    </TextWrap>

  )
}
