import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

const TextWrap = styled('div', {
  display: 'inline-flex',
  alignSelf: 'flex-start',
  position: 'relative',
  padding: '10px 16px',
  backdropFilter: 'blur( 10px )',
  background: 'rgba( 117,12,13, 0.3 )',
  border: '1px solid rgb( 107, 6, 6 )',
  borderRadius: '$pill',
  fontSize: 14,
  '*': { display: 'inline-flex', width: 'auto' }
})

export const InteractiveText = () => { 
  return(

    <TextWrap>
      <Heading title="It's interactive! Click around" />
    </TextWrap>

  )
}
