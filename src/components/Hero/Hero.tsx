import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

const HeroWrap = styled('div', {
  position: 'relative',
  width: '100%'
})

const HeroContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  '> *:not(:last-child)': { marginBottom: 32 }
})

const HeroHeading = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '> *:not(:last-child)': { marginBottom: 8 }
})

const HeroGraphic = styled('div', {

})

const HeroImage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'realtive',

  img: { 
    width: 150
  }
})

interface HeroProps {
  heroGraphic?: React.ReactNode
  heroImage?: string
  heroImageAlt?: string
  title: string
  subtitle?: string
}

export const Hero = ({ 
    heroGraphic,
    heroImage,
    heroImageAlt,
    title, 
    subtitle 
  }:HeroProps) => {

  return(

    <HeroWrap>
      <HeroContent>
        { heroGraphic ? ( 
          <HeroGraphic>{ heroGraphic }</HeroGraphic> 
        ) : (
          <HeroImage><img src={ heroImage } alt={ heroImageAlt } /></HeroImage>
        )}

        <HeroHeading>
          <Heading heavy htag='1' size="l6" {...{ title }} />
          <Heading size="l2" color="secondary" title={ subtitle } />
        </HeroHeading>
      </HeroContent>
    </HeroWrap>

  )
}
