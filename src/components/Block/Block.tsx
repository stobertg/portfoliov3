import React from 'react'
import "@animxyz/core"
import { XyzTransition } from '@animxyz/react'
import { styled } from '@theme'

// For the master container of the block component
// This component is the building block of the site, used to be a master parent inside of the SiteContainer

const BlockWrap = styled('div', {
  position: 'relative',
  width: '100%'
})

// For the container of all of the content within the master container
// This is mainly used to be able to set various width within the site, based on needs

const BlockContent = styled('div', {
  position: 'relative',
  width: '100%',
  margin: '0 auto',

  '> *:not(:last-child)': { 
    marginBottom: 80,
    '@tablet': { marginBottom: 40 }
  },

  // For the various widths supported
  // By default the width is set at 100% and based on needs, we can adjust for the content

  variants: {
    width: {
      small: { maxWidth: 950, width: '90%' },
      medium: { maxWidth: 1200, width: '90%' },
      large: { maxWidth: 1300, width: '90%' }
    },

    // For the optional spacing of the content within the block container
    // This automates the spacing between each of the content blocks wihtin it

    spacing: {
      l0: { '> *:not(:last-child)': { marginBottom: 32 }},
      l1: { '> *:not(:last-child)': { marginBottom: 52 }},
      l2: { '> *:not(:last-child)': { marginBottom: 100, '@tablet': { marginBottom: 75 } }}
    }
  }
})

// -------------- Typescript declarations -------------- //

interface BlockProps {
  width?: 'small' | 'medium' | 'large'
  spacing?: 'l0' | 'l1' | 'l2'
  animationDelay?: string
  animateUp?: boolean
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Block = ({ 
    width, // Optional - Accomidating various widths based on needs
    spacing, // Optional - For the spacing of the content items within the container
    animationDelay,
    animateUp,
    children // Required - For the content within the component
  }:BlockProps) => {

  return(

    <XyzTransition xyz={`fade fade ${ animateUp ? 'down-25%' : undefined } duration-10 ${ animationDelay ? 'down-' + animationDelay : undefined }`} appearVisible>
      <BlockWrap>
        <BlockContent {...{ width, spacing }}>
          { children }
        </BlockContent>
      </BlockWrap>
    </XyzTransition>

  )
}
