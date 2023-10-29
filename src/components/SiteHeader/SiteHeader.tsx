import React from 'react'
import { styled } from '@theme'
import { Logo } from '@components'

// For the master container of the global site header
// This is always positioned on the top of the site, and hides on scroll down and shows on scroll up

const SiteContainer = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw'
})

// For the container of all of the links within the site container
// This holds the logo on the left and the links on the right of the container

const Nav = styled('nav', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  width: '95%',
  margin: '0 auto',
  padding: '20px 0'
})

// -------------- Typescript declarations -------------- //

interface HeaderProps {

}

// ---------- This is the end of declarations ---------- //

export const SiteHeader = ({}:HeaderProps) => {
  return(

    <SiteContainer>
      <Nav><Logo /></Nav>
    </SiteContainer>

  )
}
