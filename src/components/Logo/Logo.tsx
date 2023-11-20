import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

// For the master container of the Tyler Stober logo
// This holds the logo mark on the left of the container and the Tyler Stober text on the right

const LogoWrap = styled('div', {
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  '> *:not(:last-child)': { marginRight: 12 },
  '@tablet': { '> *:not(:first-child)': { display: 'none' }}
})

// For the master container of the Tyler Stober logo
// This contains the 'T' with the 'S' wrapped around it

const LogoContent = styled('figure', {
  position: 'relative',
	width: 46,
	height: 70,

  // For the sizing of the logo on the left of the container

  variants: {
    size: {
      l0: { transform: 'scale( 0.6 )' }
    }
  }
})

// For the lines making up the 'T' within the logo
// This holds the horizontal slant on the top and the vertical line in the middle of the container

const Tyler = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  width: '100%',
  height: '100%',

  // For the shared styles of the psuedo elements

  '&:before, &:after': {
    content: ' ',
    position: 'absolute',
    background: '$yellow',
    zIndex: 1
  },

  // For the slant on the top of the T

  '&:before': {
    top: 8,
    width: '100%',
    height: 10,
    transform: 'skewY(-20deg)',
    borderRadius: '2px 2px 2px 2px'
  },

  // For the straight line below the T - the base of the T

  '&:after': {
    top: 13,
    width: 10,
    height: 'calc(100% - 16px)',
    transform: 'skewY(31deg)',
    borderRadius: '0px 0px 2px 2px'
  }
})

// For the container of the 'S' that wraps around the 'T' graphic
// This is a layed component where the top of the 'S' sits behind the 'T' and the bottom of the 'S' sits above

const Stober = styled('div', {
  position: 'absolute',
  width: '91%',
  height: 43,
  bottom: 11,

  // For the shared styles of the psuedo elements
  // This holds two different things, the top 'S' behind the 'T' and the bottom 'S' above

  '&:before, &:after': {
    content: ' ',
    position: 'absolute',
    height: 10
  },

  // For the middle slant

  '&:before': {
    top: 8,
    width: '100%',
    background: '$gray900',
    transform: 'skewY(21deg)',
    borderRadius: '0px 2px 2px 2px',
    zIndex: 0
  },

  // For the bottom slant

  '&:after': {
    top: 26,
    right: 0,
    width: '85%',
    transform: 'skewY(-26deg)',
    background: '$gray900',
    borderRadius: '2px 0px 2px 2px',
    zIndex: 2
  }
})

// -------------- Typescript declarations -------------- //

interface LogoProps {
  nameHidden?: boolean
}

// ---------- This is the end of declarations ---------- //

export const Logo = ({ nameHidden }:LogoProps) => {
  return(

    <LogoWrap>
      <LogoContent size="l0">
        <Tyler /><Stober />
      </LogoContent>

      { nameHidden ?? ( <Heading bold size="l1" title="Tyler Stober" /> )}
    </LogoWrap>

  )
}
