import React from 'react'
import { styled } from '@theme'
import { PageWrap, Button, Callout } from '../../../Shared'

export const Help = () => {
  return(

    <PageWrap>
      <Callout 
        icon="alert-triangle"
        title="This is some text"
      />
      
      <Button variant="primary" title="I need help" />
    </PageWrap>

  )
}
