import React from 'react'
import { styled } from '@theme'
import { Heading, Text } from '@components'

// For the master container of the 

const TextWrap = styled('div', {
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginBottom: 4 }
})

const AppMode = styled('div', {
  position: 'relative',
  height: 20,
  overflow: 'hidden',
  
})

const AppModeContent = styled('div', {
  position: 'relative',
  transition: '$s3 ease',
  '> *': { transition: '$s3' },
  '> *:not(:last-child)': { marginBottom: 4 },

  variants: {
    switchMode: {
      true: { 
        transform: 'translateY( calc( -100% + 17px ))',
        '> *:first-child': { opacity: 0 },
        '> *:last-child': { opacity: 1 }
      },

      false: {
        '> *:first-child': { opacity: 1 },
        '> *:last-child': { opacity: 0 }
      }
    }
  }
})

interface TextProps {
  switchMode: boolean
  children: React.ReactNode
}

export const PresText = ({ switchMode, children }:TextProps) => {
  return(

    <TextWrap>
      <AppMode>
        <AppModeContent {...{ switchMode }}>
          <Heading color="secondary" heavy title="Emergency Mode" />
          <Heading color="secondary" heavy title="Static Mode" />
        </AppModeContent>
      </AppMode>

      { children }
    </TextWrap>

  )
}
