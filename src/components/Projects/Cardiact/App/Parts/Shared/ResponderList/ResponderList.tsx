import React from 'react'
import { styled } from '@theme'
import { Heading, Icon } from '@components'
import { Aed } from '../../Emergency/Parts/Map/Parts/Map/Parts/SecondLine/Aed'

// For the master container of the Responders list 
// This component is used to show all of the responders and emergency contact invloved in saving the victim

const ListWrap = styled('div', {
  position: 'relative',
  width: '100%',
  marginTop: 4,
  ul: { listStyle: 'none' },

  // For the styling of the list items in the ul
  // This addresses the spacing in the li, as well as the borders for organization

  li: { 
    padding: '12px 0',
    '&:not(:last-child)': { borderBottom: '1px solid #1c1c1c' },
    '&:first-child': { paddingTop: 0 },
    '&:last-child': { paddingBottom: 0 }
  }
}) 

// For the container of the individual responders within the list 
// This contains the image on the left, with the name and distance or relation, and if it has a attribute on the right of the container

const Responder = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  width: '100%'
})

// For the master container of all of the content on the left of the container
// This contains the image on the left of the contaier and the name and distance or relation on the right

const ResponderInfo = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  '> *:not(:last-child)': { marginRight: 8 }
})

// For the container of the profile image on the left of the container
// This contains the head shot that is positioned centered in the container, acting as a backgorund-poisiton cover

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

// For the container of the text to the right of the profile image of the responder
// This contains the name on the top container and the distance or relation to the vicitim on the bottom

const ResponderText = styled('div', {
  position: 'relative',
  '> *:not(:last-child)': { marginBottom: 2 },
  '> *:last-child': { fontSize: 13 }
})

// For the container of the objects on the right of the master container
// This can be used to show if a responder has an Aed with them or to show the ability to call an emergency contact

const ResponderAttr = styled('div', {
  position: 'relative',
  '*': { position: 'relative', bottom: 'auto', right: 'auto' }
})

// for the container of the phone button on the right of the master container
// This is used to show that anyone responding to the cardiact event can call an emergency contact

const ResponderPhone = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 28,
  height: 28,
  borderRadius: '50%',
  background: 'linear-gradient( 142deg, rgba( 67,117,255,1 ) 0%, rgba( 21,84,255,1 ) 100% )',
  svg: { width: 12, height: 12 }
})

// -------------- Typescript declarations -------------- //

interface ResponderProps {
  responders: {
    image: string
    name: string
    distance?: string
    relation?: string
    hasAed?: boolean
    hasPhone?: boolean
  }[]
}

// ---------- This is the end of declarations ---------- //

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

              { responder.hasAed && ( <ResponderAttr><Aed /></ResponderAttr> )}
              { responder.hasPhone && ( <ResponderAttr><ResponderPhone><Icon size="l0" icon="phone" /></ResponderPhone></ResponderAttr> )}
            </Responder>
          </li>
          
        ))}
      </ul>
    </ListWrap>

  )
}
