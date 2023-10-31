import React from 'react'
import { styled } from '@theme'
import { Heading, Icon } from '@components'
import { Card } from '../../../../../Shared/Card/Card'

const CardContent = styled('div', {
  position: 'relative',
  width: '88%',
  margin: '0 auto',
  padding: '12px 0'
})

const CardHeader = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginRight: 12 }
})

const History = styled('div', {

})

const Current = styled('div', {

})

export const HeartRateCard = () => {
  return(

    <Card>
      <CardContent>
        <CardHeader>
          <Icon size="l1" icon="heart" />
          <Heading heavy title="Your heart rate" />
        </CardHeader>
      </CardContent>
    </Card>

  )
}
