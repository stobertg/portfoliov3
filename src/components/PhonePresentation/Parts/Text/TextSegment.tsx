import React from 'react'
import { styled } from '@theme'
import { Heading, Text } from '@components'

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

// -------------- Typescript declarations -------------- //

interface TextProps{
  title?: string
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
        <Heading heavy size="l5" {...{ title }} />
      )}

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
    </TextMain>

  )
}
