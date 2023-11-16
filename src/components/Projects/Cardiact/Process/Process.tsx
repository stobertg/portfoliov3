import React from 'react'
import { styled } from '@theme'
import { Heading, Text } from '@components'

// For the master container of the process component used in the Cardiact project
// This holds the process segment explaining the app

const ProcessWrap = styled('div', {
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginBottom: 50 }
})

// For the container of the text on the top of the container
// This contains the title above and the descriptive text below the title

const ProcessText = styled('div', {
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginBottom: 12 }
})

// For the master container of all of the images wihtin the process container
// This is the content directly below the title and description

const ProcessImageWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',

  '@tablet': { 
    paddingBottom: '0 !important',

    '*': { 
      flexDirection: 'column !important',
      position: 'relative !important',
      maxWidth: '100% !important',
      top: 'auto',
      right: 'auto',
      bottom: 'auto',
      left: 'auto',
      transform: 'translateY( 0 ) !important'
    },

    '> *:not(:last-child)': { marginBottom: 12 }
  },

  // Here we account for the 

  variants: {
    variant: {
      v1: { paddingBottom: 330 },
      v2: { alignItems: 'flex-start' },
      v3: { alignItems: 'flex-start' }
    }
  }
})

// For the container if multiple images are needed within the process section
// Here we account for different visual lockups for the images

const ProcessImages = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  '@tablet': { '> *:not(:last-child)': { marginBottom: 12 }},

  variants: { 
    variant: {
      v1: {
        position: 'absolute',
        flexDirection: 'row',
        bottom: 0,
        maxWidth: 800,
        
        '> *:not(:first-child)': { 
          position: 'absolute', 
          right: 0,
          boxShadow: '0 2px 20px rgba( 0,0,0, 0.2 )' 
        }
      },

      v2: {
        transform: 'translateY( -20px )',
        zIndex: 10,
        '> *:last-child': { alignSelf: 'flex-end', transform: 'translateY( -10px )' },
        '> *': { boxShadow: '0 2px 20px rgba( 0,0,0, 0.2 )' }
      },

      v3: {
        transform: 'translateY( -10px )',
        zIndex: 10,
        '> *:first-child': { alignSelf: 'flex-end' },
        '> *:last-child': { transform: 'translateY( -10px )' },
        '> *': { boxShadow: '0 2px 20px rgba( 0,0,0, 0.2 )' }
      }
    }
  }
})

const ProcessImage = styled('div', {
  display: 'flex',
  position: 'relative',

  variants: {
    size: {
      l0: { maxWidth: 585, width: '100%' },
      l1: { maxWidth: 400, width: '100%' },
      l2: { maxWidth: 500, width: '100%' },
      l3: { maxWidth: 820, width: '100%' },
      l4: { maxWidth: 936, width: '100%' }
    },

    hasBackgorund: {
      true: { padding: 32, background: '$white' }
    }
  }
})

// -------------- Typescript declarations -------------- //

interface ProcessProps {
  variant?: 'v1' | 'v2' | 'v3'
  title: string
  text: React.ReactNode
  mainImage?: string
  imageSize?: 'l0' | 'l1' | 'l2' | 'l3' | 'l4'
  imageAlt?: string
  images?: { 
    image: string, 
    imageAlt: string 
    size?: 'l0' | 'l1' | 'l2' | 'l3' | 'l4'
    hasBackground?: boolean
  }[]
}

// ---------- This is the end of declarations ---------- //

export const CardiactProcess = ({ 
    title, // Required - For the title of the process screen
    text, 
    images, 
    mainImage, 
    imageAlt, 
    variant,
    imageSize
  }:ProcessProps) => {

  return (

    <ProcessWrap>
      <ProcessText>
        <Heading heavy size="l4" {...{ title }} />
        <Text fontSize="l0">{ text }</Text>
      </ProcessText>

      <ProcessImageWrap {...{ variant }}>
        { mainImage && (
          <ProcessImage size={ imageSize }>
            <img src={ mainImage } alt={ imageAlt } />
          </ProcessImage>
        )}

        { images && images.length > 0 && (
          <ProcessImages {...{ variant }}>
            { images?.map(( image, i ) => (
              <ProcessImage key={`image-${ i }`} size={ image.size } hasBackgorund={ image.hasBackground }>
                <img src={ image.image } alt={ image.imageAlt } />
              </ProcessImage>
            ))}
          </ProcessImages>
        )}
      </ProcessImageWrap>
    </ProcessWrap>

  )
}
