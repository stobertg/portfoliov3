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
        size="l1" 
        screen={ <Cardiact /> }
      />
    </PresWrap>

  )
}
