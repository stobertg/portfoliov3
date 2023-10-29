import React from 'react'
import { styled } from '@theme'
import { Heading, Text, Grid, List } from '@components'

const IntroWrap = styled('div', {
  position: 'relative',
  width: '100%'
})

const IntroContent = styled('div', {
  position: 'relative',
  maxWidth: 900,
  width: '100%',
  margin: '0 auto',
  '> *:not(:last-child)': { marginBottom: 32 }
})

const IntroStats = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  width: '100%'
})

interface IntroProps {
  title: string
  text: React.ReactNode
  skills: { title: string }[]
  project: { title: string }[]
}

export const Intro = ({ title, text, skills, project }:IntroProps) => {
  return(

    <IntroWrap>
      <IntroContent>
        <Heading heavy size="l5" {...{ title }} />
        <Text fontSize="l1">{ text }</Text>
        <Grid columns={ 3 }>
          <List spacing="l1" size="l1" font="serif" title="Roles / Skills" listItems={ skills } />
          <List spacing="l1" size="l1" font="serif" title="Project" listItems={ project } />
        </Grid>
      </IntroContent>
    </IntroWrap>

  )
}
