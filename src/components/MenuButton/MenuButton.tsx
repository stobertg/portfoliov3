import React, { useState } from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

// For the master container of the menu button within the global nav
// This buttons shows up only on tablet breakpoints, replacing the nav with all the buttons shown by default

const ButtonWrap = styled('button', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  padding: '12px 20px',
  border: '1px solid $borderDeco',
  borderRadius: '$r1',
  transition: '$s1',
  '> *:not(:last-child)': { marginRight: 12 },
  '&:hover': { background: '$borderDeco' }
})

// For the hanburger icon on the left of the container
// This contains the traditional three lines that make up a hamburger menu - line on the top, middle, and the bottom

const HamburgerIcon = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 18,
  height: 12,

  // For the shared styling of the three lines in the container
  // This sets the width and position of the three lines within the master container

  'div, &:before, &:after': {
    position: 'absolute',
    width: '100%',
    height: 1,
    background: '$white',
    transition: '$s1'
  },

  // For the position of the lines on the top and the bottom
  // As well as the content attribute needed for the psuedo elements for the before and after

  '&:before, &:after': { content: '' },
  '&:before': { top: 0 },
  '&:after': { bottom: 0 },

  // Here we transform the hamburger icon once the button is clicked
  // This will transform the lines into the 'X' close icon that is seen in traditional hamburger icons

  variants: {
    active: {
      true: {
        div: { opacity: 0 },
        '&:before': { transform: 'translate3d( 0, 5px, 0 ) rotate( 45deg )' },
        '&:after': { transform: 'translate3d( 0, -6px, 0 ) rotate( -45deg )' }
      }
    }
  }
})

// For the container of the title to the right of the hamburger icon
// This is set to change between a 'Menu' title and a 'Close' title

const MenuTitles = styled('div', {
  position: 'relative',
  height: 18,
  overflow: 'hidden'
})

// For the container of the titles contained within the Menu Titles div
// This will set the text to display based on if the menu is opened or closed

const MenuTitleHeadings = styled('div', {
  position: 'relative',
  width: '100%',
  transition: '$s2 ease',
  '> *': { transition: '$s1' },
  '> *:last-child': { opacity: 0 },

  // Here we set an animation for the title to change if the menu is opened or close
  // This will animated the text up or down - where the menu is opened will say 'Close' or closed will say 'Menu'

  variants: {
    active: {
      true: {
        transform: 'translateY( -50% )',
        '> *:first-child': { opacity: 0 },
        '> *:last-child': { opacity: 1 }
      }
    }
  }
})

// -------------- Typescript declarations -------------- //

interface MenuProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

// ---------- This is the end of declarations ---------- //

export const MenuButton = ({ onClick }:MenuProps) => {
  const [ active, setActive ] = useState( false )
  const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => { setActive( !active ); onClick( event ) }

  return(

    <ButtonWrap onClick={ openMenu }>
      <HamburgerIcon active={ active }><div /></HamburgerIcon>
      <MenuTitles>
        <MenuTitleHeadings active={ active }>
          <Heading bold title="Menu" />
          <Heading bold title="Close" />
        </MenuTitleHeadings>
      </MenuTitles>
    </ButtonWrap>

  )
}
