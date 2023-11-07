import React from 'react'
import { styled } from '@theme'
import { Heading, Text } from '@components'

// For the master container of the text to the right of the phone screen
// This contains the mode title on the top, and the content below with a seperate title and the paragraph explaing the content

const TextWrap = styled('div', {
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginBottom: 4 }
})

// For the title of the overall text exmapling the content of the iPhone
// This contains the title of the app based on the version a user is looking at ( i.e. Emergency Mode, Admin Mode )

const AppMode = styled('div', {
  position: 'relative',
  height: 20,
  overflow: 'hidden'
})

// Here we set the container for the title
// This is so we can use animation to transition between the titles

const AppModeContent = styled('div', {
  position: 'relative',
  transition: '$s3 ease',
  '> *': { transition: '$s3' },
  '> *:not(:last-child)': { marginBottom: 4 },

  // For the mode of the titles - Here we set the text to animate once a switch is clicked
  // When the switch is clicked, the top title will animate out north, dissapearing and bringing in the next title below

  variants: {
    switchMode: {
      true: { 
        transform: 'translateY( calc( -100% + 17px ))',
        '> *:first-child': { opacity: 0 },
        '> *:last-child': { opacity: 1 }
      },

      // For the default setting of the titles within the container
      // This will make the first item visible and setting the other titles to be visually hidden

      false: {
        '> *:not(:first-child)': { opacity: 0 },
      }
    }
  }
})

// -------------- Typescript declarations -------------- //

interface TextProps {
  switchMode: boolean
  children: React.ReactNode
  titles: { title: string }[]
}

// ---------- This is the end of declarations ---------- //

export const PresText = ({ 
    switchMode, // Required - For the animation of the titles coming in and out
    titles, // Required - For the titles of the modes
    children // Required - For the main text content below this mode heading
  }:TextProps) => {
  
  return(

    <TextWrap>
      <AppMode>
        <AppModeContent {...{ switchMode }}>
          { titles.map(( title, i ) => (
            <Heading key={`title-${ i }`} heavy title={ title.title } />
          ))}
        </AppModeContent>
      </AppMode>

      { children }
    </TextWrap>

  )
}
