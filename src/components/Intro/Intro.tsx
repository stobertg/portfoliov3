import React from 'react'
import { styled } from '@theme'
import { Heading, Text } from '@components'

const IntroWrap = styled('div', {
  position: 'relative'
})

const IntroStats = styled('div', {

})

interface IntroProps {
  title: string
  text: React.ReactNode
}

export const Intro = ({ title, text }:IntroProps) => {
  return(

    <IntroWrap>
      <Heading {...{ title }} />
      <Text>{ text }</Text>
      <IntroStats></IntroStats>
    </IntroWrap>

  )
}
