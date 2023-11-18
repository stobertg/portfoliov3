import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useScrollPosition, useScrollDirection } from '@lib'
import { styled } from '@theme'
import { Logo, Heading } from '@components'

// For the master container of the global site header
// This is always positioned on the top of the site, and hides on scroll down and shows on scroll up

const SiteContainer = styled('header', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  transition: '$s1',
  zIndex: 9000
})

// For the container of all of the links within the site container
// This holds the logo on the left and the links on the right of the container

const Nav = styled('nav', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  maxWidth: 1400,
  width: '95%',
  margin: '0 auto',
  padding: '20px 0'
})

const NavLinks = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  '> *:not(:last-child)': { marginRight: 12 }
})

const NavLink = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  padding: '8px 0',

  '&:after': { 
    content: '',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 2,
    background: '$white',
    transform: 'scale( 0, 1 )',
    transition: '$s1'
  },

  '&:hover:after': { transform: 'scale( 1, 1 )' }
})

// -------------- Typescript declarations -------------- //

interface HeaderProps {

}

// ---------- This is the end of declarations ---------- //

export const SiteHeader = ({}:HeaderProps) => {
  const scrollPos = useScrollPosition()
  const scrollDirection = useScrollDirection()
  const [ showHeader, setShowHeader ] = useState( true )

  useEffect(() => {
    const timerId = setTimeout(() => {
      setShowHeader(true);
    }, 7000)
    
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowHeader(true);
        clearTimeout(timerId);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timerId);
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);
  
  if (!showHeader) {
    return null
  }

  return(

    <SiteContainer style={{ transform: `translateY( ${ scrollDirection == 'down' ? '-100%' : '0' })` }}>
      <Nav>
        <Logo />

        <NavLinks>
          <Link href="/"><a><NavLink><Heading bold size="l0" title="Work" /></NavLink></a></Link>
          <Link href="/"><a><NavLink><Heading bold size="l0" title="About" /></NavLink></a></Link>
          <button><NavLink><Heading bold size="l0" title="Contact" /></NavLink></button>
        </NavLinks>
      </Nav>
    </SiteContainer>

  )
}
