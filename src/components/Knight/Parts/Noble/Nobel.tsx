import React from 'react'
import { styled } from '@theme'
import { Person, Lance, Saddle } from './Parts'

const Knight = styled('div', {
  position: 'absolute',
	top: 0,
	left: 114,
	width: 150,
	zIndex: 10
})

export const Nobel = () => {
  return(

    <Knight>
	  	<Lance />

	  	<div className="knight__main">
				<svg viewBox="0 0 305.8 524.9">
          <Saddle />
          <Person />
				</svg>
			</div>
		</Knight>

  )
}
