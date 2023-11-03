import React from 'react'
import CountUp from 'react-countup'
import { styled } from '@theme'
import { Heading } from '@components'

const StatusWrap = styled('div', {

})

const StatusContent = styled('div', {
  position: 'relative',
  width: '100%'
})

const Status = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  width: '95%',
  margin: '0 auto',
  padding: 8,
  background: '#151515',
  border: '1px solid #212121',
  borderRadius: '$r1',
})

const StatusPerson = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  '> *:not(:last-child)': { marginRight: 12 }
})

const StatusImage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 40,
  height: 40,
  borderRadius: '$r0',
  overflow: 'hidden',
  img: { height: '100%', objectFit: 'cover', }
})

const StatusText = styled('div', {
  position: 'relative',

  '> *:not(:last-child)': { marginBottom: 2 },
  '> *:last-child': { fontSize: 14 },
  '> *:first-child': { fontSize: 12, color: '#ff2b2b' }
})

const StatusTimer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 50,
  marginRight: 4,
  padding: '6px 0',
  fontSize: 12,
  background: 'linear-gradient(117deg, rgb(255 0 0) 0%, rgb(131, 24, 24) 100%)',
  border: '1px solid #eb0101',
  borderRadius: '$pill',

  '*': { fontFamily: '$sansSerifBold' },

  '> *:first-child': { 
    width: '48%',
    display: 'flex',
    justifyContent: 'flex-end'
  },

  '> *:last-child': {
    width: '52%'
  }
})

interface StatusProps {

}

export const HeaderStatus = ({}:StatusProps) => {
  return(

    <StatusWrap>
      <StatusContent>
        <Status>
          <StatusPerson>
            <StatusImage><img src="/projects/cardiact/ed.jpg" alt="Cardiact" /></StatusImage>
            <StatusText>
              <Heading bold title="Time in distress" />
              <Heading heavy title="Edward York IV" />
            </StatusText>
          </StatusPerson>

          <StatusTimer>
            <Heading bold title="2:" />
            <CountUp 
              start={ 20 }
              end={ 59 } 
              duration={ 39 }
              useEasing={ false }
              onEnd={({ reset, start, update }) => start()}
            />
          </StatusTimer>
        </Status>
      </StatusContent>
    </StatusWrap>

  )
}
