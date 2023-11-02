import React from 'react'
import { styled } from '@theme'
import { Heading, Icon } from '@components'
import { Card } from '../../../../Shared'

const ContactWrap = styled('div', {
  position: 'relative',
  width: '100%'
})

const ContactInfo = styled('div', {
  position: 'relative',
  width: '100%',
  padding: '12px 0',

  figure: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    width: 'calc( 100% - 24px )',
    margin: '0 auto',
    '> *:not(:last-child)': { marginRight: 12 }
  },

  figcaption: {
    position: 'relative',
    '> *:not(:last-child)': { marginBottom: 2 },
    '> *:first-child': { fontSize: 12 }
  }
})

const CardImage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 52,
  height: 52,
  borderRadius: '$r0',
  overflow: 'hidden',
  
  img: {  
    position: 'absolute',
    height: '100%',
    width: 'auto'
  }
})

const ContactControls = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  borderTop: '1px solid $borderDeco',
  '> *:not(:last-child)': { borderRight: '1px solid $borderDeco' }
})

const ControlButton = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '50%',
  padding: '12px 0',
  fontSize: 12,
  transition: '$s1',
  '> *:not(:last-child)': { marginRight: 8 },
  '&:hover': { background: '$border' }
})  

interface ContactProps {
  image: string
  imageAlt: string
  relation: string
  name: string
}

export const ContactCard = ({  
    image,
    imageAlt,
    relation,
    name
  }:ContactProps) => {
  
  return(

      <Card removeSpacing>
        <ContactWrap>
          <ContactInfo>
            <figure>
              <CardImage><img src={ image } alt={ imageAlt } /></CardImage>

              <figcaption>
                <Heading color="secondary" title={ relation } />
                <Heading heavy title={ name } />
              </figcaption>
            </figure>
          </ContactInfo>

          <ContactControls>
            <ControlButton>
              <Icon size="l0" icon="message-circle" />
              <Heading bold title="Message" />
            </ControlButton>

            <ControlButton>
              <Icon size="l0" icon="phone" />
              <Heading bold title="Call" />
            </ControlButton>
          </ContactControls>
        </ContactWrap>
      </Card>

  )
}
