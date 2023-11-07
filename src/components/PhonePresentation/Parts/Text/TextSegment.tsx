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
  overflow: 'hidden'
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

  '> *': {
    transform: 'translateY( 30% )',
    animation: `${ showText } 600ms ease forwards`,
    animationDelay: '500ms',
    opacity: 0
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
            <>
              { textItems?.map(( textItem, i ) => (
                <p key={`textItem-${ i }`}>{ textItem.text }</p>
              ))}
            </>
          ) : (
            <p>{ text }</p>
          )}
        </Text>
      </TextWrap>
    </TextMain>

  )
}
