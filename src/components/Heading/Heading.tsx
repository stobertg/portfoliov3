import React from 'react'
import { styled } from '@theme'

// For the master container of the headings used throughout the size
// This displays the heading as a block element, and allows for bolding and htags within it

const HeadingWrap = styled('div', {
  position: 'relative',

  // For the different font sizes supported within the headings of the site

  variants: {
    size: {
      l0: { fontSize: '$s0', lineHeight: 1.2 },
      l1: { fontSize: '$s1', lineHeight: 1.2 },
      l2: { fontSize: '$s2', lineHeight: 1.2 },
      l3: { fontSize: '$s3', lineHeight: 1.3, '@tablet': { fontSize: '$s1', lineHeight: 1.2 } },
      l4: { fontSize: '$s4', lineHeight: 1.3, '@tablet': { fontSize: '$s2', lineHeight: 1.2 } },
      l5: { fontSize: '$s5', lineHeight: 1.3, '@tablet': { fontSize: '$s3', lineHeight: 1.2 } },
      l6: { fontSize: '$s6', lineHeight: 1.2, '@tablet': { fontSize: '$s4', lineHeight: 1.2 } },
      l7: { fontSize: '$s7', lineHeight: 1.2, '@tablet': { fontSize: '$s5', lineHeight: 1.2 }}
    },

    // For the support of different colors that the heading can be

    color: {
      primary: { color: '$brandPrimary' },
      secondary: { color: '$textSecondary' },
      white: { color: '$white' },
      black: { color: '$black' }
    },

    // To change the font family of the heading to be the code font

    font: {
      sansSerif: { fontFamily: '$sansSerifHeavy !important' },
      serif: { fontFamily: '$serif' }
    },

    align: {
      center: { textAlign: 'center' }
    }
  }
})

const Heavy = styled('strong', { fontFamily: '$sansSerifHeavy' })
const Bold = styled('strong', { fontFamily: '$sansSerifBold' })

// ----------- Special - Heading declarations ----------- //

const headingTags = {
  '1': 'h1',
  '2': 'h2',
  '3': 'h3',
  '4': 'h4',
  '5': 'h5',
  '6': 'h6',
};

// -------------- Typescript declarations -------------- //

interface HeadingProps {
  size?: 'l0' | 'l1' | 'l2' | 'l3' | 'l4' | 'l5' | 'l6' | 'l7'
  color?: 'primary' | 'secondary' | 'white' | 'black'
  title?: any
  heavy?: boolean
  bold?: boolean
  font?: 'serif' | 'sansSerif'
  children?: React.ReactNode 
  align?: 'center'
  style?: any
  className?: any
  htag?: '1' | '2' | '3' | '4' | '5' | '6'
}

// ---------- This is the end of declarations ---------- //

export const Heading = ({
    size, // Optional - for the font size of the heading
    font, // Optional - for the option to make the font code from the default font
    color, // Optional - To change the color of the text
    title, // Required - For the title of the heading
    heavy,
    bold, // Opitonal - the heading is regular by default but can be changed to bold or heavy weights
    children,
    align,
    style,
    className,
    htag
  }:HeadingProps) => {
  
  const Tag = htag ? headingTags[ htag ] : HeadingWrap

  return (

    <Tag>
      <HeadingWrap {...{ size, color, font, align, style, className }}>
        { heavy 
          ? ( <Heavy>{ title || children }</Heavy> ) 
          : bold ? ( <Bold>{ title || children }</Bold> ) 
          : ( <>{ title || children }</> )
        }
      </HeadingWrap>
    </Tag>

  )
}


