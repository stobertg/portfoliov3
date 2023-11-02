import React from 'react'
import { styled } from '@theme'
import { PageWrap } from '../../../Shared'
import { EkgCard, HeartRateCard } from './Parts'

// ---------- This is the end of declarations ---------- //

export const Status = () => {
  return(

    <PageWrap>
      <HeartRateCard 
        icon="heart"
        title="Your heart rate"
        heartRate={ 72 } 
        range="65-96"
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
