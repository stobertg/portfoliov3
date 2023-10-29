import React from 'react'
import { styled } from '@theme'

const LogoWrap = styled('figure', {
  position: 'relative',
	width: 110,
	height: 129,
	overflow: 'hidden',
})

const Cap = styled('div', {

})

export const GatherLogo = () => {
  return(

		<LogoWrap>
			<img src="/projects/gather/logo.svg" alt="Gather logo" />
		</LogoWrap>

  )
}
