import React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs';
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

const TabsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  position: 'relative',
  width: '80%',
  margin: '0 auto',
  '> *:not(:last-child)': { marginRight: 12 },
  
  '&:before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backdropFilter: 'blur( 10px )'
  },

  variants: {
    variant: {
      mobile: {
        width: '100%',
        padding: '0 32px 12px',
        justifyContent: 'space-between',
        borderTop: '1px solid #252525',
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
  '&[data-state="active"]': { 
    '*': { 
      color: '#4375ff' 
      
    }
  },

  variants: {
    variant: {
      mobile: {
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 12,
        '> *:not(:last-child)': { marginRight: 0 },
      }
    }
  }
})

const TabsContent = styled( TabsPrimitive.Content, {
  position: 'relative',
  width: '100%',
  height: 465,
  outline: 'none',

  variants: {
    variant: {
      mobile: {
        height: 528,
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
  defaultTab?: number
  bgColor?: 'primary' | 'secondary' | 'tertiary'
  bold?: boolean
}

// ---------- This is the end of declarations ---------- //

export const Tabs = ({ 
    variant,
    triggers,
    tabContent,
    defaultTab,
    bgColor,
    bold
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
