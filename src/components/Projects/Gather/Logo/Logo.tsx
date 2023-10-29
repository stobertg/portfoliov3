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

    <div className="loading__animation">
			<LogoWrap>
				<Cap />
				<div className="g__middle">	
					<div className="g__middle--left"></div>
					<div className="g__middle--right"></div>
				</div>
				<Cap />
			</LogoWrap>
		</div>

  )
}
