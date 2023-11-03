import React from 'react'
import { styled } from '@theme'
import { Heading, Icon } from '@components'

const DirWrap = styled('div', {
  position: 'absolute',
  width: '100%',
  zIndex: 10
})

const DirContent = styled('div', {
  position: 'relative',
  width: '96%',
  margin: '0 auto',
})

const DirHeader = styled('div', {
  position: 'relative',
  width: '100%',
  borderRadius: '$r2',
  backdropFilter: 'blur( 10px )',
  border: '1px solid #000',
  overflow: 'hidden',

  // For the dark overlay over the header

  '&:before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba( 0,0,0,0.6 )'
  }
})

const DirHeaderContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  width: '85%',
  margin: '0 auto',
  padding: '16px 0'
})

const DirAddress = styled('div', {
  position: 'relative',
  width: '80%',
  '> *:not(:last-child)': { marginBottom: 2 },
  '> *:nth-child(2)': { fontSize: 14 },
  '> *:last-child': { fontSize: 14 },
})

const DirStart = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  height: '100%',
  width: '20%',
  fontSize: 14
})

interface DirectionProps {

}

export const Directions = ({ }:DirectionProps) => {
  return(

    <DirWrap>
      <DirContent>

        <DirHeader>
          <DirHeaderContent>
            <DirAddress>
              <Heading heavy size="l0" title="1483 Westminster" />
              <Heading color="secondary" title="London, England" />
              <Heading color="secondary" title="2 min away" />
            </DirAddress>

            <DirStart>
              <Icon size='l0' icon="navigation-2" />
              <Heading bold color="secondary" title="Start" />
            </DirStart>
          </DirHeaderContent>
        </DirHeader>

      </DirContent>
    </DirWrap>

  )
} 
