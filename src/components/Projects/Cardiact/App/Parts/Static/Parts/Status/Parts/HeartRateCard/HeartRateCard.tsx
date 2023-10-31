import React from 'react'
import { styled } from '@theme'
import { Heading, Icon, Grid } from '@components'
import { Card } from '../../../../../Shared/Card/Card'

const CardContent = styled('div', {
  position: 'relative',
  width: '85%',
  margin: '0 auto',
  padding: '20px 0',
  '> *:not(:last-child)': { marginBottom: 24 }
})

const CardHeader = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginRight: 12 }
})

const History = styled('div', {
  position: 'relative',
  width: '100%',
})

const Chart = styled('div', {
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

const Current = styled('div', {
  position: 'relative',
  width: '100%',
  fontSize: 12,
  '> *:not(:last-child)': { marginBottom: 4 }
})

const CurrentInfo = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  width: '100%'
})

const CurrentHR = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  '*': { lineHeight: '1 !important' },
  '> *:not(:last-child)': { marginRight: 4 },
  '> *:last-child': { marginTop: 3 }
})

export const HeartRateCard = () => {
  return(

    <Card>
      <CardContent>
        <CardHeader>
          <Icon size="l1" icon="heart" />
          <Heading heavy title="Your heart rate" />
        </CardHeader>

        <History>
          <Chart>
            <Grid columns={ 4 }>
              <ChartColumn>
                <Heading bold color="secondary" title="12 AM" />
              </ChartColumn>

              <ChartColumn>
                <ChartColumnLines>
                  <Line height="l2" style={{ transform: 'translateY( 5px )' }} hasTopDot />
                  <Line height="l6" />
                  <Line height="l4" hasBottomDot />
                  <Line height="l3" style={{ transform: 'translateY( 12px )' }} />
                  <Line height="l2" />
                  <Line height="l2" hasTopDot hasBottomDot />
                  <Line height="l3" />
                  <Line height="l1" />
                </ChartColumnLines>
                <Heading bold color="secondary" title="6 AM" />
              </ChartColumn>

              <ChartColumn>
                <ChartColumnLines>
                  <Line height="l3" />
                  <Line height="l5" />
                  <Line height="l2" hasBottomDot />
                  <Line height="l0" />
                  <Line height="l0" />
                  <Line height="l1" hasBottomDot />
                  <Line height="l2" />
                  <Line height="l1" hasTopDot />
                </ChartColumnLines>
                <Heading bold color="secondary" title="12 PM" />
              </ChartColumn>

              <ChartColumn>
                <ChartColumnLines>
                  <Line height="l1" />
                  <Line height="l4" />
                  <Line />
                  <Line />
                  <Line />
                  <Line />
                  <Line />
                  <Line />
                </ChartColumnLines>

                <Heading bold color="secondary" title="6 PM" />
              </ChartColumn>
            </Grid>

            <ChartLevels>
              <Heading bold color="secondary" title="100" />
              <Heading bold color="secondary" title="60" />
            </ChartLevels>
          </Chart>
        </History>

        <Current>
          <Heading size="l0" color="secondary" title="Current" />
          
          <CurrentInfo>
            <CurrentHR>
              <Heading bold size="l4" title="72" />
              <Heading bold color="secondary" title="BPM" />
            </CurrentHR>

            <Heading color="secondary" title="Range: 65-96" />
          </CurrentInfo>
        </Current>
      </CardContent>
    </Card>

  )
}
