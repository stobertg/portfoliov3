import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

// For the master container of the List component
// This holds 

const ListWrap = styled('div', {
  position: 'relative',
  width: '100%',
  lineHeight: 1.3,

  '> *:not(:last-child)': {
    marginBottom: 12
  }
})

const Ul = styled('ul', {
  position: 'relative',
  width: '100%',
  listStyle: 'none',

  li: {
    position: 'relative',
    width: '100%',
    padding: '4px 0',
  },

  variants: {
    spacing: {
      l0: { li: { padding: 0 }},
      l1: { li: { padding: '8px 0', '@tablet': { padding: '4px 0' }}}
    },

    size: {
      l0: {},
      l1: { fontSize: '$s1', '@tablet': { fontSize: 'initial' }}
    },

    font: {
      serif: { 'li *': { fontFamily: '$serif' }}
    }
  }
})

// -------------- Typescript declarations -------------- //

interface ListProps {
  title?: string
  spacing?: 'l0' | 'l1'
  font?: 'serif'
  size?: 'l0' | 'l1'
  listItems: {
    title: string
  }[]
}

// ---------- This is the end of declarations ---------- //

export const List = ({ 
    title, 
    spacing, 
    size,
    font, 
    listItems 
  }:ListProps) => {

  return(

    <ListWrap>
      { title && ( <Heading heavy size="l2" {...{ title }} /> )}

      <Ul {...{ spacing, font, size }}>
        { listItems.map(( listItem, i ) => (
          <li key={`listItem-${ i }`}><Heading title={ listItem.title } /></li>
        ))}
      </Ul>
    </ListWrap>

  )
}
