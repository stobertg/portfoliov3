import React from 'react'
import { styled, keyframes } from '@theme'
import { Heading, Text } from '@components'

const showTitle = keyframes({
  '0%': { transform: 'translateY( 50% )', opacity: 0 },
  '100%': { transform: 'translateY( 0 )', opacity: 1 }
})

const showText = keyframes({
  '0%': { transform: 'translateY( 30% )', opacity: 0 },
  '100%': { transform: 'translateY( 0 )', opacity: 1 }
})

const showComplexTitleOne = keyframes({
  '0%': { transform: 'translateY( 50% )', opacity: 0 },
  '3%, 45%': { transform: 'translateY( 0 )', opacity: 1  },
  '48%, 100%': { transform: 'translateY( -50% )', opacity: 0 }
})

const showComplexTitleTwo = keyframes({
  '0%, 47%': { transform: 'translateY( 30% )', opacity: 0 },
  '50%, 97%': { transform: 'translateY( -100% )', opacity: 1 },
  '100%': { transform: 'translateY( -130% )', opacity: 0 }
})

const showComplexTextOne = keyframes({
  '0%': { transform: 'translateY( 20% )', opacity: 0 },
  '3%, 45%': { transform: 'translateY( 0 )', opacity: 1  },
  '48%, 100%': { transform: 'translateY( -5% )', opacity: 0 }
})

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

// For the container of the heading o nthe top of the container
// This is for the title of the content for the screen to the left, in the iPhone

const TextHeading = styled('div', {
  position: 'relative',
  height: 60,
  overflow: 'hidden',

  '> *': { 
    transform: 'translateY( 50% )',
    opacity: 0
  },

  '> *:first-child': { 
    animation: `${ showComplexTitleOne } 20s ease forwards infinite`,
    animationDelay: '300ms', 
  },

  '> *:last-child': { 
    animation: `${ showComplexTitleTwo } 20s ease forwards infinite`
  }
})

const TitleWrap = styled('div', {
  position: 'relative',
  width: '100%',
  overflow: 'hidden',

  '> *': {
    transform: 'translateY( 50% )',
    animation: `${ showTitle } 600ms ease forwards`,
    animationDelay: '300ms',
    opacity: 0
  }
})

const TextWrap = styled('div', {
  position: 'relative',
  width: '100%',

  '> * > p': {
    transform: 'translateY( 10% )',
    animation: `${ showText } 600ms ease forwards`,
    animationDelay: '500ms',
    opacity: 0
  }
})

const ComplexTextItem = styled('div', {

  '> p:first-child': { 
    transform: 'translateY( 30% )',
    animation: `${ showComplexTextOne } 20s ease forwards infinite`,
    animationDelay: '500ms',
    opacity: 0
  },

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
        <TextHeading>
          { headings.map(( heading, i ) => (
            <Heading 
              key={`heading-${ i }`} 
              heavy 
              size="l5" 
              title={ heading.title } 
            />
          ))}
        </TextHeading>
      ) : (
        <TitleWrap><Heading heavy size="l5" {...{ title }} /></TitleWrap>
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
