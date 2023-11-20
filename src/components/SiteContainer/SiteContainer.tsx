import React from 'react'
import { styled, keyframes } from '@theme'
import { HeadTags, SiteHeader } from '@components'

// For the animation of the static background - super subtle
// By static I mean like static on a television ( i.e. noise )

const staticAnimation = keyframes({
  '0%':   { transform: 'translate3d( -50px, 50px, 0 )' },
	'50%':  { transform: 'translate3d( 50px, -50px, 0 )' },
	'100%': { transform: 'translate3d( -50px, 50px, 0 )' }
})

// For the master container of the foundational SiteContainer component
// This component is used to automate spacing, sizes, widths, ect for components wrapped within this components

const SiteWrap = styled('div', {
  position: 'relative',
  width: '100vw',
  minHeight: '100vh',
  overflow: 'hidden'
})

// For all of the content within the site
// This positions the content centered horizontally within the container

const SiteContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
  margin: '0 auto',
  padding: '150px 0 0',
  zIndex: 1,

  // The only variant option for this component is to automate the spacing between content blocks within the site
  // This will eventally space out all of the content for consistancy between blocks

  variants: {
    spacing: {
      l0: {},
      l1: { padding: '75px 0' },
      l2: { padding: '150px 0'},
      l3: { padding: '200px 0'}
    },

    // For the spacing between each of the sibling Block elements within the page
    // This will automate the spacing so that spacing is consistant throughout the site

    blockSpacing: {
      l0: { '> *:not(:last-child)': { marginBottom: 32 }},
      l1: { '> *:not(:last-child)': { marginBottom: 50 }},
      l2: { '> *:not(:last-child)': { marginBottom: 100, '@tablet': { marginBottom: 40 } }},
      l3: { '> *:not(:last-child)': { marginBottom: 150, '@tablet': { marginBottom: 75 }}},
      l4: { '> *:not(:last-child)': { marginBottom: 200, '@tablet': { marginBottom: 50 }}},
    }
  }
})

// For the container of the subtle noise animation in the background of the site
// This is positioned fixed within in the site and show a faint static animation in the background

const SiteBg = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',

  // For the setup of the static animation and applying the animation of it

  '&:before': {
    content: '',
    position: 'absolute',
    top: '-20%',
    left: '-20%',
    width: '180vw',
    height: '180vh',
    backgroundImage: 'url(data:image/png;base64,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)',
    animation: `${ staticAnimation } 300ms linear infinite`,
    transformOrigin: 'center center',
    transform: 'scale( 2 )',
    opacity: 0.5,
    zIndex: 2
  }
})

// -------------- Typescript declarations -------------- //

interface SiteContainerProps {
  hasContactForm?: boolean
  spacing?: 'l0' | 'l1' | 'l2' | 'l3'
  blockSpacing?: 'l0' | 'l1' | 'l2' | 'l3' | 'l4'
  children: React.ReactNode
  shareURL?: string
  pageTitle?: string
  content?: string
  socialImage?: string
}

// ---------- This is the end of declarations ---------- //

export const SiteContainer = ({
    spacing, // Optional - For the top and bottom spacing of the page content
    blockSpacing, // Optional - For the uniform spacing between each of the blocks that make up the page
    children, // Required - For all of the content within a page
    shareURL, // Required - For the share url of the specific page
    pageTitle, // Required - For the title of the page within the head tags
    content, // Required - For the description of the page within the head tags
    socialImage // Required - For the socially shared image 
  }: SiteContainerProps ) => {
  
  return(

    <SiteWrap className="main-site">
      <HeadTags {...{ shareURL, pageTitle, content, socialImage }} />

      <SiteHeader />
      <SiteContent {...{ spacing, blockSpacing }}>
        { children }
      </SiteContent>
      
      <SiteBg />
      <div id="modal-root"></div>
    </SiteWrap>
    
  )
}
