import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

// For the master container of a column within the chart
// This encompasses 4 coulmns that show the user's heart rate

const ColumnWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'relative',
  borderRight: '1px dotted #252525',
  fontSize: 8,
  '&:first-child': { borderLeft: '1px dotted #252525' },

  // For the position of the time on the bottom of the container
  // Every column has a time that shows the time range of the heart rate lines

  '> div:last-child': { 
    position: 'absolute',
    bottom: 0,
    padding: '0 4px'
  }
})

// For the container of the red heart rate lines in the center of the container
// This shows the range within a given hour where the user's heart rate is falling

const ChartColumnLines = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  width: '100%',
  padding: '0 0 0 1px',
  marginBottom: 16
})

// For the container of the individual lines within the container
// These lines are colored in red and allows for customization in terms of height, position and accompanied dots

const Line = styled('div', {
  position: 'relative',
  width: 4,
  background: '#ff2b2b',
  borderRadius: 4,

  // For the dots that can be on the top and/or bottom of the main line
  // These are small circle that shows heart rates that fall outside of the connecting line

  '&:before, &:after': {
    position: 'absolute',
    left: 0,
    width: 4,
    height: 4,
    borderRadius: '50%',
    background: '#ff2b2b'
  },

  // Here we allow for different heights of the line, position, and dots showing on the top or bottom
  // This is for presentation purposes that show variety of heart rate readings

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

    // Here we allow for different positions of the line
    // By default, they are positioned centered in the container and allows for north and south deviations

    position: {
      l0: { transform: 'translateY( -4px )' },
      l1: { transform: 'translateY( -2px )' },
      l2: { transform: 'translateY( 2px )' },
      l3: { transform: 'translateY( 4px )' },
      l4: { transform: 'translateY( 5px )' },
      l5: { transform: 'translateY( 12px )' }
    },

    // Here we show and set the dot on the top of the line

    hasTopDot: {
      true: { '&:before': { content: '', top: -6 }}
    },

    // Here we show and set the dot on the bottom of the line

    hasBottomDot: {
      true: { '&:after': { content: '', bottom: -6 }}
    }
  }
})

// -------------- Typescript declarations -------------- //

interface ColumnProps {
  time?: string
  lines?: {
    height?: 'l0' | 'l1' | 'l2' | 'l3' | 'l4' | 'l5' | 'l6'
    position?: 'l0' | 'l1' | 'l2' | 'l3' | 'l4' | 'l5'
    topDot?: boolean
    bottomDot?: boolean
  }[]
}

// ---------- This is the end of declarations ---------- //

export const ChartColumn = ({ 
    time, // Required - For the time on the bottom of the container
    lines // Optional - For the Heart Rate lines in the container - not all contains will have them
  }:ColumnProps) => {

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
