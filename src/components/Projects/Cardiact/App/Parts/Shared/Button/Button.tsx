import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

// For the master container of the Button component, shared throughout the CardiAct app
// This is a traditional button to be able to click on for actions through out the application

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

  // Here we set the variants for the button where the button can be primary or secondary
  // By default the button is 100% width of the parent, but we have a variant for instances where it needs to be inline

  variants: {
    variant: {
      primary: {
        height: 44,
        background: '#de0000',
        '&:hover': { background: 'red' }
      },

      // For the secondary variant of the button
      // This is a traditional second variant where the button is rendered as an outline

      secondary: {
        height: 44,
        border: '1px solid #616161',
        
        '&:hover': { 
          background: '$white',
          color: '$black' 
        }
      }
    },

    // By default the button is 100% width of the parent, but we have a variant for instances where it needs to be inline
    // This is mostlt used within the card header where it sits opposite of the icon and text on the left

    inline: {
      true: { width: 'auto' }
    }
  }
})

// -------------- Typescript declarations -------------- //

interface ButtonProps {
  title: string
  variant?: 'primary' | 'secondary'
  inline?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
} 

// ---------- This is the end of declarations ---------- //

export const Button = ({ 
    title, // Required - For the title of the button
    variant, // Optional - For the variant of the button to be primary or secondary
    inline, // Optional - For the override of the default 100% width on the button
    onClick // Optional - For the click event of the button
  }:ButtonProps) => {

  return(

    <ButtonContent {...{ variant, inline, onClick }}>
      <Heading bold {...{ title }} />
    </ButtonContent>
    
  )
}
