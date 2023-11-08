import React from 'react'
import { Card, List } from '../../../../../Shared/'

// -------------- Typescript declarations -------------- //

interface EkgProps {
  icon: string
  title: string
  listItems: {
    title: string
    time: string
  }[]
}

// ---------- This is the end of declarations ---------- //

export const EkgCard = ({ icon, title, listItems }:EkgProps) => {
  return(

    <Card headingColor="secondary" headingSize="l0" {...{ icon, title }}>
      <List {...{ listItems }} />
    </Card>

  )
}
