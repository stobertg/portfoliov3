import React from 'react'
import { styled } from '@theme'
import { Heading, Icon } from '@components'
import { Card } from '../../../../../Shared/'

// This contains all of the content within the master card container
// This has the main title on the top and the list of items below

const InfoContent = styled('div', {
  position: 'relative',
  width: '85%',
  margin: '0 auto',
  padding: '20px 0',
  '> *:not(:last-child)': { marginBottom: 12 }
})

// For the container of the list of information pertaining to the user
// This describes all the medical information that would be relevant to the responder(s)

const InfoList = styled('div', {
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
  padding: '12px 0',
  lineHeight: 1.5,
  '> *:first-child': { marginTop: 2 },
  '> *:not(:last-child)': { marginRight: 12 }
})

// -------------- Typescript declarations -------------- //

interface InfoProps {
  title: string
  listItems?: {
    icon?: string
    title?: string
    titles?: { title: string }[]
  }[]
}

// ---------- This is the end of declarations ---------- //

export const MedicalInfoCard = ({ title, listItems }:InfoProps) => {
  return(

    <Card>
      <InfoContent>
        <Heading heavy size="l0" color="secondary" {...{ title }} />

        <InfoList>
          <ul>
            { listItems?.map(( listItem, i ) => (
              <li key={`list-item-${ i }`}>

                <LineItem>
                  <Icon size="l0" icon={ listItem.icon } />
                  { listItem.titles ? (
                    <div>
                      { listItem.titles.map(( title, j ) => (
                        <div key={`item-${ j }`}>{ title.title }</div>
                      ))}
                    </div>
                  ) : (
                    <div>{ listItem.title }</div>
                  )}
                </LineItem>

              </li>
            ))}
          </ul>
        </InfoList>
      </InfoContent>
    </Card>

  )
}
