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
      l0: { '> *:not(:last-child)': { marginBottom: 8 }},
      l1: { '> *:not(:last-child)': { marginBottom: 24 }}
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

// For the title on the top of the container
// This holds the icon on the left and the title on the right

const CardHeader = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginRight: 8 }
})

interface CardProps {
  spacing?: 'l0' | 'l1'
  direction?: 'horizontal'
  removeSpacing?: boolean
  icon?: string
  title?: string
  children: React.ReactNode
}

export const Card = ({ 
    spacing, 
    direction,
    removeSpacing, 
    icon,
    title,
    children 
  }:CardProps) => {

  return(

    <CardWrap>
      <CardContent {...{ spacing, direction, removeSpacing }}>
        { title && (
          <CardHeader>
            { icon && ( <Icon size="l0" {...{ icon }} /> )}
            <Heading heavy {...{ title }} />
          </CardHeader>
        )}

        { children }
      </CardContent>
    </CardWrap>

  )
}
