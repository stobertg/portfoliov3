import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

const ButtonContent = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  height: 44,
  borderRadius: '$r1',
  transition: '$s1',
  textAlign: 'center',
  fontSize: 14,

  variants: {
    variant: {

      primary: {
        background: '#de0000'
      },

      secondary: {
        border: '1px solid #616161',
        
        '&:hover': { 
          background: '$white',
          color: '$black' 
        }
      }
    }
  }
})

interface ButtonProps {
  title: string
  variant?: 'primary' | 'secondary'
  onClick?: React.MouseEventHandler<HTMLButtonElement>
} 

export const Button = ({ title, variant, onClick }:ButtonProps) => {
  return(

    <ButtonContent {...{ variant, onClick }}>
      <Heading bold {...{ title }} />
    </ButtonContent>
    
  )
}
