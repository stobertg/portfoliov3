import React from 'react'
import { Heading } from '@components'
import { PageWrap, Card, Button, Callout, ResponderList } from '../../../Shared'

export const Help = () => {
  return(

    <PageWrap>
      <Callout 
        icon="alert-triangle"
        title="If you are responsive, proactive help can be found here."
      />

      <Card 
        icon="siren" 
        title="Contact EMS" 
        headingSize="l0" 
        headingColor="secondary"
      >
        <Heading size="l0" title="Are you requiring immediate attention? Do not hestiate to contact 911 if you are experience an emergency situation." />
        <Button variant="primary" title="Emergency! (911)" />
      </Card>

      <Card
          icon="users"
          title="Emergency contacts"
          headingSize="l0"
          headingColor="secondary"
        >
          <ResponderList 
            responders={[
              { image: '/projects/cardiact/woodville.webp', name: 'Liz Woodville', relation: 'Wife (Married)', hasPhone: true },
              { image: '/projects/cardiact/richardiii.webp', name: 'Richard York', distance: 'Brother & Neighbor', hasPhone: true },
              { image: '/projects/cardiact/edwardv.webp', name: 'Edward York', distance: 'Son', hasPhone: true }
            ]}
          />
        </Card>
    </PageWrap>

  )
}
