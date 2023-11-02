import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'
import { IconBattery, IconNetwork } from './Icons'

// For the container of the iPhone default within the header
// This holds the time on the left, the center animated bar, and the wireless connections, battery, ect on the right

const IphoneHeader = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alginItems: 'center',
  position: 'absolute',
  top: 0,
  width: '100%',
  height: 'calc( 28px + 16px )',
  padding: '8px 0',
  fontSize: 12,
  lineHeight: 1,
  zIndex: 10,
  '> *:first-child': { marginLeft: 12 },
  '> *:last-child': { marginRight: 12, fontSize: 11 }
})

// For the container of the camera section in the center of the container
// This is the black, pill-like comp that is new with the iPhone 14 Max

const IphoneCamera = styled('div', {
  position: 'relative',
  width: 84,
  minWidth: 84,
  height: 24,
  background: '#000',
  borderRadius: '$pill'
})

// For the container of the content for the items on the side of the iphone header
// These are to the left and the right of the camera in the center of the container

const IphoneHeaderSide = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: 'calc( 50% - 14px )',
  height: '100%',
  '> *:not(:last-child)': { marginRight: 6 }
})

// ---------- This is the end of declarations ---------- //

export const IphoneTop = () => {
  return(

    <IphoneHeader>
      <IphoneHeaderSide>
        <Heading title="05:29" />
      </IphoneHeaderSide>

      <IphoneCamera />

      <IphoneHeaderSide>
        <IconNetwork />
        <Heading title="5G" />
        <IconBattery />
      </IphoneHeaderSide>
    </IphoneHeader>

  )
}
