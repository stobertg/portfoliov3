import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

const ButtonContent = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  borderRadius: '$r1',
  transition: '$s1',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  fontSize: 14,

  variants: {
    variant: {
      primary: {
        height: 44,
        background: '#de0000'
      },

      secondary: {
        height: 44,
        border: '1px solid #616161',
        
        '&:hover': { 
          background: '$white',
          color: '$black' 
        }
      }
    },

    inline: {
      true: { width: 'auto' }
    }
  }
})

interface ButtonProps {
  title: string
  variant?: 'primary' | 'secondary'
  inline?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
} 

export const Button = ({ title, variant, inline, onClick }:ButtonProps) => {
  return(

    <ButtonContent {...{ variant, inline, onClick }}>
      <Heading bold {...{ title }} />
    </ButtonContent>
    
  )
}
