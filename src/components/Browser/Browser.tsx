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
  fontSize: 12
})

// For the container of the buttons on the side of the browser bar
// This holds the typical icons you see in the the Safari browser and is used as a static feature

const BrowserSide = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  width: '25%',
  '> *:not(:last-child)': { marginRight: 32 }
})

const BrowserControls = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 46,
  height: 10,
  '> *:not(:last-child)': { marginRight: 4 },

  // For the dots on the left center and right of the container

  'span, &:before, &:after': {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: '50%',
  },

  // For the 

  '&:before, &:after': {
    content: ''
  },

  // For the placement of the dots on the left and right of the container
  // This is for the placement of the close button and the expand button

  'span': { background: 'yellow' },
  '&:before': { left: 0, background: 'red' },
  '&:after': { right: 0, background: 'green' }
})

const BrowserScreen = styled('figure', {
  position: 'relative',
  width: '100%',
  borderRadius: '0 0 $r2 $r2',
  overflow: 'hidden'
})

interface BrowserProps {
  url: string
  image?: string
  imageAlt?: string
  content?: React.ReactNode
}

export const Browser = ({ 
    url,
    image,
    imageAlt,
    content
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

      <BrowserScreen>
        { image ? ( <img src={ image } alt={ imageAlt } /> ): ( <>{ content }</> )}
      </BrowserScreen>
    </DeviceWrap>

  )
}
