import React from 'react'
import { styled } from '@theme'
import { Button } from '../'
import { Heading, Icon } from '@components'

// For the master container of the card component
// This is used as a shared component throughout the app - both in static and emergency mode

const CardWrap = styled('div', {
  position: 'relative',
  width: '100%',
  background: '#151515',
  border: '1px solid #212121',
  borderRadius: '$r1',
  overflow: 'hidden'
})

// For the container of all of the content within the master container
// This allows for the spacing and width within the content, as well as provides a title if needed

const CardContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '85%',
  margin: '0 auto',
  padding: '20px 0',
  '> *:not(:last-child)': { marginBottom: 12 },

  // Here we allow for different spacing of the content within the container
  // This will keep the spacing consistant between each of the content clocks within the container

  variants: {
    spacing: {
      l0: { '> *:not(:last-child)': { marginBottom: 8 }},
      l1: { '> *:not(:last-child)': { marginBottom: 24 }}
    },

    // Here we allow for the different changes in the orientaion of the card
    // Specifically, we add support for horizontal oreintation of the card, such as the location card

    direction: {
      horizontal: { 
        flexDirection: 'row',
        width: '88%',
        padding: '16px 0',
        '> *:not(:last-child)': { margin: '0 16px 0 0' },
      }
    },

    // Here we allow for the removal of the automated spacing in the card
    // This will keep the card content full width and height of the container, if needed

    removeSpacing: {
      true: { 
        width: '100%',
        padding: 0, 
        margin: 0,
        '> *:not(:last-child)': { marginBottom: 0 },
      }
    }
  }
})

const CardHeaderWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  position: 'relative'
})

// For the title on the top of the container
// This holds the icon on the left and the title on the right

const CardHeader = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginRight: 8 }
})

// -------------- Typescript declarations -------------- //

interface CardProps {
  spacing?: 'l0' | 'l1'
  direction?: 'horizontal'
  removeSpacing?: boolean
  icon?: string
  title?: string
  buttonTitle?: string
  headingSize?: 'l0',
  headingColor?: 'secondary'
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Card = ({ 
    spacing, // Optional - For the spacing of the content wihtin the content container
    direction, // Optional - Supporting horizontal orientation of the card
    removeSpacing, // Optional - For the skeleton feature of the card
    icon, // Optional - For the icon to the left of the title in the card
    title, // Optional - For the title of the card 
    buttonTitle,
    headingSize,
    headingColor,
    children // Required - For the content within the card
  }:CardProps) => {

  return(

    <CardWrap>
      <CardContent {...{ spacing, direction, removeSpacing }}>
        { title && (
          <CardHeaderWrap>
            <CardHeader>
              { icon && ( <Icon size="l0" {...{ icon }} /> )}
              <Heading 
                heavy 
                size={ headingSize }
                color={ headingColor } 
                {...{ title }} 
              />
            </CardHeader>

            { buttonTitle && ( <Button inline title={ buttonTitle } /> )}
          </CardHeaderWrap>
        )}

        { children }
      </CardContent>
    </CardWrap>

  )
}
