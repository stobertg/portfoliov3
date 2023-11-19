import React from 'react'
import { styled } from '@theme'

const IconWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 85,
  height: 85,
  color: '$white',
  svg: { width: '68%', height: '68%', fill: '$white' }
})

interface IconProps {
  icon: string
}

export const WagIcon = ({ icon }:IconProps) => {
  return(

    <IconWrap aria-hidden>
      <svg>
      	<use xlinkHref={`/projects/wag/icons/symbol-defs.svg#icon__${ icon }`}></use>
      </svg>
    </IconWrap>	

  )
}