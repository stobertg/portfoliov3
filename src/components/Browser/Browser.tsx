import React from 'react'
import { styled } from '@theme'
import { Icon, Heading } from '@components'

const BrowserWrap = styled('div', {
  position: 'relative',
  width: '100%',
  background: '#2b3340',
  borderRadius: '$r2 $r2 0 0'
})

const BrowserContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  width: '95%',
  margin: '0 auto',
  padding: '12px 0'
})

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

const BrowserSide = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',

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

}

export const Browser = ({}:BrowserProps) => {
  return(

    <BrowserWrap>
      <BrowserContent>
        <BrowserSide>
          <BrowserControls><span /></BrowserControls>
          <Icon size="l0" icon="book-open" />
          <Icon size="l0" icon="chevron-left" />
          <Icon size="l0" icon="chevron-right" />
        </BrowserSide>

        <BrowserUrl>
          <Icon size="l0" icon="case-sensitive" />
          <Heading align="center" title="gather.goldininstitute.org" />
          <Icon size="l0" icon="rotate-cw" />
        </BrowserUrl>

        <BrowserSide>
          <span />
          <Icon size="l0" icon="share" />
          <Icon size="l0" icon="plus" />
          <Icon size="l0" icon="panel-right" />
        </BrowserSide>
      </BrowserContent>  

      <BrowserScreen><img src="/projects/gather/profile.png" alt="Gather E-learning platform" /></BrowserScreen>
    </BrowserWrap>

  )
}
