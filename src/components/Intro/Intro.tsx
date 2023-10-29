import React from 'react'
import { styled } from '@theme'
import { Heading, Text, Grid, List } from '@components'

// For the master container of the intro component
// This holds all of the content concerning the project, which explains the project and roles/responsibilties

const IntroWrap = styled('div', {
  position: 'relative',
  width: '100%'
})

// For the container of the all of the content within the master container
// This holds the title on the top, the description in the middle and the roles/project info below

const IntroContent = styled('div', {
  position: 'relative',
  maxWidth: 900,
  width: '100%',
  margin: '0 auto',
  '> *:not(:last-child)': { marginBottom: 50 }
})

// For the container of the title and the text
// This is needed for spacing purposes between the main text and the skills and project info below

const IntroMain = styled('div', {
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginBottom: 32 }
})

// -------------- Typescript declarations -------------- //

interface IntroProps {
  title: string
  text: React.ReactNode
  skills: { title: string }[]
  project: { title: string }[]
}

// ---------- This is the end of declarations ---------- //

export const Intro = ({ 
    title, // Required - For the title of the intro (blurb about the project)
    text, // Required - For the text describing the project (below the title)
    skills, // Required - For the skills used to implement the project
    project  // Required - Basic info about the project
  }:IntroProps) => {

  return(

    <IntroWrap>
      <IntroContent>
        <IntroMain>
          <Heading htag="2" heavy size="l5" {...{ title }} />
          <Text fontSize="l1">{ text }</Text>
        </IntroMain>

        <Grid columns={ 3 }>
          <List spacing="l1" size="l1" font="serif" title="Roles / Skills" listItems={ skills } />
          <List spacing="l1" size="l1" font="serif" title="Project" listItems={ project } />
        </Grid>
      </IntroContent>
    </IntroWrap>

  )
}
