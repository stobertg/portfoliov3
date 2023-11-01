import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

const ColumnWrap = styled('div', {
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

    position: {
      l0: { transform: 'translateY( -4px )' },
      l1: { transform: 'translateY( -2px )' },
      l2: { transform: 'translateY( 2px )' },
      l3: { transform: 'translateY( 4px )' },
      l4: { transform: 'translateY( 5px )' },
      l5: { transform: 'translateY( 12px )' }
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
  time?: string
  lines?: {
    height?: 'l0' | 'l1' | 'l2' | 'l3' | 'l4' | 'l5' | 'l6'
    position?: 'l0' | 'l1' | 'l2' | 'l3' | 'l4' | 'l5'
    topDot?: boolean
    bottomDot?: boolean
  }[]
}

export const ChartColumn = ({ time, lines }:ColumnProps) => {
  return(

    <ColumnWrap>
      <ChartColumnLines>
        { lines?.map(( line, i ) => (

          <Line 
            key={`line-${ i }`}
            height={ line.height }
            position={ line.position }
            hasTopDot={ line.topDot }
            hasBottomDot={ line.bottomDot }
          />

        ))}
      </ChartColumnLines>
      <Heading bold color="secondary" title={ time } />
    </ColumnWrap>

  )
}
