import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

const ChartColumn = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'relative',
  borderRight: '1px dotted #252525',
  fontSize: 8,
  '&:first-child': { borderLeft: '1px dotted #252525' },

  '> div:last-child': { 
    position: 'absolute',
    bottom: 0,
    padding: '0 4px'
  }
})

const ChartColumnLines = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  width: '100%',
  padding: '0 0 0 1px',
  marginBottom: 20
})

const Line = styled('div', {
  position: 'relative',
  width: 4,
  background: 'red',
  borderRadius: 4,

  '&:before, &:after': {
    position: 'absolute',
    left: 0,
    width: 4,
    height: 4,
    borderRadius: '50%',
    background: 'red'
  },

  variants: {
    height: {
      l0: { height: 10 },
      l1: { height: 15 },
      l2: { height: 20 },
      l3: { height: 25 },
      l4: { height: 30 },
      l5: { height: 40 },
      l6: { height: 50 }
    },

    hasTopDot: {
      true: { '&:before': { content: '', top: -6 }}
    },

    hasBottomDot: {
      true: { '&:after': { content: '', bottom: -6 }}
    }
  }
})

interface ColumnProps {

}

export const ChartColumns = ({}:ColumnProps) => {
  return(

    <ChartColumn>
      <ChartColumnLines>
        <Line height="l2" style={{ transform: 'translateY( 5px )' }} hasTopDot />
        <Line height="l6" />
        <Line height="l4" hasBottomDot />
        <Line height="l3" style={{ transform: 'translateY( 12px )' }} />
        <Line height="l2" />
        <Line height="l2" style={{ transform: 'translateY( 4px )' }} hasTopDot hasBottomDot />
        <Line height="l3" style={{ transform: 'translateY( -2px )' }} />
        <Line height="l1" style={{ transform: 'translateY( 2px )' }} />
      </ChartColumnLines>
      <Heading bold color="secondary" title="6 AM" />
    </ChartColumn>

  )
}
