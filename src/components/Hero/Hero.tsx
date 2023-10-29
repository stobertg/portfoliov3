import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

const HeroWrap = styled('div', {

})

const HeroContent = styled('div', {
  
})

const HeroHeading = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})

interface HeroProps {
  title: string
  subtitle?: string
}

export const Hero = ({ 
    title, 
    subtitle 
  }:HeroProps) => {

  return(

    <HeroWrap>
      <HeroContent>
        <HeroHeading>
          <Heading heavy size="l6" {...{ title }} />
          <Heading size="l2" color="secondary" title={ subtitle } />
        </HeroHeading>
      </HeroContent>
    </HeroWrap>

  )
}
