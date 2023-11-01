import React from 'react'
import { Card, List } from '../../../../../Shared/'

interface EkgProps {
  icon: string
  title: string
  listItems: {
    title: string
    time: string
  }[]
}

export const EkgCard = ({ icon, title, listItems }:EkgProps) => {
  return(

    <Card {...{ icon, title }}>
      <List {...{ listItems }} />
    </Card>

  )
}
