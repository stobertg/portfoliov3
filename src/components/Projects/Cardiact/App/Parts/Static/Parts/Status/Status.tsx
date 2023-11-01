import React from 'react'
import { styled } from '@theme'
import { EkgCard, HeartRateCard } from './Parts'

const StatusWrap = styled('div', {
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginBottom: 4 }
})

export const Status = () => {
  return(

    <StatusWrap>
      <HeartRateCard />
      <EkgCard />
    </StatusWrap>

  )
}
