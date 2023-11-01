import React from 'react'
import { styled } from '@theme'
import { Grid, Heading } from '@components'
import { ChartColumn } from '.'

// For the master container of the charts within the Status screen in Cardiact
// This holds the chart of the daily heart rate for the user, as they are wearing their heart rate monitor

const History = styled('div', {
  position: 'relative',
  width: '100%',
})

// For the container of all of the content within the master container
// This holds the chart grid with the lines on the left and the rate numbers on the right

const ChartWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  width: '98%',
  height: 100,
  marginLeft: '2%',
  '> *:not(:last-child)': { marginRight: 12 }
})

// For the container of the numbers on the right of the container
// These dictate the heart rate numbers that the lines are falling in between

const ChartLevels = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  paddingBottom: 25,
  fontSize: 10
})

// -------------- Typescript declarations -------------- //

interface ChartProps {
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

export const Chart = ({ columns }:ChartProps) => {
  return(

    <History>
      <ChartWrap>
        <Grid columns={ 4 }>
          { columns.map(( column, i ) => (
            <ChartColumn 
              key={`column-${ i }`}
              time={ column.time }
              lines={ column.lines }
            />
          ))}
        </Grid>

        <ChartLevels>
          <Heading bold color="secondary" title="100" />
          <Heading bold color="secondary" title="60" />
        </ChartLevels>
      </ChartWrap>
    </History>

  )
}
