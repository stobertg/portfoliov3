import React, { useState} from 'react'
import { styled } from '@theme'
import { Button } from '../../../../../Shared'
import { DirectionHeader, DirectionList } from './Parts'
import { Heading, Icon } from '@components'

const DirWrap = styled('div', {
  position: 'absolute',
  width: '100%',
  paddingBottom: 32,
  zIndex: 10,
  transition: '$s2',
  '> *:not(:last-child)': { marginBottom: 8 },

  '&:before': { 
    content: '',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)'
  },

  variants: { 
    collapsed: {
      true: {
        transform: 'translateY( calc( 100% - 152px ) )',
        '&:before': { opacity: 0 }
      }
    }
  }
})

// For the master container of the main direction content
// This comes in two parts with the snapshot address, and then the step-by-step directions below

const DirContent = styled('div', {
  position: 'relative',
  width: '96%',
  margin: '0 auto',
  borderRadius: '$r2',
  backdropFilter: 'blur( 10px )',
  border: '1px solid #212121',
  overflow: 'hidden',

  // For the dark overlay over the header

  '&:before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba( 0,0,0,0.3 )'
  },

  variants: {
    collapsed: {
      true: {
        height: 82
      }
    }
  }
})

const DirButtonsWrap = styled('div', {
  position: 'relative',
  width: '100%',

  variants: {
    collapsed: {
      true: {
        opacity: 0
      }
    }
  }
})

const DirButtons = styled('div', {
  position: 'relative',
  width: '92%',
  margin: '0 auto',
  '> *:not(:last-child)': { marginBottom: 4 }
})

const MainButton = styled('div', {
  position: 'relative',
  width: '100%'
})

const MainButtonContent = styled('div', {
  position: 'relative',
  width: '96%',
  margin: '0 auto',
  // opacity: 0
})

// -------------- Typescript declarations -------------- //

interface DirectionProps {

}

// ---------- This is the end of declarations ---------- //

export const Directions = ({ }:DirectionProps) => {
  const [ collapsed, setCollapsed ] = useState( true )
  const expandDirections = () => setCollapsed( !collapsed )

  return(

    <DirWrap collapsed={ collapsed }>
      { collapsed && (
        <MainButton>
          <MainButtonContent>
            <Button variant="primary" title="I'm with Victim" />
          </MainButtonContent>
        </MainButton>
      )}

      <DirContent collapsed={ collapsed } onClick={ expandDirections }>
        <DirectionHeader 
          address="1483 Westminster"
          location="London, England"
          distance="4 min away"
        />

        <DirectionList 
          directions={[
            { 
              icon: 'corner-up-left',
              title: 'Left at East Liberty St.',
              distance: '0.3 miles away'
            },
            { 
              icon: 'corner-up-left',
              title: 'Left at Wheeler St.',
              distance: '0.4 miles away'
            },
            { 
              icon: 'heart',
              title: 'Victim on the left',
              distance: '0.5 miles away'
            }
          ]}
        />
      </DirContent>

      <DirButtonsWrap collapsed={ collapsed }>
        <DirButtons>
          <Button variant="primary" title="I'm with Victim" />
          <Button variant="secondary" title="Back to map" />
        </DirButtons>
      </DirButtonsWrap>
    </DirWrap>

  )
} 
