import React from 'react'
import { styled } from '@theme'
import { NumberLoop } from '../../../../../../Shared'
import { Heading } from '@components'

// For the master container of the current section on the bottom of the heart rate chart
// This show the current heart rate and the daily range of the user's heart rate

const Current = styled('div', {
  position: 'relative',
  width: '100%',
  fontSize: 12,
  '> *:not(:last-child)': { marginBottom: 4 }
})

// For the container of the heart rate details, below the 'Current' title
// This contains the BPM on the left of the container and the range on the right of the container

const CurrentInfo = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  width: '100%'
})

// For the BPM number on the left of the container
// This shows the current heart rate of the user

const CurrentHR = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  '*': { lineHeight: '1 !important' },
  '> *:not(:last-child)': { marginRight: 4 },
  '> *:last-child': { marginTop: 3 }
})

// -------------- Typescript declarations -------------- //

interface CurrentProps {
  heartRate: { number: number }[]
  range: string
}

// ---------- This is the end of declarations ---------- //

export const CurrentHr = ({ 
    heartRate, // Required - For the current heart rate of the user
    range // Required - For the daily heart rate range
  }:CurrentProps) => {
  
  return(

    <Current>
      <Heading size="l0" color="secondary" title="Current" />
      
      <CurrentInfo>
        <CurrentHR>
          <NumberLoop size="l4" numbers={ heartRate } />
          <Heading bold color="secondary" title="BPM" />
        </CurrentHR>
        <Heading color="secondary" title={`Range: ${ range }`} />
      </CurrentInfo>
    </Current>

  )
}
