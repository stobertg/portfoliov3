import React from 'react'
import { styled } from '@theme'
import { Heading, Text } from '@components'

const TextMain = styled('div', {
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginBottom: 4 }
})

const TextHeading = styled('div', {
  position: 'relative',
  height: 60,
  overflow: 'hidden'
})

interface TextProps{
  title?: string
  text?: string
  headings?: { title: string }[]
  textItems?: { text: string }[]
}

export const TextSegment = ({ 
    title,
    headings,
    text,
    textItems
  }:TextProps) => {
  
  return(

    <TextMain>
      { headings ? (

        <TextHeading>
          { headings?.map(( heading, i ) => (
            <Heading 
              heavy 
              key={`heading-${ i }`} 
              size="l5" 
              title={ heading.title } 
            />
          ))}
        </TextHeading>

      ) : (

        <Heading 
          heavy 
          size="l5" 
          {...{ title }}
        />

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

        {/* <p>
          Every responder and emergency contact can see the locations of other responders. When a responder reaches the victim, 
          they can confirm they are with them, allowing other responders to play a supportive role, such as getting the AED.
        </p> */}
      </Text>
    </TextMain>

  )
}
