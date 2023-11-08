import React from 'react'
import { styled } from '@theme'
import { Heading, Icon } from '@components'


const CalloutWrap = styled('div', {
  position: 'relative',
  width: '100%',
  background: '#0d0d0d',
  border: '1px solid #222',
  borderRadius: '$r1'
})

const CalloutContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  width: '85%',
  margin: '0 auto',
  padding: '12px 0',
  fontSize: 14,
  '> *:not(:last-child)': { marginRight: 12 }
})

const CalloutIcon = styled('div', {

})

const CalloutText = styled('div', {

})

interface CalloutProps {
  icon: string
  title: string
}

export const Callout = ({ icon, title }:CalloutProps) => {
  return(

    <CalloutWrap>
      <CalloutContent>
        <div><Icon size="l0" {...{ icon }} /></div>
        <div><Heading {...{ title }} /></div>
      </CalloutContent>
    </CalloutWrap>

  )
}
