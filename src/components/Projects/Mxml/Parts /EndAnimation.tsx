import React from 'react'
import { styled, keyframes } from '@theme'
import { Logo } from '../Logo/Logo'
import { Heading } from '@components'

const logoAnimation = keyframes({
  '0%, 40%': { transform: 'scale( 1.7 )' },
  '100%': { transform: 'scale( 1 )' }
})

const logoColor = keyframes({
  '0%, 50%': { fill: '$white' },
  '100%': { fill: '$black' }
}) 

const setCreativeText = keyframes({
  '0%, 99%': { opacity: 0 },
  '100%': { opacity: 1 }
}) 

const showCreativeText = keyframes({
  '0%': { transform: 'translateX( 0 )' },
  '100%': { transform: 'translateX( 100% )' }
}) 

const showArrow = keyframes({
  '0%, 99%': { opacity: 0 },
  '100%': { opacity: 1 }
}) 

const animateArrow = keyframes({
  '0%': { transform: 'translateY( -100% ) scale( 0 )', opacity: 0 },
  '50%': { transform: 'translateY( 0 ) scale( 1 )', opacity: 1 },
  '100%': { transform: 'translateY( 100% ) scale( 0 )', opacity: 0 },
})

// For the animation of the ending part of the animation
// This scales the logo back, and then back end, with the bg chnaging from black to white

const backgroundChange = keyframes({
  '0%, 50%': { background: '$black' },
  '100%': { background: '$white' }
})

// For the master container of the ending animation
// This holds the black and white transition where the logo scales in and then out

const EndingWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  height: '100%',
  animation: `${ backgroundChange } 3s cubic-bezier(.74,.08,.15,.83) forwards`,
})

// For the container of the logo in the center of the container
// This will scale in and out

const EndingLogo = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  maxWidth: 300,
  width: '100%',
  color: '$black',
  animation: `${ logoAnimation } 3s cubic-bezier(.74,.08,.15,.83) forwards`,
  '@tablet': { maxWidth: 200 },
  svg: { 
    animation: `${ logoColor } 3s cubic-bezier(.74,.08,.15,.83) forwards`
  }
})  

const CreativeText = styled('div', {
  position: 'absolute',
  bottom: -20,
  left: 0,
  right: 0,
  margin: 'auto',
  animation: `${ setCreativeText } 3s forwards`,
  overflow: 'hidden',

  '> *': { 
    textTransform: 'uppercase',
    letterSpacing: 10
  },

  '&:after': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: '$white',
    animation: `${ showCreativeText } 2s cubic-bezier(.25,.1,.25,1) forwards`,
    animationDelay: '3s'
  },

  '@tablet': { '*': { fontSize: '$s0 !important' }} 
})

const ScrollDown = styled('div', {
  position: 'absolute',
  bottom: 0,
  margin: '50px 0',
  overflow: 'hidden',
  animation: `${ showArrow } 3s forwards`,
})

const ArrowIcon = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
  position: 'relative',
  width: 30,
  height: 32,
  transform: 'translateY( -100% )',
  animation: `${ animateArrow } 2s cubic-bezier(.25,.1,.25,1) infinite`,
  animationDelay: '4s',

  // For the middle line, centered vertically in the container

  '&:before': {
    content: '',
    position: 'absolute',
    width: 2,
    bottom: 1,
    height: 'calc( 100% - 3px )',
    background: '$black'
  },

  span: {
    position: 'relative',
    height: 14,
    width: 14,
    marginBottom: 3,
    borderBottom: '2px solid $black',
    borderRight: '2px solid $black',
    transform: 'rotate( 45deg )',
  }
})

// ---------- This is the end of declarations ---------- //

export const EndingAniamtion = () => {
  return(

    <EndingWrap>
      <EndingLogo>
        <Logo />
        <CreativeText>
          <Heading align="center" size="l1" title="Creative" />
        </CreativeText>
      </EndingLogo>

      <ScrollDown>
        <ArrowIcon><span></span></ArrowIcon>
      </ScrollDown>
    </EndingWrap>

  )
}