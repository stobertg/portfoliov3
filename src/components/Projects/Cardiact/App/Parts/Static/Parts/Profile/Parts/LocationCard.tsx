import React from 'react'
import { styled } from '@theme'
import { Heading, Icon } from '@components'

const CardWrap = styled('div', {
  position: 'relative',
  width: '100%',
  background: '#151515',
  border: '1px solid #212121',
  borderRadius: '$r1',
})

const CardContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  width: '90%',
  margin: '0 auto',
  padding: '12px 0',
  '> *:not(:last-child)': { marginRight: 16 }
})

const CardImage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 80,
  height: 60,
  borderRadius: '$r0',
  overflow: 'hidden',
  
  img: {
    position: 'absolute',
    height: '100%',
    width: 'auto',
    zIndex: 0
  }
})

const CardImagePin = styled('div', {
  position: 'relative',
  zIndex: 1
})

const CardText = styled('div', {
  position: 'relative',
  lineHeight: 1.3,
  '> *:not(:last-child)': { marginBottom: 4 },
  '> *:first-child': { fontSize: 12 },
  '> *:last-child': { fontSize: 14 }
})

export const LocationCard = () => {
  return(

    <CardWrap>
      <CardContent>
        <CardImage>
          <img src="/projects/cardiact/location.png" alt="location" />
          <CardImagePin><Icon size="l1" icon="map-pin" /></CardImagePin>
        </CardImage>

        <CardText>
          <Heading color="secondary" title="Current location" />
          <Heading heavy title="1483 Westminster England, UK" />
        </CardText>
      </CardContent>
    </CardWrap>

  )
}
