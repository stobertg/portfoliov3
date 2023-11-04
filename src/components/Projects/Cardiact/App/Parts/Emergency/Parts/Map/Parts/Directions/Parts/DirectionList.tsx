import React from 'react'
import { styled } from '@theme'
import { Heading, Icon } from '@components'

const DirListWrap = styled('div', {
  position: 'relative',
  width: '100%',
  opacity: 1,
  transition: '$s1',
  
  variants: {
    collapsed: {
      true: { opacity: 0 }
    }
  }
})

const DirList = styled('div', {
  position: 'relative',
  width: '85%',
  margin: '0 auto',
  paddingBottom: 8,

  ul: {
    listStyle: 'none'
  },

  li: {
    position: 'relative',
    width: '100%',
    padding: '12px 0',
    borderTop: '1px solid #2c2c2c'
  }
})

const DirectionItem = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  fontSize: 14,
  '> *:not(:last-child)': { marginRight: 12 }
})

interface ListProps {
  directions: {
    icon: string
    title: string
    distance: string
  }[]
}

export const DirectionList = ({ directions }:ListProps) => {
  return(

    <DirListWrap>
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