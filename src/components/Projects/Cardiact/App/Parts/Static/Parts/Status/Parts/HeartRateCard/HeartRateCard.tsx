import React from 'react'
import { styled } from '@theme'
import { Heading, Icon, Grid } from '@components'
import { Chart } from './Parts'
import { Card } from '../../../../../Shared/Card/Card'

const CardContent = styled('div', {
  position: 'relative',
  width: '85%',
  margin: '0 auto',
  padding: '20px 0',
  '> *:not(:last-child)': { marginBottom: 24 }
})

const CardHeader = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginRight: 12 }
})

const Current = styled('div', {
  position: 'relative',
  width: '100%',
  fontSize: 12,
  '> *:not(:last-child)': { marginBottom: 4 }
})

const CurrentInfo = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  width: '100%'
})

const CurrentHR = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  '*': { lineHeight: '1 !important' },
  '> *:not(:last-child)': { marginRight: 4 },
  '> *:last-child': { marginTop: 3 }
})

export const HeartRateCard = () => {
  return(

    <Card>
      <CardContent>
        <CardHeader>
          <Icon size="l1" icon="heart" />
          <Heading heavy title="Your heart rate" />
        </CardHeader>

        <Chart 
          columns={[
            { 
              time: '12 AM' 
            },
            { 
              time: '6 AM',
              lines: [
                { height: 'l2', position: 'l4', topDot: true },
                { height: 'l6' },
                { height: 'l4', bottomDot: true },
                { height: 'l3', position: 'l5' },
                { height: 'l2' },
                { height: 'l2', position: 'l4', topDot: true, bottomDot: true },
                { height: 'l3', position: 'l1', topDot: true },
                { height: 'l1', position: 'l2', topDot: true }
              ]
            },
            {
              time: '12 PM',
              lines: [
                { height: 'l3' },
                { height: 'l5' },
                { height: 'l2', position: 'l0', bottomDot: true },
                { height: 'l0', position: 'l3' },
                { height: 'l0' },
                { height: 'l1', position: 'l0', bottomDot: true },
                { height: 'l2', position: 'l3' },
                { height: 'l1', position: 'l0', topDot: true }
              ]
            },
            {
              time: '12 PM',
              lines: [
                { height: 'l1' },
                { height: 'l4', position: 'l0' },
                {},{},{},{},{},{}
              ]
            }
          ]}
        />

        <Current>
          <Heading size="l0" color="secondary" title="Current" />
          
          <CurrentInfo>
            <CurrentHR>
              <Heading bold size="l4" title="72" />
              <Heading bold color="secondary" title="BPM" />
            </CurrentHR>

            <Heading color="secondary" title="Range: 65-96" />
          </CurrentInfo>
        </Current>
      </CardContent>
    </Card>

  )
}
