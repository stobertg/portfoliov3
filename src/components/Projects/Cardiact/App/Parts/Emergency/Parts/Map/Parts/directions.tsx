import React, { useState} from 'react'
import { styled } from '@theme'
import { Button } from '../../../../Shared'
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

const DirHeader = styled('button', {
  position: 'relative',
  width: '100%',
  textAlign: 'left',
  lineHeight: 1,
  '*': { marginBottom: 0 }
})

const DirHeaderContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  width: '85%',
  margin: '0 auto',
  padding: '16px 0'
})

const DirAddress = styled('div', {
  position: 'relative',
  width: '80%',
  '> *:not(:last-child)': { marginBottom: 2 },
  '> *:nth-child(2)': { fontSize: 14 },
  '> *:last-child': { fontSize: 14 },
})

const DirStart = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  height: '100%',
  width: '20%',
  fontSize: 14
})

const DirListWrap = styled('div', {
  position: 'relative',
  width: '100%',
  opacity: 1,
  transition: '$s1',
  
  
  variants: {
    collapsed: {
      true: {
        opacity: 0
      }
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

interface DirectionProps {

}

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
        <DirHeader>
          <DirHeaderContent>
            <DirAddress>
              <Heading heavy size="l0" title="1483 Westminster" />
              <Heading color="secondary" title="London, England" />
              <Heading color="secondary" title="4 min away" />
            </DirAddress>

            <DirStart>
              <Icon size='l0' icon="navigation-2" />
              <Heading bold color="secondary" title="Start" />
            </DirStart>
          </DirHeaderContent>
        </DirHeader>
        
        <DirListWrap>
          <DirList>
            <ul>
              <li>
                <DirectionItem>
                  <Icon size="l1" icon="corner-up-left" />
                  <div>
                    <Heading bold size="l0" title="Left at East Liberty St." />
                    <Heading color="secondary" title="0.3 miles away" />
                  </div>
                </DirectionItem>
              </li>
              
              <li>
                <DirectionItem>
                  <Icon size="l1" icon="corner-up-left" />
                  <div>
                    <Heading bold size="l0" title="Left at Wheeler St." />
                    <Heading color="secondary" title="0.4 miles away" />
                  </div>
                </DirectionItem>
              </li>

              <li>
                <DirectionItem>
                  <Icon size="l1" icon="heart" />
                  <div>
                    <Heading bold size="l0" title="Victim on the left" />
                    <Heading color="secondary" title="0.5 miles away" />
                  </div>
                </DirectionItem>
              </li>
            </ul>
          </DirList>
        </DirListWrap>
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
