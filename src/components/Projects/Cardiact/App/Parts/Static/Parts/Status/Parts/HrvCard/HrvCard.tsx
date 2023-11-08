import React from 'react'
import { Card, List } from '../../../../../Shared/'

// -------------- Typescript declarations -------------- //

interface CardProps {
  icon: string
  title: string
  listItems: {
    title: string
    time: string
  }[]
}

// ---------- This is the end of declarations ---------- //

export const HrvCard = ({ icon, title, listItems }:CardProps) => {
  return(

    <Card {...{ icon, title }}>
      <List {...{ listItems }} />
    </Card>

  )
}
