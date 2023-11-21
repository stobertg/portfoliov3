import React, { useState, useEffect } from 'react'
import { styled } from '@theme'
import { Text } from '@components'
import { LogoLoop } from './LogoLoop/LogoLoop'
import { BgImageLoop, EndingAniamtion } from './Parts '

// For the master container of the Hero animation for MXML Creative site
// This is shown within the CSS Animations page

const HeroMaster = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginBottom: 12 }
})

// For the master container of the hero section
// This holds the animation with the backgrounds and logos changing

const HeroWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  height: 600,
  '@tablet': { height: 500 }
})

// For the container of the changing logos in the center of the master container
// These logos are a bunch of different variantions of the main one, with the animation ending on the main one

const HeroContent = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  height: '100%'
})

// For the container of the logos in the center of the master parent container
// This sets the logos in the center and to sit above the background images

const HeroLogos = styled('div', {
  position: 'absolute',
  zIndex: 10
})

// For the container of the start animation which loops through the hero images and the logos
// This Animations plats first for sometime before the ending animations appears

const StartAnimation = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 10
})

// For the container of the end nanimation that plays right after the start aniamtion
// This shows the MXML logo on a black background and then scales back, showing the 'Creative' text below

const EndAnimation = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%'
})

// -------------- Typescript declarations -------------- //

interface HeroProps {
  logos: any
  backgroundImages: any
}

// ---------- This is the end of declarations ---------- //

export const MxmlHero = ({ logos, backgroundImages }:HeroProps) => {
  const [ showStartAnimation, setShowStartAnimation ] = useState( true )
  const [cycle, setCycle] = useState(0); // New state to track animation cycles

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowStartAnimation(!showStartAnimation); // Toggle the animation state
      setCycle(c => c + 1); // Increment the cycle count to trigger useEffect again
    }, 6000);

    return () => {
      clearTimeout(timer);
    };
  }, [cycle]);

  return(

    <HeroMaster>
      <HeroWrap>
        <HeroContent>
          { showStartAnimation ? (

            <StartAnimation>
              <HeroLogos><LogoLoop {...{ logos }} /></HeroLogos>
              <BgImageLoop images={ backgroundImages } />
            </StartAnimation>

          ) : (

            <EndAnimation>
              <EndingAniamtion />
            </EndAnimation>

          )}
        </HeroContent>
      </HeroWrap>

      <Text align="center" color="secondary">
        <p>Design by <a href="https://mxmlcreative.com/" target="_blank" rel="noreferrer">Stefan Clark</a></p>
      </Text>
    </HeroMaster>

  )
}
