import React from 'react'
import { styled } from '@theme'
import { Grid, Heading } from '@components'
import { ChartColumn } from '..'

const History = styled('div', {
  position: 'relative',
  width: '100%',
})

const ChartWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  width: '98%',
  height: 100,
  marginLeft: '2%',
  '> *:not(:last-child)': { marginRight: 12 }
})

const ChartLevels = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  paddingBottom: 25,
  fontSize: 10
})

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
