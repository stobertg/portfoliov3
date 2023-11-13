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

export const EkgCard = ({
    icon, // Required - For the Icon to the left of the title
    title, // Required - For the title of the card
    listItems // Required - For the data within the card
  }:EkgProps) => {
    
  return(

    <Card headingColor="secondary" headingSize="l0" {...{ icon, title }}>
      <List {...{ listItems }} />
    </Card>

  )
}
