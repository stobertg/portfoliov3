import React from 'react'
import { styled } from '@theme'
import { Heading, Icon } from '@components'

// For the master container of the callout component used throughout the application
// This holds a callout with the icon on the left and the text to the right

const CalloutWrap = styled('div', {
  position: 'relative',
  width: '100%',
  background: '#0d0d0d',
  border: '1px solid #222',
  borderRadius: '$r1'
})

// For the container of all of the content within the master container
// This is used to position the content within the center of the parent container

const CalloutContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  width: '88%',
  margin: '0 auto',
  padding: '12px 0',
  fontSize: 14,
  '> *:not(:last-child)': { marginRight: 12 }
})

// -------------- Typescript declarations -------------- //

interface CalloutProps {
  icon: string
  title: string
}

// ---------- This is the end of declarations ---------- //

export const Callout = ({ 
    icon, // Required - For the icon on the left of the container
    title // Required - For the title of the callout
  }:CalloutProps) => {

  return(

    <CalloutWrap>
      <CalloutContent>
        <div><Icon size="l0" {...{ icon }} /></div>
        <div><Heading {...{ title }} /></div>
      </CalloutContent>
    </CalloutWrap>

  )
}
