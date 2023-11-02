import React from 'react'
import { styled } from '@theme'

const BatteryWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 21,
  height: 11,
  paddingRight: 2,

  // For the nub on the right of the container

  '&:after': { 
    content: '',
    position: 'absolute',
    right: 0,
    width: 1,
    height: 4,
    borderRadius: '0 1px 1px 0',
    background: '#878787'
  }
})

const BatteryBase = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  height: '100%',
  borderRadius: 4,
  border: '0.5px solid #878787',

  // For the current power line in the center of the container

  '&:before': {
    content: '',
    position: 'absolute',
    left: 2,
    width: '50%',
    height: '70%',
    borderRadius: 2,
    background: '$white',
  }
})

export const IconBattery = () => {
  return(

    <BatteryWrap>
      <BatteryBase />
    </BatteryWrap>

  )
}
