import React from 'react'
import { styled } from '@stitches/react'

const BaseWrap = styled('div', {
  display: 'flex',
  position: 'relative',
  width: 240,
  fill: '$green',
  zIndex: 2
})

const Front = styled('g', {
  position: 'relative',
  zIndex: 10
})

const NewtonBase = () => {
  return(

    <BaseWrap>
      <svg viewBox="0 0 769.7 437.5">
        <Front>
          <path d="M769.7,425.9c-0.4-11.8-0.5-23.6-0.8-35.4c0-2.2-0.5-4.5-0.9-7.4c-11.2,0.8-21.2,1.9-31.3,2.2
            c0.2-1.2,0.1-2.6,0-4.1c-0.2-2.3,0-4.6,0-6.9c-1.3-73.3-2.5-146.5-3.9-219.8c-0.5-23.7-1-47.4-0.3-71.2c0.4-13.1-3.1-25.4-10-36.3
            c-18.3-28.9-43.7-45.3-78.9-45.1c-31.3,0.2-62.5-0.7-93.8-0.8c-77.3-0.2-154.7-0.3-232-0.2c-41.7,0-83.4-0.4-125.1,0.9
            c-5.1,0.2-11.1-1.2-13.9,5.4c-0.3,0.6-1.5,0.8-2.3,1.1C159,16.7,145.9,30,135.6,46.2c-9.9,15.7-16.4,32.5-15,51.6
            c0.3,4,0.7,8.1,0.7,12.1c-0.3,31-0.7,62-1,93c-0.2,27.2-0.3,54.4-0.5,81.6c-0.3,32.8-0.4,65.6,0.2,98.4c-6-0.1-12.1-0.2-18.1-0.3
            c-9-0.2-17.9-0.9-26.9-1.2c-8.1-0.3-16.1-0.2-24.2-0.4c-14.5-0.3-28.9-0.5-43.4-0.9c-4.7-0.1-6.9,2.1-6.9,6.8
            c-0.1,13.9-0.2,27.8-0.5,41.7c0,4.1,1.6,6.7,5.9,7.1c6.3,0.6,12.6,1.7,18.9,1.7c30.4,0.2,60.8,0,91.2,0
            c131.4-0.1,262.9-0.2,394.3-0.4c77-0.1,154-0.5,231.1-0.9c6.9,0,13.9-0.3,20.7-1.1c6.8-0.8,7.6-2.5,7.4-8.9L769.7,425.9z
            M521.3,388.2c-51.8-0.3-103.6-1.7-155.4-2.4c-58.2-0.7-116.3-1.1-174.5-1.8c-14.8-0.2-29.7-0.4-44.5-0.7c0-0.4,0-0.8,0-1.3
            c0-9.6,0.2-19.1,0.2-28.7c0-81.4,0.2-162.8-1.2-244.1c-0.4-25.8,7.4-48.5,26.5-66.4c8.9-8.3,19-15.5,32.2-15.1
            c43.7,1.4,87.4,1.4,131.1,1.3c65.7-0.1,131.4-0.3,197.1-0.4c37.3,0,74.7-0.1,112-0.4c9.3,0,17.7,3.1,25.3,7.7
            c26.4,15.8,39.1,39.1,38.3,70c-0.5,17.9-0.6,35.9-0.5,53.8c0.5,60.2,0.9,120.4,1.8,180.6c0.2,15.2-1.6,30.5,1.1,45.6
            c-19.5,0.5-39,0.9-58.5,1.2c-43.7,0.5-87.4,1.2-131.1,1L521.3,388.2z"
          />
        </Front>
      </svg>
    </BaseWrap>

  )
}

export default NewtonBase