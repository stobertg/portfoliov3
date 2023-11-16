import React from 'react'
import { styled } from '@theme'
import { Heading, Text } from '@components'

// For the master container of the process component used in the Cardiact project
// This holds the process segment explaining the app

const ProcessWrap = styled('div', {
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginBottom: 32 }
})

// For the container of the text on the top of the container
// This contains the title above and the descriptive text below the title

const ProcessText = styled('div', {
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginBottom: 12 }
})

const ProcessImageWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',

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
  position: 'relative',

  variants: {
    size: {
      l0: { width: 585 },
      l1: { width: 400 },
      l2: { width: 500 },
      l3: { width: 820 },
      l4: { width: 936 }
    },

    hasBackgorund: {
      true: { padding: 32, background: '$white' }
    }
  }
})

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

export const CardiactProcess = ({ 
    title, 
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
