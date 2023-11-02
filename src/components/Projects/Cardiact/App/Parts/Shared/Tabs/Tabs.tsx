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

  variants: {
    variant: {
      mobile: {
        flexDirection: 'column-reverse'
      }
    }
  }
})

// For the master containers of the tabs on the top of the container
// This contains the triggers that show the different content contextual to the tab that is clicked

const TabsList = styled( TabsPrimitive.List, {
  position: 'relative',
  width: '100%',
})

const TabsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  
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
        padding: '0 32px 12px',
        justifyContent: 'space-between',
        borderTop: '1px solid #252525',
        zIndex: 10
      }
    }
  }
})

// For the indivudual shared stying of the tab triggers within the master container
// Clicking on these will change the content below

const TabsTrigger = styled( TabsPrimitive.Trigger, {
  display: 'flex',
  position: 'relative',

  variants: {
    variant: {
      mobile: {
        padding: '12px 0',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 12
      }
    }
  }
})

const TabsContent = styled( TabsPrimitive.Content, {
  outline: 'none',

  variants: {
    variant: {
      mobile: {
        height: 450,
        zIndex: 0,
        overflow: 'scroll'
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
  }[]
  tabContent: { 
    title?: string 
    content?: React.ReactNode 
  }[]
  defaultTab?: number
  bgColor?: 'primary' | 'secondary' | 'tertiary'
  border?: 'noBorder'
  tabSize?: 'tiny' | 'small'
  contentWidth?: 'small' | 'medium' | 'large'
  onSearch?: any
}

// ---------- This is the end of declarations ---------- //

export const Tabs = ({ 
    variant,
    triggers,
    tabContent,
    defaultTab,
    bgColor,
    border,
    tabSize,
    contentWidth,
    onSearch
  }: TabsProps) => {
  return (

    <TabsWrap defaultValue={ `tab${ defaultTab ? defaultTab : 1 }` } {...{ variant }}>
      <TabsList>
        <TabsContainer {...{ variant }}>
          { triggers.map(( trigger, i ) => (
            <TabsTrigger 
              key={ `trigger-${ i + 1 }`} 
              value={`tab${ i + 1 }`}
              {...{ variant }}
            > 
              { trigger.icon && ( <Icon size="l0" icon={ trigger.icon } /> )}
              { trigger.title && ( <Heading color="secondary" title={ trigger.title } /> )}
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
