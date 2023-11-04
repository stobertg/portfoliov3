import React from 'react'
import { styled } from '@theme'
import { Heading, Icon } from '@components'

const DirHeader = styled('button', {
  position: 'relative',
  width: '100%',
  textAlign: 'left',
  lineHeight: 1,
  '*': { marginBottom: 0 }
})

const DirHeaderContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  width: '85%',
  margin: '0 auto',
  padding: '16px 0'
})

const DirAddress = styled('div', {
  position: 'relative',
  width: '80%',
  '> *:not(:last-child)': { marginBottom: 2 },
  '> *:nth-child(2)': { fontSize: 14 },
  '> *:last-child': { fontSize: 14 },
})

const DirStart = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  height: '100%',
  width: '20%',
  fontSize: 14
})

interface HeaderProps {
  address: string
  location: string
  distance: string
}

export const DirectionHeader = ({
    address,
    location,
    distance
  }:HeaderProps) => {
  
  return(

    <DirHeader>
      <DirHeaderContent>
        <DirAddress>
          <Heading heavy size="l0" title={ address } />
          <Heading color="secondary" title={ location } />
          <Heading color="secondary" title={ distance } />
        </DirAddress>

        <DirStart>
          <Icon size='l0' icon="navigation-2" />
          <Heading bold color="secondary" title="Start" />
        </DirStart>
      </DirHeaderContent>
    </DirHeader>

  )
}
