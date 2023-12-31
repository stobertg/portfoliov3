import React from 'react'
import { PageWrap, Callout } from '../../../Shared'
import { EkgCard, HeartRateCard } from './Parts'

// ---------- This is the end of declarations ---------- //

export const Status = () => {
  return(

    <PageWrap>
      <Callout 
        icon="activity"
        title="Your numbers look good and normal at the moment."
      />
      
      <HeartRateCard 
        icon="heart"
        title="Your heart rate"
        range="65-96"
        heartRate={[
          { number: 72 }, 
          { number: 75 }, 
          { number: 69 }, 
          { number: 73 }
        ]} 
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

      <EkgCard 
        icon="activity"
        title="HR Variability"
        listItems={[
          { title: '60 ms', time: '4:03 PM' },
          { title: '52 ms', time: '12:31 PM' }
        ]}
      />

      <EkgCard 
        icon="activity"
        title="EKGs"
        listItems={[
          { title: '70 BPM Average', time: '6:14 PM' },
          { title: '75 BPM Average', time: '3:03 PM' },
          { title: '72 BPM Average', time: '3:00 PM' }
        ]}
      />
    </PageWrap>

  )
}
