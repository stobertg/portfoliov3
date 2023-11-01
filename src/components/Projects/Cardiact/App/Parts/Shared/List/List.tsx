import React from 'react'
import { styled } from '@theme'
import { Icon } from '@components'
import { Chip } from '../'

// For the container of the list of information pertaining to the user
// This describes all the medical information that would be relevant to the responder(s)

const ListWrap = styled('div', {
  position: 'relative',
  width: '100%',

  // For thr container of the list, which sets the border between each of the Li
  // Here wwe also overright the default list style within the UL

  ul: {
    listStyle: 'none',
    fontSize: 13,
    '> li:not(:last-child)': { borderBottom: '1px solid #212121' }
  }
})

// For the container of each of the individual line items
// This holds the icon on the left and the text on the right of the container

const LineItem = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '12px 0',
  lineHeight: 1.5,
  '> *:first-child': { marginTop: 2 }
})

const ListItemMain = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  '> *:not(:last-child)': { marginRight: 12 }
})

// -------------- Typescript declarations -------------- //

interface ListProps {
  listItems?: {
    icon?: string
    title?: string
    titles?: { title: string }[]
    time?: string
  }[]
}

// ---------- This is the end of declarations ---------- //

export const List = ({ listItems }:ListProps) => {
  return(

    <ListWrap>
      <ul>
          { listItems?.map(( listItem, i ) => (
            <li key={`list-item-${ i }`}>

              <LineItem>
                <ListItemMain>
                  { listItem.icon && ( <Icon size="l0" icon={ listItem.icon } /> )}

                  { listItem.titles ? (
                    <div>
                      { listItem.titles.map(( title, j ) => (
                        <div key={`item-${ j }`}>{ title.title }</div>
                      ))}
                    </div>
                  ) : (
                    <div>{ listItem.title }</div>
                  )}
                </ListItemMain>

                { listItem.time && ( <Chip title={ listItem.time} /> )}
              </LineItem>

            </li>
          ))}
        </ul>
    </ListWrap>

  )
}
