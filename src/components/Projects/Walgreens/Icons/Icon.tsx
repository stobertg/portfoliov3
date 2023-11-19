import React from 'react'
import { styled } from '@theme'

// For the master container of the individual Walgreen icons
// This set the sizing ad position of the icon within the master container

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

// -------------- Typescript declarations -------------- //

interface IconProps {
  icon: string
}

// ---------- This is the end of declarations ---------- //

export const WagIcon = ({ icon }:IconProps) => {
  return(

    <IconWrap aria-hidden>
      <svg><use xlinkHref={`/projects/wag/icons/symbol-defs.svg#icon__${ icon }`}></use></svg>
    </IconWrap>	

  )
}