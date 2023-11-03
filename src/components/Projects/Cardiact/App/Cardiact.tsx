import React from 'react'
import { styled } from '@theme'
import { CardiactEmergency, CariactStatic } from './Parts'

const AppWrap = styled('div', {

})

export const Cardiact = () => {
  return(

    <AppWrap>
      <CardiactEmergency />
      {/* <CariactStatic /> */}
    </AppWrap>

  )
}
