import React from 'react'
import { styled } from '@theme'

const BaseWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  position: 'absolute',
  top: 0,
  width: '80%',
  height: '80%',
  zIndex: 0,
  fill: '#1acc6c',
  marginRight: 20
})

const BaseLeft = styled('div', {
  position: 'relative',
  width: 50,
  marginTop: 1
})

const BaseRight = styled('div', {
  position: 'relative',
  width: 30,
})

export const BaseBack = () => {
  return(

    <BaseWrap>
      <BaseLeft>
        <svg viewBox="0 0 155 388.5">
          <path d="M1.5,311.5c0-15.6,0-31.3,0-46.9c-0.1-14.4-1.4-28.8-1.4-43.3c0.2-40.8,0-81.7-0.1-122.5
            c0-4.5,2.9-26.3,4.3-30.7c9.4-29.6,27.3-51.8,56.6-63.8c6.8-2.8,14-4.4,21.8-4.3c20.3,0.4,40.6,0.1,60.8,0.2c1.7,0,3.5-0.3,5.2,0
            c2.6,0.5,4.8,1.7,5.8,4.6c1.3,3.4,0.1,5.9-3.3,6.3c-1.4,0.2-2.9,0.2-4.3,0.2c-16.2-0.1-32.4-0.3-48.6-0.5c-2.3,0-4.6,0-6.8-0.8
            c-1.6-0.6-3.4-0.6-5.1-0.5C70.5,9.7,56.5,15,44.7,25.7c-6.4,5.8-12.7,11.6-17.4,19C16.6,61.4,10.8,79.3,11.1,99.3
            c0.5,27.8,0.5,55.6,0.4,83.4c0,6.3,0.8,12.5,0.2,18.9c-0.6,6.6,0,13.3-0.1,20c0,6.4,0,12.7,0,19.1c0,6.7,0,13.3-0.1,20
            c0,6.4,0,12.7,0,19.1c0,6.7,0,13.3,0,20c0,6.4,0,12.7,0,19.1c0,6.7,0,13.3,0,20c0,6.4,0,12.7,0,19.1c0,6.1-0.3,12.2-0.3,18.2
            c0,2.6-1.1,4.4-3,5.9c-1.4,1.1-3.8,0.5-4.1-1.3c-0.8-4.5-1.9-9-1.9-13.6c0.1-18.5,0-37.1,0-55.6c-0.2,0-0.3,0-0.5,0L1.5,311.5z"/>
          <path d="M17.2,271.4c0-27.2,0.5-54.5-0.2-81.7c-0.4-14.7-0.9-29.4-1-44.2c-0.1-16.2-0.3-32.5,0-48.7
            c0-5.4,1-10.8,2-16.1c1.4-6.7,3.2-13.3,5.8-19.8c7.2-18,19.9-30.1,37.3-37.7c6.9-3,14.3-4.7,21.7-5.4c8.6-0.7,17.1-2.8,25.8-2
            c5.2,0.5,10.3,1,15.4,1.7c1,0.1,2.2,0.9,2.8,1.8c1.2,1.9,2.6,3.9,2.7,6.3c0,1.3-0.5,2.3-1.8,2.5c-1.1,0.2-2.4,0.3-3.5,0
            c-7.6-2.1-15.5-1.2-23.2-2.4c-4.1-0.6-8.6,0.3-12.8,0.9c-10.8,1.5-21.5,3.1-30.9,9.9c-13.4,9.7-22.7,22.1-26.9,38.1
            c-2.5,9.5-3.6,19.3-3.6,29.1c0,35.6,0,71.3,0,106.9c0,9,0,18,0.1,26.9c0,2,0.5,4,0.6,6c0.2,2.9,0.9,5.9,0.3,8.6
            c-2,10.1-1.6,20.3-0.8,30.3c1.6,19.7,0.4,39.3,0.9,59c0,3.4,0.7,7-1,10.2c-0.3,0.5-0.4,1.2-0.1,1.7c2.4,5.1,0,10.2,0,15.3
            c0,4.9,0,9.8-0.3,14.8c-0.1,3.2-1.1,4.4-3.7,5c-2,0.5-3.5-0.5-3.7-2.4c0-0.9,0-1.7-0.1-2.6c-0.6-19.9-1.9-39.8-1.6-59.8
            c0.3-17.4,0-34.8,0-52.1H17L17.2,271.4z"/>
        </svg>
      </BaseLeft>

      <BaseRight>
        <svg viewBox="0 0 87.7 384.6">
          <path d="M68.3,225.6c0,46.3,0,92.6,0,139c0,1.4,0,2.9,0,4.3c-0.2,2.9-2,4.7-4.5,5.8c-2,0.9-4.3-0.4-4.4-2.5
            c-0.2-7.8-0.4-15.6-0.4-23.5c0-5.5-0.7-10.9-0.8-16.4c-0.2-5.9-0.8-12-0.2-17.9c0.4-3.7-0.1-7.3,0-11c0.3-13-1.2-26,0.8-39
            c0-0.6,0.1-1.2,0-1.7c-2.1-14.1-0.8-28.3-0.9-42.4c-0.2-41.4,0-82.8-0.2-124.2c0-10.1,0.2-20.3-2-30.2c-1.4-5.9-3-11.7-5.1-17.3
            c-3.5-9.2-8.6-17.7-15.3-24.9c-8.1-8.7-17.5-15-29.8-16c-0.9,0-1.8,0-2.6-0.3C1.5,6.9,0.3,6.2,0,4.5c-0.1-1.2,1-2.2,2.9-2.4
            C13.8,0.9,23.4,4.3,32.4,10c9,5.6,15.4,13.7,21.3,22.4c6.7,10.1,9.9,21.3,12.7,32.8c0.3,1.4,0.5,2.9,0.5,4.3
            c-0.2,6.9,2.1,13.6,1.7,20.6c-0.3,6.9,0,13.9,0,20.8c0,34.2,0,68.3,0,102.5c0,4.1,0,8.1,0,12.2L68.3,225.6L68.3,225.6z"/>
          <path d="M76.4,323.1c0-16.2,0-32.4,0-48.7c0-4,0.7-8.1-1-12c1.4-5.4-0.2-10.8-0.2-16.2c0-47.2,0-94.5-0.6-141.7
            c-0.1-10-0.4-20.2-1.6-30.2c-2.2-18.2-7.8-35.5-17.6-51.1c-4.6-7.3-9.8-14.4-18.3-17.9c-1-0.4-2.1-1.5-1.5-2.7
            c0.4-0.9,1.6-1.5,2.5-2.3c0.2-0.2,0.6-0.1,0.8-0.2c2.9-0.2,5.7,0,8.5,1.2C53.8,3.9,58.7,8.6,62.5,14c8.1,11.3,13.7,23.9,16.8,37.6
            c2,8.7,3,17.6,4.6,26.3c0.4,2.2,0.1,4.6,0.2,6.9c0.2,28.1-0.3,56.2,0.9,84.3c0.8,19.4,0.7,38.7,0.9,58.1
            c0.2,19.1,0.2,38.2,0.2,57.4c0,25.8,0.2,51.6,0.3,77.3c0,3.1-0.3,6.3,0.9,9.4c0.7,1.8,0,4,0.3,6c0.6,5.3-2.6,6.1-6.7,7.3
            c-1.5,0.4-3.8-1.1-3.9-2.7c-0.2-2.6-0.3-5.2-0.3-7.8c0-17.1,0-34.2,0-51.3h-0.2L76.4,323.1z"/>
        </svg>
      </BaseRight>
    </BaseWrap>

  )
}
