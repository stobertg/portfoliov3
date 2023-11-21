import React, { useState, useEffect } from 'react'
import { styled } from '@theme'

// For the master container of the logo looping animation
// This holds all of the logo variants and then ends on the black and white scaled animations

const LogoWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  minWidth: 550,
  maxWidth: 550,
  width: '100%',

  '@tablet': {
    minWidth: 400,
    maxWidth: 400
  },

  // For the sizing and position of the logos within the master containers
  // This makes sure all of the logos are the same size, as they are stacked on top of one another

  img: { 
    position: 'absolute',
    width: '100%',
    height: 'auto',
  },

  variants: { 
    size: { 
      l0: { 
        minWidth: 150,
        maxWidth: 150,
        height: 60
      }
    }
  }
})

interface LogoProps {
  logos: any
  size?: 'l0'
  backToHome?: boolean
}

// ---------- This is the end of declarations ---------- //

export const LogoLoop = ({ logos, size, backToHome }:LogoProps) => {
  const [ currentLogoIndex, setCurrentLogoIndex ] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex(( prevIndex ) => ( prevIndex + 1 ) % logos.length )
    }, 4000 / logos.length )

    return () => clearInterval( interval )
  }, [ logos.length ]);

  return (

    <LogoWrap {...{ size }}>
      <img src={logos[ currentLogoIndex ]} alt="mxml logo" />
    </LogoWrap>

  )
}