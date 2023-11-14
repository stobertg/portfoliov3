import React from 'react'
import { styled, keyframes } from '@theme'
import { Heading, Text } from '@components'

// For the animation variations for the text to the right of the iPhone
// For the first, we start with the basic title animation

const showTitle = keyframes({
  '0%': { transform: 'translateY( 50% )', opacity: 0 },
  '100%': { transform: 'translateY( 0 )', opacity: 1 }
})

// For the basic text animation to animate up and interview

const showText = keyframes({
  '0%': { transform: 'translateY( 30% )', opacity: 0 },
  '100%': { transform: 'translateY( 0 )', opacity: 1 }
})

// For the animation for instances where there are more than one title
// This is setting the timing of the first title

const showComplexTitleOne = keyframes({
  '0%': { transform: 'translateY( 50% )', opacity: 0 },
  '3%, 45%': { transform: 'translateY( 0 )', opacity: 1  },
  '48%, 100%': { transform: 'translateY( -50% )', opacity: 0 }
})

// For the animation for instances where there are more than one title
// This is setting the timing of the second title

const showComplexTitleTwo = keyframes({
  '0%, 47%': { transform: 'translateY( 30% )', opacity: 0 },
  '50%, 97%': { transform: 'translateY( -100% )', opacity: 1 },
  '100%': { transform: 'translateY( -130% )', opacity: 0 }
})

// For the animation for instances where there are more than one paragraph
// This is setting the timing of the first paragraph

const showComplexTextOne = keyframes({
  '0%': { transform: 'translateY( 20% )', opacity: 0 },
  '3%, 45%': { transform: 'translateY( 0 )', opacity: 1  },
  '48%, 100%': { transform: 'translateY( -5% )', opacity: 0 }
})

// For the animation for instances where there are more than one paragraph
// This is setting the timing of the second paragraph

const showComplexTextTwo = keyframes({
  '0%, 47%': { transform: 'translateY( 20% )', opacity: 0 },
  '50%, 96%': { transform: 'translateY( 0 )', opacity: 1  },
  '99%, 100%': { transform: 'translateY( -20% )', opacity: 0 }
})

// For the master container of the text explaining the content of the iPhone to the left of it
// This can support a single title or and array of titles, if needed ( i.e. titles change on an animation )

const TextMain = styled('div', {
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginBottom: 4 }
})

// For the container of the multiple heading on the top of the container
// This is for the title of the content for the screen to the left, in the iPhone

const MultipleHeadings = styled('div', {
  position: 'relative',
  height: 60,
  overflow: 'hidden',

  // Here we set the starting point for each of the titles
  // This will position the text below the container, allowing it to animate up and in

  '> *': { 
    transform: 'translateY( 50% )',
    opacity: 0
  },

  // Setting the animation of the first title

  '> *:first-child': { 
    animation: `${ showComplexTitleOne } 20s ease forwards infinite`,
    animationDelay: '300ms', 
  },

  // Setting the animation of the second title

  '> *:last-child': { 
    animation: `${ showComplexTitleTwo } 20s ease forwards infinite`
  }
})

// For the main container of a single title
// We need this master container for the heading so that we can animate the heading within the container

const SingleHeading = styled('div', {
  position: 'relative',
  width: '100%',
  overflow: 'hidden',

  // For the default start of the heading within the container
  // This will set the heading below the box and opacity 0, setting it up to animate in when the trigger is clicked

  '> *': {
    transform: 'translateY( 50% )',
    animation: `${ showTitle } 600ms ease forwards`,
    animationDelay: '300ms',
    opacity: 0
  }
})

// For the master container of the text below the heading
// Same as the heading, we need a master container to animate the content within it

const TextWrap = styled('div', {
  position: 'relative',
  width: '100%',

  // Here we set the text more subtle than the title - where the animtion up will be small
  // This sets the text to start 10px down and opacity 0, allowing where the opacity does more work in the animation

  '> * > p': {
    transform: 'translateY( 10% )',
    animation: `${ showText } 600ms ease forwards`,
    animationDelay: '500ms',
    opacity: 0
  }
})

// For the master container for multiple text items
// This is used when we want to automatically switch between text paragrpahs (i.e. on a timer)

const ComplexTextItem = styled('div', {
  position: 'relative',
  width: '100%',

  // Here we set the starting animation of the first paragraph
  // This will set the text down and opacity 0, allowing it to animate up and into view

  '> p:first-child': { 
    transform: 'translateY( 30% )',
    animation: `${ showComplexTextOne } 20s ease forwards infinite`,
    animationDelay: '500ms',
    opacity: 0
  },

  // For any additional text after the initial paragraph shown
  // This will do the same as above in terms of animaton, but we set this to absolute to give it the same starting point

  '> p:last-child': { 
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    marginTop: 0,
    animation: `${ showComplexTextTwo } 20s ease forwards infinite`,
    animationDelay: '500ms',
    opacity: 0,
  }
})

// -------------- Typescript declarations -------------- //

interface TextProps{
  title?: string
  showTitle?: boolean
  text?: string
  headings?: { title: string }[]
  textItems?: { text: string }[]
}

// ---------- This is the end of declarations ---------- //

export const TextSegment = ({ 
    title, // Required if no 'headings' - For the single title of the content
    headings, // Required if no 'title' - For mutiple titles for the content
    text, // Required if no 'textItems' - For the single description of the content
    textItems // Required if no 'text' - For mutiple descriptions for the content
  }:TextProps) => {
  
  return(

    <TextMain>
      { headings ? (

        <MultipleHeadings>
          { headings.map(( heading, i ) => (
            <Heading 
              key={`heading-${ i }`} 
              heavy 
              size="l5" 
              title={ heading.title } 
            />
          ))}
        </MultipleHeadings>

      ) : (

        <SingleHeading>
          <Heading heavy size="l5" {...{ title }} />
        </SingleHeading>

      )}

      <TextWrap>
        <Text font="sansSerif" fontSize="l0" color="secondary">
          { textItems ? (
            <ComplexTextItem>
              { textItems?.map(( textItem, i ) => (
                <p key={`textItem-${ i }`}>{ textItem.text }</p>
              ))}
            </ComplexTextItem>
          ) : (
            <p>{ text }</p>
          )}
        </Text>
      </TextWrap>
    </TextMain>

  )
}
