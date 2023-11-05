import React from 'react'
import { styled } from '@theme'
import { Icon } from '@components'

const SwitchWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 100,
  height: 56,
  background: '#750c0d',
  borderRadius: '$pill'
})

const SwitchContent = styled('div', {
  position: 'relative',
  width: '90%',
  margin: '0 auto'
})

const SwitchButton = styled('button', {

})

interface SwitchProps {

}

export const PresSwitch = ({}:SwitchProps) => {
  return(

    <SwitchWrap>
      <SwitchContent>
        <SwitchButton><Icon size="l1" icon="heart" /></SwitchButton>
        <SwitchButton><Icon size="l1" icon="user-2" /></SwitchButton>
      </SwitchContent>
    </SwitchWrap>

  )
}
