import React from 'react'
import { Chart, CurrentHr } from './Parts'
import { Card } from '../../../../../Shared/Card/Card'

// -------------- Typescript declarations -------------- //

interface CardProps {
  icon: string
  title: string
  heartRate: { number: number }[]
  range: string
  columns: {
    time: string
    lines?: {
      height?: 'l0' | 'l1' | 'l2' | 'l3' | 'l4' | 'l5' | 'l6'
      position?: 'l0' | 'l1' | 'l2' | 'l3' | 'l4' | 'l5'
      topDot?: boolean
      bottomDot?: boolean
    }[]
  }[]
}

// ---------- This is the end of declarations ---------- //

export const HeartRateCard = ({ 
    icon, // Required - For the icon to the left of the title
    title, // Required - For the title of the card
    heartRate, // Required - For the heart rate numbers to simulate
    range, // Required - For the daily rage of the user's heart rate
    columns // Required - For the chart of the heart rate
  }:CardProps) => {
  
  return(

    <Card spacing="l1" {...{ icon, title }}>
      <Chart {...{ columns }} />
      <CurrentHr {...{ heartRate, range }} />
    </Card>

  )
}
