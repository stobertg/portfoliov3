import React from 'react'
import { styled } from '@theme'
import { Heading, Icon } from '@components'
import { Chart, CurrentHr } from './Parts'
import { Card } from '../../../../../Shared/Card/Card'

// For the master container of the Heart Rate card in the status screen
// This holds the current and daily heart rate information of the user

const CardContent = styled('div', {
  position: 'relative',
  width: '85%',
  margin: '0 auto',
  padding: '20px 0',
  '> *:not(:last-child)': { marginBottom: 24 }
})

// For the title on the top of the container
// This holds the icon on the left and the title on the right

const CardHeader = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginRight: 8 }
})


// ---------- This is the end of declarations ---------- //

export const HeartRateCard = () => {
  return(

    <Card>
      <CardContent>
        <CardHeader>
          <Icon size="l0" icon="heart" />
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
              time: '6 PM',
              lines: [
                { height: 'l1' },
                { height: 'l4', position: 'l0' },
                {},{},{},{},{},{}
              ]
            }
          ]}
        />

        <CurrentHr 
          heartRate={ 72 }
          range="65-96"
        />
      </CardContent>
    </Card>

  )
}
