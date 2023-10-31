import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Iphone } from '@components'

const story = {
  title: 'modules/Iphone',
  component: Iphone,
  layout: 'fullscreen',
  argTypes: {}
}
export default story

export const Primary = () => (

  <Iphone />
  
)
