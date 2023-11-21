import React, { useState, useEffect } from 'react'
import { styled } from '@theme'
import { LogoLoop } from './LogoLoop/LogoLoop'
import { BgImageLoop, EndingAniamtion } from './Parts '

// For the master container of the hero section
// This holds the animation with the backgrounds and logos changing

const HeroWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  height: 600,
  '@desktop': { height: '90vh' },
  '@tablet': { height: '80vh' }
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

const HeroLogos = styled('div', {
  position: 'absolute',
  zIndex: 10
})

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

  )
}