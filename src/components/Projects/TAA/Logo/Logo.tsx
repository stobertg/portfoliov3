import React from 'react'
import { styled } from '@theme'

// For the master container of the TAA hero graphic
// This contains the logo on the top of the container and the seco icons below it

const LogoWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  '> *:not(:last-child)': { marginBottom: 32 }
})

// For the container of the image on the top of the container
// This sets the size of the logo of TAA

const LogoImage = styled('div', {
  position: 'relative',
  width: 100
})

// For the container of the decrotive icons on the bottom of the container
// This contains the sewing icon on the left, sizzors in the middle, and the thimble icon on the right

const LogoDeco = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  width: 150,

  // For the sizing of the icons within the container
  // Here we also make them more subtle by setting the opacity to be a bit lower

  '> div': { 
    width: 28, 
    height: 28, 
    opacity: 0.5,
    img: { height: '100%' }
  }
})

// ---------- This is the end of declarations ---------- //

export const TAALogo = () => {
  return(

    <LogoWrap>
      <LogoImage>
        <img src="/projects/taa/deco/logo.svg" alt="The Apparel Agency logo" />
      </LogoImage>

      <LogoDeco>
        <div><img src="/projects/taa/deco/sewing.svg" alt="The Apparel Agency logo" /></div>
        <div><img src="/projects/taa/deco/siz.svg" alt="The Apparel Agency logo" /></div>
        <div><img src="/projects/taa/deco/thimble.svg" alt="The Apparel Agency logo" /></div>
      </LogoDeco>
    </LogoWrap>

  )
}
