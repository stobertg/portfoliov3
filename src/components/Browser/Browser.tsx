import React from 'react'
import { styled } from '@theme'
import { Icon, Heading } from '@components'

// For the master container of the browser component
// This holds the browser bar on the top of the container and the screen below it

const DeviceWrap = styled('div', {
  position: 'relative',
  width: '100%'
})

// For the container of the browser window on the top of the container
// This holds the foundational styling, and the background of the browser component

const BrowserWrap = styled('div', {
  position: 'relative',
  width: '100%',
  background: '#2b3340',
  borderRadius: '$r2 $r2 0 0'
})

// For the container of all of the content within the master container
// These holds the controls on the left and right and the url in the center of the container

const BrowserContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  width: '95%',
  margin: '0 auto',
  padding: '12px 0',
  '> *:last-child': { justifyContent: 'flex-end' }
})

// For the container of the URL in the center of the component
// This has the font size icon on the left, the reload button on the right and the url address in the center

const BrowserUrl = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  width: '50%',
  padding: '8px 12px',
  borderRadius: '$r0',
  background: '#444e61',
  fontSize: 12,
  '@smallDesktop': { width: '100%' }
})

// For the container of the buttons on the side of the browser bar
// This holds the typical icons you see in the the Safari browser and is used as a static feature

const BrowserSide = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  width: '25%',
  '> *:not(:last-child)': { marginRight: 32 },
  '@smallDesktop': { display: 'none' }
})

// For the container of the colored action buttons on the left side of the container
// This is to represent the closing, minimizing, and expanding of the browser

const BrowserControls = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 46,
  height: 10,
  '> *:not(:last-child)': { marginRight: 4 },

  // For the shared styling of the dots within the container
  // This sets the size of the dots and the colors are designated below

  'span, &:before, &:after': {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: '50%',
  },

  // For the placement and appearance of the dots on the left and right of the container
  // This is for the placement of the close button and the expand button

  'span': { background: 'yellow' },
  '&:before, &:after': { content: '' },
  '&:before': { left: 0, background: 'red' },
  '&:after': { right: 0, background: 'green' }
})

// For the container of the screen, below the browser header
// This contains the main part - showing off the product

const BrowserScreen = styled('div', {
  position: 'relative',
  width: '100%',
  borderRadius: '0 0 $r2 $r2',
  overflow: 'hidden',
  img: { display: 'flex' },

  // For the variant to set a height for the browser
  // This will make it so for a taller image to be overflow hidden, such as the images in the homepage background

  variants: {
    maxHeight: {
      l1: { maxHeight: 530 }
    }
  }
})

// -------------- Typescript declarations -------------- //

interface BrowserProps {
  url: string
  image?: string
  imageAlt?: string
  content?: React.ReactNode
  maxHeight?: 'l1'
}

// ---------- This is the end of declarations ---------- //

export const Browser = ({ 
    url, // Required - For the url address for web context (can be live or fake site)
    image, // Required if no 'content' - For the image on display
    imageAlt, // Required if image - For the alt text of the image
    content, // Required if no 'image' - For custom needs
    maxHeight // Optional - For cases where hright needs to be declared
  }:BrowserProps) => {

  return(

    <DeviceWrap>
      <BrowserWrap>
        <BrowserContent>
          <BrowserSide>
            <BrowserControls><span /></BrowserControls>
            <Icon size="l0" icon="book-open" />
            <Icon size="l0" icon="chevron-left" />
            <Icon size="l0" icon="chevron-right" />
          </BrowserSide>

          <BrowserUrl>
            <Heading bold title="Aa" />
            <Heading align="center" title={ url } />
            <Icon size="l0" icon="rotate-cw" />
          </BrowserUrl>

          <BrowserSide>
            <Icon size="l0" icon="share" />
            <Icon size="l0" icon="plus" />
            <Icon size="l0" icon="panel-right" />
          </BrowserSide>
        </BrowserContent>  
      </BrowserWrap>

      <BrowserScreen {...{ maxHeight }}>
        { image ? ( <img src={ image } alt={ imageAlt } /> ) : ( <>{ content }</> )}
      </BrowserScreen>
    </DeviceWrap>

  )
}
