import React from 'react'
import { styled } from '@theme'

const LogoWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  '> *:not(:last-child)': { marginBottom: 32 }
})

const LogoImage = styled('div', {
  position: 'relative',
  width: 100
})

const LogoDeco = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  width: 150,

  '> div': { 
    width: 28, 
    height: 28, 
    opacity: 0.5,
    img: { height: '100%' }
  }
})

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
