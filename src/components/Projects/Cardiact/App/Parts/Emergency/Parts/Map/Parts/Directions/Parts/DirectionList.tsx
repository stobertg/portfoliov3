import React from 'react'
import { styled } from '@theme'
import { Heading, Icon } from '@components'

// For the master container of the direction list that lives in the middle of the direction container
// By default, this area is hidden and is revealed if the user clicks on the directions component

const DirListWrap = styled('div', {
  position: 'relative',
  width: '100%',
  transition: '$s2 ease',
  transitionDelay: '150ms',

  // Since this component is hidden by default, we set styling for each cases
  // This will allow for a transition for the list to animate in
  
  variants: {
    collapsed: {
      true: { transform: 'translateY( 20px )', opacity: 0 },
      false: { transform: 'translateY( 0 )', opacity: 1 }
    }
  }
})

// For the container of all of the content within the master container
// This contains the list fo directions with the icon on the left and the directions to the right

const DirList = styled('div', {
  position: 'relative',
  width: '85%',
  margin: '0 auto',
  paddingBottom: 8,
  ul: { listStyle: 'none' },

  // Here we set the spacing and borders for each of the direction items

  li: {
    position: 'relative',
    width: '100%',
    padding: '12px 0',
    borderTop: '1px solid #2c2c2c'
  }
})

// For the container of the individual list items for a specific direction item
// This contains the icon on the left and the direction text on the right of the contaainer

const DirectionItem = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  fontSize: 14,
  '> *:not(:last-child)': { marginRight: 12 }
})

// -------------- Typescript declarations -------------- //

interface ListProps {
  collapsed: boolean
  directions: {
    icon: string
    title: string
    distance: string
  }[]
}

// ---------- This is the end of declarations ---------- //

export const DirectionList = ({ 
    collapsed, // Required - For the state if the list is hidden or revealed
    directions // Required - For the step-by-step list of directions
  }:ListProps) => {
  
  return(

    <DirListWrap {...{ collapsed }}>
      <DirList>
        <ul>
          { directions.map(( direction, i ) => (

            <li key={`direction-${ i }`}>
              <DirectionItem>
                <Icon size="l1" icon={ direction.icon } />
                <div>
                  <Heading bold size="l0" title={ direction.title } />
                  <Heading color="secondary" title={ direction.distance } />
                </div>
              </DirectionItem>
            </li>

          ))}
        </ul>
      </DirList>
    </DirListWrap>

  )
}