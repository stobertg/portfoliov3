import React from 'react'
import { styled } from '@theme'

// For the container of the github icon on the about page
// This holds the social link to my github

const IconWrap = styled('div', {
  svg: { width: '24px !important' }
})

// ---------- This is the end of declarations ---------- //

export const GithubIcon = () => {
  return(
  
    <IconWrap>
      <svg viewBox="0 0 512 512">
        <path d="M256,9.1C116.2,9.1,2.8,122.4,2.8,262.3C2.8,374.1,75.4,469,176,502.5c12.7,2.3,17.3-5.5,17.3-12.2
          c0-6-0.2-21.9-0.3-43.1c-70.4,15.3-85.3-33.9-85.3-33.9c-11.5-29.2-28.1-37-28.1-37c-23-15.7,1.7-15.4,1.7-15.4
          c25.4,1.8,38.8,26.1,38.8,26.1c22.6,38.7,59.3,27.5,73.7,21c2.3-16.4,8.8-27.5,16.1-33.8C153.6,367.7,94.5,346,94.5,249
          c0-27.6,9.9-50.2,26.1-67.9c-2.6-6.4-11.3-32.1,2.5-67c0,0,21.3-6.8,69.6,26c20.2-5.6,41.8-8.4,63.4-8.5c21.5,0.1,43.2,2.9,63.4,8.5
          c48.3-32.8,69.5-26,69.5-26c13.8,34.9,5.1,60.6,2.5,67c16.2,17.7,26,40.3,26,67.9c0,97.3-59.2,118.7-115.6,124.9
          c9.1,7.8,17.2,23.3,17.2,46.9c0,33.8-0.3,61.1-0.3,69.4c0,6.8,4.6,14.6,17.4,12.2c100.5-33.5,173-128.4,173-240.2
          C509.2,122.4,395.8,9.1,256,9.1z"
        />
      </svg>
    </IconWrap>

  )
}
