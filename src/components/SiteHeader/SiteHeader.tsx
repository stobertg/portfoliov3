import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useScrollPosition, useScrollDirection } from '@lib'
import { styled } from '@theme'
import { Logo, Heading } from '@components'

// For the master container of the global site header
// This is always positioned on the top of the site, and hides on scroll down and shows on scroll up

const HeaderWrap = styled('header', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  transition: '$s1',
  zIndex: 9000,

  variants: {
    active: {
      true: { background: '#101010' }
    }
  },

  // For the blur background behind the header that gives the header depth on the content below

  '&:before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    
    variants: {
      active: {
        true: { backdropFilter: 'blur( 10px )' }
      }
    }
  }
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
  padding: '12px 0'
})

// For the container of the links on the right side of the container
// This holds all of the nav buttons for the site, opposite of the logo on the left

const NavLinks = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  '> *:not(:last-child)': { marginRight: 12 }
})

// For the styling of the individual nav links within the container
// This holds the button and the underline that animates on hover

const NavLink = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  padding: '8px 0',

  // For the line on the bottom, that shows up when the user hovers over the link
  // By default, the line is hidden and we set the styling here for the reveal

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

  // When the user hovers of the button, the underline is shown below

  '&:hover:after': { transform: 'scale( 1, 1 )' }
})

// ---------- This is the end of declarations ---------- //

export const SiteHeader = () => {
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

    <HeaderWrap style={{ transform: `translateY( ${ scrollDirection == 'down' ? '-100%' : '0' })` }}>
      <Nav>
        <Link href="/"><a><Logo /></a></Link>

        <NavLinks>
          <Link href="/"><a><NavLink><Heading bold size="l0" title="Work" /></NavLink></a></Link>
          <Link href="/about"><a><NavLink><Heading bold size="l0" title="About" /></NavLink></a></Link>
          <button><NavLink><Heading bold size="l0" title="Contact" /></NavLink></button>
        </NavLinks>
      </Nav>
    </HeaderWrap>

  )
}
