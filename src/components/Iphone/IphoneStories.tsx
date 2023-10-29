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

  <Iphone 
    name="Javier Stober"
    title="Propulsion & Microgravity | R & D"
    location="Cambridge, Massachusetts"
    image="/people/javier.jpeg" 
    bgImage="/hero/rocket2.webp"
    experience={[
      {
        university:[
          { 
            image: '/university/stanford.png', 
            title: 'Stanford University', 
            subTitle: 'Doctor of Philosophy (Ph.D.), Aeronautics and Astronautics',
            years: '2012-2017'
          },
          { 
            image: '/university/stanford.png', 
            title: 'Stanford University', 
            subTitle: 'Master of Science (M.S.), Aeronautics and Astronautics',
            years: '2010-2012'
          },
          { 
            image: '/university/u-of-florida.webp', 
            title: 'University of Florida', 
            subTitle: 'Bachelor of Science (B.S.), Aeronautical and Astronautical Engineering',
            years: '2005-2010'
          }
        ],
        internships:[
          { 
            image: '/companies/nasa.svg', 
            title: 'Jet Propulsion Laboratory', 
            subTitle: 'Mechanical Design and Analysis Intern', 
            years: 'May 2008 - Aug 2008' 
          },
          { 
            image: '/university/u-of-florida.webp', 
            title: 'University of Florida, Energy and Gas Dynamics Laboratory', 
            subTitle: 'Undergraduate Research Assistant', 
            years: 'Jan 2008 - May 2008' 
          },
          { 
            image: '/companies/nasa.svg', 
            title: 'NASA Ames Research Center', 
            subTitle: 'Mechanical Design Intern', 
            years: 'Jun 2007 - Aug 2007' 
          }
        ]
      }
    ]}
  />
  
)
