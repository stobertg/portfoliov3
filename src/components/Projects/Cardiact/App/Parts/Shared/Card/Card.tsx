import React from 'react'
import { styled } from '@theme'
import { Heading, Icon } from '@components'

// For the master container of the card 

const CardWrap = styled('div', {
  position: 'relative',
  width: '100%',
  background: '#151515',
  border: '1px solid #212121',
  borderRadius: '$r1',
})

const CardContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '85%',
  margin: '0 auto',
  padding: '20px 0',
  '> *:not(:last-child)': { marginBottom: 12 },

  variants: {
    spacing: {
      l0: { marginBottom: 8 },
      l1: { marginBottom: 24 }
    },

    direction: {
      horizontal: { 
        flexDirection: 'row',
        width: '88%',
        padding: '16px 0',
        '> *:not(:last-child)': { margin: '0 16px 0 0' },
      }
    },

    removeSpacing: {
      true: {
        width: '100%',
        padding: 0
      }
    }
  }
})

interface CardProps {
  spacing?: 'l0' | 'l1'
  direction?: 'horizontal'
  removeSpacing?: boolean
  children: React.ReactNode
}

export const Card = ({ 
    spacing, 
    direction,
    removeSpacing, 
    children 
  }:CardProps) => {

  return(

    <CardWrap>
      <CardContent {...{ spacing, direction, removeSpacing }}>{ children }</CardContent>
    </CardWrap>

  )
}
