import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'
import { PageWrap, Card } from '../../../Shared'
import { Aed } from '../Map/Parts/Map/Parts/SecondLine/Aed'
import { ProfileCard } from '../../../Static/Parts/Profile/Parts'

const StatusWrap = styled('div', {
  position: 'relative',
  width: '100%',
  padding: '12px 0',
  '> *:not(:last-child)': { marginBottom: 8 }
})


const ResponderList = styled('div', {

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

interface StatusProps {

}

export const Status = ({}:StatusProps) => {
  return(

    <PageWrap>
      <StatusWrap>
        <ProfileCard 
          forcedEntry
          image="/projects/cardiact/ed.jpg"
          imageAlt="Cardiact"
          name="Edward York IV"
          gender="male"
          age={ 40 }
        />
        <Card
          icon="users-2"
          title="Responders"
          headingSize="l0"
          headingColor="secondary"
        >
          <ResponderList>
            <ul>
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
          </ResponderList>
        </Card>

        <Card
          icon="users-2"
          title="Emergency contacts"
          headingSize="l0"
          headingColor="secondary"
        >
      
        </Card>
      </StatusWrap>
    </PageWrap>

  )
}
