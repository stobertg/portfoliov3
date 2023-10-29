import React from 'react'
import { styled } from '@theme'

const BlockWrap = styled('div', {
  position: 'relative',
  width: '100%'
})

const BlockContent = styled('div', {
  position: 'relative',
  width: '100%',
  margin: '0 auto',

  variants: {
    width: {
      small: {},
      medium: { maxWidth: 1200, width: '90%' },
      large: {}
    }
  }
})

interface BlockProps {
  width?: 'small' | 'medium' | 'large'
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Block = ({ width, children }:BlockProps) => {
  return(

    <BlockWrap>
      <BlockContent {...{ width }}>
        { children }
      </BlockContent>
    </BlockWrap>

  )
}
