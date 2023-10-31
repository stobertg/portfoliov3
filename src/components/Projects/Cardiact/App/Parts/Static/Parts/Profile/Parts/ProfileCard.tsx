import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

const CardWrap = styled('div', {
  position: 'relative',
  width: '100%',
  border: '1px solid $borderDeco',
  borderRadius: '$r2'
})

const CardContent = styled('div', {

})

const CardHero = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  padding: '20px 0',
  '> *:not(:last-child)': { marginBottom: 12 }
})

const ProfileImage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 80,
  height: 80,
  background: '$white',
  border: '2px solid $white',
  borderRadius: '50%',
  overflow: 'hidden',

  img: { 
    position: 'absolute',
    height: '100%',
    width: 'auto' 
  }
})

const CardText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  fontSize: 14
})

const CardChip = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  padding: '12px 8px',
  borderTop: '1px solid $borderDeco',
  color: 'green',
  fontSize: 12
})

export const ProfileCard = () => {
  return(

    <CardWrap>
      <CardHero>
        <ProfileImage><img src="/projects/cardiact/ed.jpg" alt="Cardiact" /></ProfileImage>
        <CardText>
          <Heading heavy size="l1" title="Edward York IV" />
          <Heading color="secondary" title="Male, aged 40" />
        </CardText>
      </CardHero>

      <CardContent>
        <CardChip><Heading bold title="Forcable entry allowed" /></CardChip>
      </CardContent>
    </CardWrap>

  )
}
