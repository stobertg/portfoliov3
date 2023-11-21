import React from 'react'
import { styled, keyframes } from '@theme'
import { Logo } from '../Logo/Logo'
import { Heading } from '@components'

// For all of the animations used within the end animation
// This set the MXML logo on black, scales back while the background turns white, and reveals the text and arrow below

const logoAnimation = keyframes({
  '0%, 40%': { transform: 'scale( 1.7 )' },
  '100%': { transform: 'scale( 1 )' }
})

// Here we change the color of the logo on scale back

const logoColor = keyframes({
  '0%, 50%': { fill: '$white' },
  '100%': { fill: '$black' }
}) 

// Here we set the intro of the Creative text

const setCreativeText = keyframes({
  '0%, 99%': { opacity: 0 },
  '100%': { opacity: 1 }
}) 

// Here we reveal the Creative text

const showCreativeText = keyframes({
  '0%': { transform: 'translateX( 0 )' },
  '100%': { transform: 'translateX( 100% )' }
}) 

// Here we set the Arrow on the bottom to come into view

const showArrow = keyframes({
  '0%, 99%': { opacity: 0 },
  '100%': { opacity: 1 }
}) 

// Here we start the arrown animation

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

// For the creative text that is displayed once the MXML logo scales all of th way back
// This animates as being revealed from left to right

const CreativeText = styled('div', {
  position: 'absolute',
  bottom: -20,
  left: 0,
  right: 0,
  margin: 'auto',
  animation: `${ setCreativeText } 3s forwards`,
  overflow: 'hidden',

  // Here we adjust the default styling of the text here since this is a one-off
  // We set the text to be all uppercase and the letter spacing to be wider

  '> *': { 
    textTransform: 'uppercase',
    letterSpacing: 10
  },

  // For the bar that reveals the text within the animation
  // This takes up the full width and height of the container and then animates left to reveal the text

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

// For the master container of the arrow animation on the bottom of the hero
// We need a master container so that we can animate the arrow witin it

const ScrollDown = styled('div', {
  position: 'absolute',
  bottom: 0,
  margin: '50px 0',
  overflow: 'hidden',
  animation: `${ showArrow } 3s forwards`,
})

// For the container of the arrow on the bottom of the hero container
// This shows right after the 'Creative' text shows and is used as affordance for the user to scroll down

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
  // This is attached to the two arrow lines on the bottom of the container

  '&:before': {
    content: '',
    position: 'absolute',
    width: 2,
    bottom: 1,
    height: 'calc( 100% - 3px )',
    background: '$black'
  },
  
  // For the styling of the the lines that form the arrow on the bottom of the container
  // These are attached to the line in the middle to form the full arrow

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