import React from 'react'
import { styled } from '@theme'
import { Tabs } from '../../../Shared'
import { Heading } from '@components'

const HeaderWrap = styled('div', {
  position: 'relative',
  width: '100%',
})

const HeaderContent = styled('div', {
  position: 'relative',
  width: '88%',
  margin: '0 auto'
})

const HeaderStatus = styled('div', {

})

const StatusPerson = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginRight: 12 }
})

const StatusImage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 40,
  height: 40,
  borderRadius: '$r0',
  overflow: 'hidden',
  img: { height: '100%', objectFit: 'cover', }
})

const StatusText = styled('div', {
  position: 'relative',

  '> *:not(:last-child)': { marginBottom: 2 },

  '> *:last-child': {
    color: 'red', 
    fontSize: 14 
  }
})

const StatusTimer = styled('div', {

})

interface HeaderProps {
  triggers: {
    icon: string
    title: string
  }[]
  tabContent: {
    content?: React.ReactNode
  }[]
}

export const EmergencyHeader = ({ 
    triggers, 
    tabContent 
  }:HeaderProps) => {

  return(

    <HeaderWrap>
      <HeaderContent>
        <HeaderStatus>
          <StatusPerson>
            <StatusImage><img src="/projects/cardiact/ed.jpg" alt="Cardiact" /></StatusImage>
            <StatusText>
              <Heading heavy title="Edward York IV" />
              <Heading title="Time in distress" />
            </StatusText>
          </StatusPerson>

          <StatusTimer>

          </StatusTimer>
        </HeaderStatus>

        <Tabs {...{ triggers, tabContent }} />
      </HeaderContent>
    </HeaderWrap>

  )
}
