import React from 'react'
import { styled } from '@theme'
import { NumberLoop } from '../../'
import { Icon, Heading } from '@components'

// For the master container of the status screen within the Status Screen
// This is located below the Profile image and the name of the victim

const StatusWrap = styled('div', {
  position: 'relative',
  width: '100%',
  marginTop: 12,
  paddingTop: 16,
  borderTop: '1px solid #212121'
})

// For the container of all of the content within the master container
// This holds the EMS status on the left and the current beats per min on the right

const StatusContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  width: '70%',
  margin: '0 auto'
})

// For the container of each of the individual items within the container
// This positions the content in the center of the container

const ResponseItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative'
})

// For the container of the icon wihtin the EMS status on the left of the container
// This is used to match the height of the BPM on the right so the content is aligned

const IconWrap = styled('div', {
  position: 'relative',
  height: 24,
})

// ---------- This is the end of declarations ---------- //

export const ResponseStatus = () => {
  return(

    <StatusWrap>
      <StatusContent>
        <ResponseItem>
          <IconWrap><Icon size="l1" icon="siren" /></IconWrap>
          <Heading title="EMS Notified" />
        </ResponseItem>

        <ResponseItem>
          <NumberLoop 
            numbers={[
              { number: 280 }, 
              { number: 291 }, 
              { number: 256 }, 
              { number: 298 }
            ]}
          />
          <Heading title="Current BPM" />
        </ResponseItem>
      </StatusContent>
    </StatusWrap>

  )
}
