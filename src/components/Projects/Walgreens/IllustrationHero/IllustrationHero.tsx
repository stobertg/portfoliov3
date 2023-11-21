import React from 'react'
import { styled } from '@theme'
import { ManWithWallet, Text } from '@components'

// For the master container of the Walgreen Illustration hero
// This component is used on the CSS Animations page

const HeroWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginBottom: 12 }
})

// For the container of the illustration contained within the box
// This sits the illustration within the center of the parent container

const HeroContent = styled('div', {
  position: 'relative',
  width: '100%',
  padding: '50px 0',
  border: '1px solid $borderDeco'
})

// ---------- This is the end of declarations ---------- //

export const WalgreensIllusHero = () => {
  return(

    <HeroWrap>
      <HeroContent><ManWithWallet full /></HeroContent>
      <Text align="center" color="secondary">
        <p>Illustration by <a href="https://www.daniknightillustration.com/" target="_blank" rel="noreferrer">Dani Knight</a></p>
      </Text>
    </HeroWrap>

  )
}