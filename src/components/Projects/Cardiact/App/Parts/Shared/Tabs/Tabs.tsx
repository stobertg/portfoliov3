import React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { styled } from '@theme'
import { Heading, Icon } from '@components'

// For the master container of the tabs
// this contains the tab triggers on the top and the content click below the tabs

const TabsWrap = styled( TabsPrimitive.Root, {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',

  // For the mobile layout we swap directions of the nav and the content
  // This is so the navigation can sit on the bottom of the container, as traditional App navigation

  variants: {
    variant: {
      mobile: { flexDirection: 'column-reverse' }
    }
  }
})

// For the master containers of the tabs on the top of the container
// This contains the triggers that show the different content contextual to the tab that is clicked

const TabsList = styled( TabsPrimitive.List, {
  position: 'relative',
  width: '100%',
  borderBottom: '1px solid #212121',

  // For the mobile variant, we want the navigation to be on the bottom of the container
  // This will set it here and remove the default border from the default

  variants: {
    variant: {
      mobile: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        borderBottom: 'none'
      }
    }
  }
})

// For the master container of the tabs buttons on the top or bottom of the application
// This hodls all of the buttons which will switch the content to match the screen clicked

const TabsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  position: 'relative',
  width: '80%',
  margin: '0 auto',
  '> *:not(:last-child)': { marginRight: 12 },

  // For the mobile variant of the tab navigation
  // Since this is positioned on the bottom of the page, we need some spacing and design changes

  variants: {
    variant: {
      mobile: {
        width: '100%',
        padding: '0 32px 12px',
        justifyContent: 'space-between',
        borderTop: '1px solid #252525',
        backdropFilter: 'blur( 10px )',
        zIndex: 10,
        '> *:not(:last-child)': { marginRight: 0 },
      }
    }
  }
})

// For the indivudual shared stying of the tab triggers within the master container
// Clicking on these will change the content below

const TabsTrigger = styled( TabsPrimitive.Trigger, {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  padding: '12px 0',
  fontSize: 13,
  '> *:not(:last-child)': { marginRight: 4 },
  '&[data-state="active"]': { '*': { color: '#4375ff' }},

  // For the mobile variant, the content stacks on top of one another
  // Here we have the icon on the top, the text below, and we change the font size to be smaller

  variants: {
    variant: {
      mobile: {
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 11,
        '> *:not(:last-child)': { marginRight: 0 },
      }
    }
  }
})

// For the master container of the content associated with each of the tabs
// For CardiAct, this sets the height of the content within the phone

const TabsContent = styled( TabsPrimitive.Content, {
  position: 'relative',
  width: '100%',
  height: 465,
  outline: 'none',

  // For the mobile variant we change the default styling to be able to function as a mobile application
  // This will allow the scroll within the container, as the content falls within the restrictions set by the phone height

  variants: {
    variant: {
      mobile: {
        height: 522,
        zIndex: 0,
        overflow: 'scroll',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': { display: 'none' },
      }
    }
  }
})
  
// -------------- Typescript declarations -------------- //

interface TabsProps {
  variant?: 'mobile'
  defaultTab?: number
  bgColor?: 'primary' | 'secondary' | 'tertiary'
  bold?: boolean
  triggers: { 
    logo?: React.ReactNode
    icon?: string
    iconLayered?: string
    title?: string 
    onClick?: React.MouseEventHandler<HTMLButtonElement>
  }[]
  tabContent: { 
    title?: string 
    content?: React.ReactNode 
  }[]
}

// ---------- This is the end of declarations ---------- //

export const Tabs = ({ 
    variant, // Optional - For the ability to mave a traditional mobile app navigation
    triggers, // Required - For the tab buttons within the navigation
    tabContent, // Required - For the content assicociated with each tab
    defaultTab, // Optional - To set the default screen of the application
    bgColor, // Optiaonal - For the background color of the tabs
    bold // Optional - To make the titles of the tab be bold
  }: TabsProps) => {
  return (

    <TabsWrap defaultValue={ `tab${ defaultTab ? defaultTab : 1 }` } {...{ variant }}>
      <TabsList {...{ variant }}>
        <TabsContainer {...{ variant }}>
          { triggers.map(( trigger, i ) => (
            <TabsTrigger 
              key={ `trigger-${ i + 1 }`} 
              value={`tab${ i + 1 }`}
              {...{ variant }}
              onClick={ trigger.onClick }
            > 
              { trigger.icon && ( <Icon size="l0" icon={ trigger.icon } /> )}
              { trigger.title && ( <Heading {...{ bold }} color="secondary" title={ trigger.title } /> )}
            </TabsTrigger>
          ))}
        </TabsContainer>
      </TabsList>
      
      { tabContent.map(( content, i ) => (
        <TabsContent 
          {...{ bgColor, variant }}
          key={`tab-${ i }`} 
          value={`tab${ i + 1 }`}
        >
          { content.content || content.title }
        </TabsContent>
      ))}
    </TabsWrap>
    
  )
}
