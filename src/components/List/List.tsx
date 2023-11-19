import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

// For the master container of the List component
// This holds a traditional list supporting unordered lists

const ListWrap = styled('div', {
  position: 'relative',
  width: '100%',
  lineHeight: 1.3,
  '> *:not(:last-child)': { marginBottom: 12 }
})

// For the container of the unordered list
// This removes the default list style and basic structure set up

const Ul = styled('ul', {
  position: 'relative',
  width: '100%',
  listStyle: 'none',

  // For the container of the li 
  // This sets the default styling of the spacing between each of the li within the ul

  li: {
    position: 'relative',
    width: '100%',
    padding: '4px 0',
  },

  // For the supported variants of the basic list component
  // This allows for the spacing between each of the list items

  variants: {
    spacing: {
      l0: { li: { padding: 0 }},
      l1: { li: { padding: '8px 0', '@tablet': { padding: '4px 0' }}}
    },

    // For the ability to change the font size of the list items

    size: {
      l1: { fontSize: '$s1', '@tablet': { fontSize: 'initial' }}
    },

    // For the ability to change the default styling of sans serif font

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
  size?: 'l1'
  listItems: {
    title: string
  }[]
}

// ---------- This is the end of declarations ---------- //

export const List = ({ 
    title, // Required - For the title of the list item
    spacing, // Optional - For the spacing between each of the list items
    size, // Optional - To make the font size bigger than the default
    font, // Optional - For the ability to change the text to serif - sans serif is default
    listItems // Required - For the li items within the ul
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
