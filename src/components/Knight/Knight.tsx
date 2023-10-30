import React from 'react'
import { styled } from '@theme'
import { Nobel, HorseBase } from './Parts'

export const Knight = () => {
  return(

    <div className="animation__horse">
		  <div className="animation__horse--contain">
			  <div className="horse">
          <Nobel />
          <HorseBase />
        </div>
      </div>
    </div>

  )
}
