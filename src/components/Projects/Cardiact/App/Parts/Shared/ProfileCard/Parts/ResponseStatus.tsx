import React from 'react'
import { styled } from '@theme'
import { NumberLoop } from '../../'
import { Icon, Heading } from '@components'

const StatusWrap = styled('div', {
  position: 'relative',
  width: '100%',
  marginTop: 12,
  paddingTop: 16,
  borderTop: '1px solid #212121'
})

const StatusContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  width: '70%',
  margin: '0 auto'
})

const ResponseItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
})

const IconWrap = styled('div', {
  position: 'relative',
  height: 24,
})

interface StatusProps {

}

export const ResponseStatus = () => {
  return(

    <StatusWrap>
      <StatusContent>
        <ResponseItem>
          <IconWrap><Icon size="l1" icon="siren" /></IconWrap>
          <Heading title="EMS notified" />
        </ResponseItem>

        <ResponseItem>
          <NumberLoop numbers={[{ number: 280 }, { number: 291 }, { number: 256 }, { number: 298 }]} />
          <Heading title="Current BPM" />
        </ResponseItem>
      </StatusContent>
    </StatusWrap>

  )
}
