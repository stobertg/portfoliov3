import React from 'react'
import { styled } from '@theme'
import { Heading, Icon } from '@components'

// For the master container of the main part of the directions modal within the map screen
// By default, this is the only thing shown and clicking on it will reveal more detailed information with buttons

const DirHeader = styled('button', {
  position: 'relative',
  width: '100%',
  textAlign: 'left',
  lineHeight: 1,
  '*': { marginBottom: 0 }
})

// For the container of all of the content within the master container
// This has the address on the left of the contianer and the start button on the right

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

// For the container of the address on the left of the container
// This has the current street name, location, and distance away

const DirAddress = styled('div', {
  position: 'relative',
  width: '80%',
  '> *:not(:last-child)': { marginBottom: 2 },
  '> *:nth-child(2)': { fontSize: 14 },
  '> *:last-child': { fontSize: 14 },
})

// For the faux start button on the right of the container
// This is to show the intended ability that the user can have a google-maps-like automated directions

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

// -------------- Typescript declarations -------------- //

interface HeaderProps {
  address: string
  location: string
  distance: string
}

// ---------- This is the end of declarations ---------- //

export const DirectionHeader = ({
    address, // Required - For the address of the victim
    location, // Required - For the city/state of the victim
    distance // Requird - For how long on avergae it will take to get to the vicitim
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
