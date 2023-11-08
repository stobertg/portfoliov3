import React from 'react'
import { styled } from '@theme'
import { NumberLoop } from '../../'
import { Icon, Heading } from '@components'

const StatusWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative'
})

const ResponseItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative'
})

interface StatusProps {

}

export const ResponseStatus = () => {
  return(

    <StatusWrap>
      <ResponseItem><Icon size="l1" icon="siren" /><Heading title="EMS on their way" /></ResponseItem>
      <ResponseItem>
        <NumberLoop numbers={[{ number: 280 }, { number: 291 }, { number: 256 }, { number: 298 }]} />
        <Heading title="Current BPM" />
      </ResponseItem>
    </StatusWrap>

  )
}
