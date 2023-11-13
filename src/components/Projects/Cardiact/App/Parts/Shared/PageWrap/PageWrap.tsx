import React from 'react'
import { styled } from '@theme'

// For the master container of the global page wrapper for the screens in CardiAct
// This holds all of the content of a screens, for most of the screens

const PageContent = styled('div', {
  position: 'relative',
  width: '100%',
  padding: '0 10px 80px',
  '> *:not(:last-child)': { marginBottom: 8 }
})

// -------------- Typescript declarations -------------- //

interface PageProps {
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const PageWrap = ({ children }:PageProps) => {
  return(

    <PageContent>{ children }</PageContent>

  )
}
