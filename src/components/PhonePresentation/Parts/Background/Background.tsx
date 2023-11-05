import React from 'react'
import { styled } from '@theme'

export const PhoneBackground = () => {
  return(

    <svg viewBox="0 0 200 200">
      <defs>
        <linearGradient id="header-shape-gradient" x2="0.35" y2="1">
          <stop offset="0%" stopColor="#f55024"></stop>
          <stop offset="50%" stopColor="rgba(255,0,0,1)"></stop>
          <stop offset="100%" stopColor="#b10000"></stop>
        </linearGradient>
      </defs>
      
      <path className="gradient-bg" d="M30.2,-46.6C38.9,-35.1,45.8,-26.1,54.1,-14.3C62.3,-2.6,72,12,72.4,27.4C72.7,42.8,63.7,59.1,
        50.1,65.1C36.5,71,18.3,66.7,2.2,63.6C-13.8,60.6,-27.7,58.8,-42.7,53.4C-57.8,47.9,-74.1,38.6,-79.2,25.2C-84.4,11.7,-78.4,
        -5.9,-72,-22.7C-65.6,-39.5,-58.7,-55.4,-46.7,-65.8C-34.6,-76.2,-17.3,-80.9,-3.3,-76.4C10.7,-71.8,21.4,-58,30.2,-46.6Z" 
        transform="translate(100 100)">
      </path>
    </svg>

  )
}
