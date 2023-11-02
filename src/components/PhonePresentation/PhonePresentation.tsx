import React from 'react'
import { styled } from '@theme'
import { Iphone, Cardiact } from '@components'

const PresWrap = styled('div', {

})

const PhoneBackground = styled('div', {

})

interface PhoneProps {

}

export const PhonePresentation = () => {
  return(

    <PresWrap>
      <Iphone 
        darkMode
        size="l0" 
        screen={ <Cardiact /> }
      />
    </PresWrap>

  )
}
