import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'
import { Card, List } from '../../../../../Shared/'

const EkgList = styled('div', {

  ul: {
    listStyle: 'none'
  },

  li: {
    position: 'relative',
    width: '100%',
    padding: '8px 0',
    borderBottom: '1px solid $borderDeco'
  }
})

const EkgItem = styled('div', {

})

export const EkgCard = () => {
  return(

    <Card
      icon="activity"
      title="EKGs"
    >

      <List 
        listItems={[
          { title: '70 BPM Average' },
          { title: '75 BPM Average' },
          { title: '72 BPM Average' },
          { title: '71 BPM Average' },
        ]}
      />
    </Card>

  )
}
