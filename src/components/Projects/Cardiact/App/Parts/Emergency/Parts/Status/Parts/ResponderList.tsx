import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'
import { Aed } from '../../Map/Parts/Map/Parts/SecondLine/Aed'

const ListWrap = styled('div', {

  ul: { listStyle: 'none' },
  li: { 
    padding: '12px 0',
    '&:not(:last-child)': { borderBottom: '1px solid #1c1c1c' },
    '&:first-child': { paddingTop: 0 },
    '&:last-child': { paddingBottom: 0 }
  }
}) 

const Responder = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  width: '100%'
})

const ResponderInfo = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  '> *:not(:last-child)': { marginRight: 8 }
})

const ResponderImage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 32,
  height: 32,
  borderRadius: '50%',
  overflow: 'hidden',
  img: { height: '100%', objectFit: 'cover' }
})

const ResponderText = styled('div', {
  position: 'relative',
  '> *:not(:last-child)': { marginBottom: 2 },
  '> *:last-child': { fontSize: 13 }
})

const ResponderAttr = styled('div', {
  '*': { position: 'relative', bottom: 'auto', right: 'auto' }
})

interface ResponderProps {
  responders: {
    image: string
    name: string
    distance?: string
    relation?: string
  }[]
}

export const ResponderList = ({ responders }:ResponderProps) => {
  return(

    <ListWrap>
      <ul>
        { responders.map(( responder, i ) => (

          <li key={`responder-${ i }`}>
            <Responder>
              <ResponderInfo>
                <ResponderImage><img src={ responder.image } alt="CardiactResponder" /></ResponderImage>
                <ResponderText>
                  <Heading heavy size="l0" title={ responder.name } />
                  { responder.distance && ( <Heading color="secondary" title={ responder.distance } /> )}
                  { responder.relation && ( <Heading color="secondary" title={ responder.relation } /> )}
                </ResponderText>
              </ResponderInfo>

              <ResponderAttr><Aed /></ResponderAttr>
            </Responder>
          </li>
          
        )) }
        <li>
          <Responder>
            <ResponderInfo>
              <ResponderImage><img src="/projects/cardiact/ed.jpg" alt="CardiactResponder" /></ResponderImage>
              <ResponderText>
                <Heading heavy size="l0" title="George Clearance" />
                <Heading color="secondary" title="0.02 miles away" />
              </ResponderText>
            </ResponderInfo>

            <ResponderAttr><Aed /></ResponderAttr>
          </Responder>
        </li>

        <li>
          <Responder>
            <ResponderInfo>
              <ResponderImage><img src="/projects/cardiact/ed.jpg" alt="CardiactResponder" /></ResponderImage>
              <ResponderText>
                <Heading heavy size="l0" title="Richard Neville" />
                <Heading color="secondary" title="There now" />
              </ResponderText>
            </ResponderInfo>
          </Responder>
        </li>
      </ul>
    </ListWrap>

  )
}
