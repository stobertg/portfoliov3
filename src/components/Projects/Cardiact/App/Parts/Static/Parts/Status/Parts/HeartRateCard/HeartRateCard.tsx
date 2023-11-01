import React from 'react'
import { Chart, CurrentHr } from './Parts'
import { Card } from '../../../../../Shared/Card/Card'

// ---------- This is the end of declarations ---------- //

export const HeartRateCard = () => {
  return(

    <Card 
      spacing="l1"
      icon="heart"
      title="Your heart rate"
    >
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

      <CurrentHr heartRate={ 72 } range="65-96" />
    </Card>

  )
}
