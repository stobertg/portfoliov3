import React from 'react'
import { styled } from '@theme'

// For the master container of the card 

const CardWrap = styled('div', {
  position: 'relative',
  width: '100%',
  background: '#151515',
  border: '1px solid #212121',
  borderRadius: '$r1',
})

interface CardProps {
  children: React.ReactNode
}

export const Card = ({ children }:CardProps) => {
  return(

    <CardWrap>{ children }</CardWrap>

  )
}
