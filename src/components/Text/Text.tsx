import React from 'react'
import { styled } from '@theme'

// For the master container of the Text component
// This component is used a bunch throughout the site and comprises of paragraphs making up a long form description

const TextWrap = styled('div', {
  position: 'relative',
  maxWidth: 900,
  width: '100%',

  // For the styling of all p tags used within the text component
  // This will set the defaut font and automate the spacing between each of the paragraphs

  p: {
    fontFamily: '$serif',
    lineHeight: 1.5,
    '&:not(:first-child)': { marginTop: 32 }
  },

  // For the styling of the links within the text component - needed for accessability as well
  // This has the yellow line on the bottom of the container by default and scales to fill the entire link on hover

  a: {
    display: 'inline-flex',
    position: 'relative',
    fontFamily: 'inherit',
    overflow: 'hidden',

    // Here we set the hyperlink line that is default set on the bottom of the container
    // Here we set the default start animation and get it ready to animte to take up the entire container on hover

    '&:before': {
      content: '',
      position: 'absolute',
      bottom: 4,
      left: 0,
      width: '100%',
      height: '100%',
      background: '$yellow',
      transform: 'scale( 1, 0.02 )',
      transformOrigin: 'bottom center',
      transition: '$s1',
      zIndex: -1
    },

    // On hover, the underline on the bottom will scale up to take over the entire container
    // This will also change the color to black to set againt the yellow background

    '&:hover': {
      color: '$black',
      '&:before': { transform: 'scale( 1, 1 ) translateY( 4px )' }
    }
  },

  // For the variants of the text component
  // This allows for the change in font size, font to be sans serif, and the color of the text

  variants: {
    fontSize: {
      l0: { p: { fontSize: '$s1' }},
      l1: { p: { fontSize: '$s2', lineHeight: '1.75', '@tablet': { fontSize: '$s1' }}}
    },

    // Here we support the change of the text to be set as sans serif, such as in the phone presentation
    // By default the text within the p tags is set to serif font

    font: {
      sansSerif: {
        p: { fontFamily: '$sansSerif' }
      }
    },

    // Here we support the color of the text to be changed from the default primary color

    color: {
      secondary: { color: '$textSecondary' }
    },

    align: {
      center: { textAlign: 'center' }
    }
  }
})

// -------------- Typescript declarations -------------- //

interface TextProps {
  font?: 'sansSerif'
  fontSize?: 'l0' | 'l1'
  color?: 'secondary'
  align?: 'center'
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Text = ({ 
    children, // Required - For the text that makes up the content of the component
    font, // Optional - For the ability to change the text to sans serif
    color, // Optional - For the ability to change the color of the text from the default primary color
    fontSize, // Optional - For the ability to change the font size of the p's within the component
    align
  }:TextProps) => {

  return(

    <TextWrap {...{ font, fontSize, color, align }}>{ children }</TextWrap>

  )
}
