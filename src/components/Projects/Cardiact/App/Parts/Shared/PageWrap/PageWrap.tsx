import React from 'react'
import { styled } from '@theme'

const PageContent = styled('div', {
  position: 'relative',
  width: '100%',
  padding: '0 10px 80px',
  '> *:not(:last-child)': { marginBottom: 8 }
})

interface PageProps {
  children: React.ReactNode
}

export const PageWrap = ({ children }:PageProps) => {
  return(

    <PageContent>{ children }</PageContent>

  )
}
