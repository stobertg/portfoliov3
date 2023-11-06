import React from 'react'
import { styled } from '@theme'
import { CardiactEmergency, CariactStatic } from './Parts'

const AppWrap = styled('div', {

})

interface AppProps {
  emergencyMode: boolean
  staticMode: boolean
}

export const Cardiact = ({ emergencyMode, staticMode }:AppProps) => {
  return(

    <AppWrap>
      { emergencyMode && ( <CardiactEmergency /> ) }
      { staticMode && ( <CariactStatic /> )}
    </AppWrap>

  )
}
