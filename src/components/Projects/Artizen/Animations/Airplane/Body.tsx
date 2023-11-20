import React from 'react'
import { styled } from '@theme'

const AirplaneBase = styled('div', {
  position: 'relative',
  width: 450,
  zIndex: 2
});

const Green = styled('path', {
  fill: '$green'
})

const AirplaneBody = () => {
  return(

    <AirplaneBase>
      <svg viewBox="0 0 739.5 347.2">
        <Green d="M511.1,52.3c-1.1,3.8-3,7.3-4.3,11c-1.6,4.5-3,9-4.3,13.5c-2.4,8-4.1,16.2-5.3,24.5c-0.5,3.6-0.7,7.3-0.9,11
          c-0.3,5.6-0.5,11.2,0.2,16.7c0.7,5.6,1.7,11.1,3,16.5c2,8.6,5.5,16.8,9,24.9c2,4.7,4.1,9.3,7,13.5c2.3,3.2,8.4,4.9,11.7,2.3
          c-5.4-2-6.4-7.2-8.2-11.6c-3.9-9.1-7.9-18.1-10.5-27.7c-2.4-8.5-3.5-17.1-3.5-25.9c0-14.5,2.9-28.5,6.6-42.4
          c2.9-10.6,6.7-20.6,12.5-29.8c0.5-0.8-0.7-2.7,1.4-2.5c2.5-0.6,5-1.4,7.4-2.4c3.9-1.6,7.8-3.2,11.7-4.5c1.9-0.7,3.5-2.5,3.1-4.4
          c-0.6-2.9-1.4-3.6-4.2-3c-3.6,0.7-7.2,1.6-10.9,2.3c-0.4-0.3-1-0.8-0.3-1.3c2.5-1.7,3.5-4.7,5.9-6.6c0.9-0.7,1.8-1.4,2.9-1.2
          c5.1,0.9,9.6-1.5,14.5-1.9c4.6-0.4,9-1.4,13.7-1.1c3.1,0.2,6.4-0.1,9.5,0c4.3,0.1,8.3,1.2,12.2,2.8c9.1,3.6,18,7.9,26,13.5
          c6.6,4.6,12.5,10.2,17.1,16.8c2.1,3,3.7,6.7,4.6,10.5c0.4,1.8,1.3,2.3,3,2.4c7.7,0.2,15.3,0.5,23,0.6c4.2,0,8.3,0.7,12.4,1.1
          c9.5,1,19,2.3,28.2,4.7c7.3,1.9,14.7,3.7,22,5.5c3.5,0.9,6.8,2.6,9.7,4.7c2.9,2.2,2.9,5.4,2.2,8.4c-0.7,3.4-2.3,6.4-5.2,8.6
          c-6.4,5-13.4,8.7-21,11.5c-8.2,3.1-16,7.1-24.1,10.2c-10.2,4-20.8,6.5-31.6,8.3c-4.5,0.8-9,1.8-13.6,1.9c-2,0.1-1.9,1.8-2.1,2.9
          c-1.1,6-2.2,12-3.9,17.9c-3.4,11.5-7.5,22.7-16.5,31.2c-5.6,5.4-12.2,9.3-19.3,12.6c-13.4,6.3-27.2,11.6-40.9,17.1
          c-3.7,1.5-7.6,2.2-11.3,3.2c-4.7,1.3-9.3,3.2-14,4.8c-3.5,1.2-7.1,2.1-10.5,3.5c-1.5,0.6-1.9,1.2-1.1,2.6c3,5.1,6,10.2,8.8,15.5
          c4.5,8.7,10,16.8,14.1,25.7c1.2,2.6,2.8,5,3.9,7.6c0.5,1.2,1.4,1.4,2.6,1.6c6.9,1.3,14,2,20.6,4.1c8.9,2.8,16.9,7.5,20.1,17.2
          c0.8,2.5,1.8,4.8,3,7.2c1.8,3.5,0.7,7.6-2.6,9.7c-1.2,0.8-2.1,1.6-2.7,2.9c-2.2,4.6-6.5,7.1-10.9,8.8c-8.1,3.3-16.6,4.1-25.3,3.8
          c-3.5-0.1-7,0-10.5-0.3c-9.9-0.9-19.6-2.9-28.4-7.7c-3.7-2-7.1-4.6-10.3-7.5c-4.7-4.3-4.4-11.5,0.6-16.7c1.9-1.9,1.6-2.6-0.5-4.1
          c-9-6.4-19-11.1-28.6-16.3c-7.8-4.3-15.6-8.5-23.5-12.5c-6.4-3.3-13.1-6-19.7-9c-1.9-0.8-3.8,0-5.5,0.5
          c-13.6,4.1-27.5,6.3-41.3,9.2c-1.5,0.3-2.7,0.9-3.8,1.9c-6.2,5.6-11.8,11.9-18,17.5c-5.3,4.8-9.8,10.2-14.8,15.2
          c-1.5,1.5-2.5,3.4-4,4.9s-0.1,2.1,1.2,2.6c-0.7,0.5-1.3,0.9-1.9,1.2c-1.3,0.6-1.1,1.3-0.3,2c4.6,4,4.7,9.8,5.3,15.1
          c0.4,3.6-2,6.2-6.4,8.7c-5.4,3.1-11.3,4.3-17.1,6c-10.4,3.1-21,4-31.4,1.1c-5.1-1.4-10.2-3.8-13.8-8.3c-1-1.2-2.5-2.2-4.4-2.4
          c-4.3-0.5-7.5-2.9-9.5-6.7c-2.2-4.2-0.1-8.8,4.6-11.7c7-4.4,14.8-6.6,22.8-8.1c3.7-0.7,7.6-1.5,11.5-0.8c0.9,0.2,2.4,0.3,2.6-0.8
          c0.1-1.1-1.4-1.3-2.3-1.5c-1.5-0.3-3-0.2-4.5-0.5c-0.8-0.1-2.1,0.1-2-1.2c0.1-1.1,1.2-1,1.9-0.9c6,0.8,8.6-2.4,10.1-7.8
          c1.1-4.1,3.1-8,5-11.9c0.8-1.6,1.2-2.7-1.6-2.5c-6.1,0.5-12.1,2.1-18.2,2.6c-4.4,0.3-8.8-0.3-13.2-0.1c-8.4,0.5-16.9,0.5-25.3,1.3
          c-9.6,0.9-19.2,0.9-28.8,0.6c-3.8-0.1-7.7-0.2-11.5-0.4c-12.6-0.6-25.1-1.5-37.7-1.9c-7.8-0.2-15.6-0.9-23.3-1.8
          c-10.7-1.3-20.9-4.7-30.9-8.7c-5.2-2-10.5-3.6-15.9-4.9c-6.3-1.4-11.7-4.5-16.5-8.5c-2.5-2.1-4.9-4.2-7.3-6.3
          c-1-0.9-1.9-0.8-2.9-0.1c-5,3.3-10.5,4.3-16.3,4.6c-5.2,0.2-10.5-0.1-15.7,0.9c-9.8,1.7-19.6,2.9-29.6,2
          c-5.7-0.5-11.3-1.3-16.2-4.6c-2.4-1.6-4.4-3.8-5-6.5c-0.8-3.6,1.2-6,5.5-8.2c9.1-4.8,18.9-6,28.9-7c11.7-1.2,23.4-2.7,35.1-4.1
          c0.6-0.1,1.3-0.2,1.9-0.2c4.1-0.3,4.1-0.2,3-4.1c-1.4-5.1-2.1-10.2-2.8-15.4c-0.9-6.6-2-13.2-3.2-19.7c-1.2-6.3-1.2-12.7-1.1-19.1
          c0.2-7.5,0.2-15,1.9-22.3c2.1-8.6,5.3-16.7,10.3-24.3c3.9-6,9.4-9.2,15.7-11.7c3.7-1.5,7.1-0.4,10.5,0.7
          c6.7,2.1,13.5,4.2,18.2,9.9c4.3,5.2,7.7,11,10.1,17.4c2.4,6.7,5.3,13.2,7,20.1c1.4,5.5,1.7,11.2,2.5,16.8c0.5,3.7,0.7,7.5,1,11.3
          c-1.9,1.6-3.8,3.1-6,4.3c-3.2,1.8-6,4.4-8.9,6.7c-1.2,0.9-2.1,2.7-3.4,3c-4,1-6.5,4-9.3,6.5c-4.5,3.8-9.7,6.7-14.1,10.8
          c-1.6,1.5-2.8,2.5-1.5,4.7c1.3,2.4,4,3.5,5.9,2.5c1.4-0.8,2.7-1.7,4-2.6c3-2.3,5.9-4.8,9-6.9c4.1-2.6,7.6-6,11.8-8.6
          c4.1-2.5,7.6-5.9,11.7-8.4c7.4-4.6,14.5-9.4,21.6-14.5c3.5-2.5,6.8-5.1,10.5-7.2c8.7-4.9,17.8-9,27-12.7c2.7-1.1,5.4-2,8-3.3
          c3.8-1.9,7.5-3.8,11.5-5.3c5.6-2.1,10.8-4.9,15.9-8c6.1-3.6,12.5-6.6,19-9.3c5.3-2.2,10.9-3.6,16.3-5.4
          c8.5-2.8,16.2-7.4,24.7-10.3c5.2-1.8,10.7-2.9,15.9-4.8c9-3.5,17.8-7.4,26.7-11.2c5.2-2.2,10.3-4.8,15.6-6.8
          c6.8-2.6,14-4.1,20.7-6.9c5.4-2.3,10.8-4.7,16.4-6.5c7.8-2.4,15.8-4.1,23.6-6.6c6.3-2,12.7-3.9,19-5.9c4-1.3,7.8-3.2,12.1-3.8
          c0.5,1.1-0.2,1.9-0.6,2.8c-2.2,4.5-3.8,9.3-5.1,14.2c-1.1,4.1-2.2,8.1-3.3,12.2c-2.1,8-3.7,16-5.2,24.1c-0.7,3.9-1.2,7.9-1.1,11.8
          c0.2,5.2,0.3,10.5,0.5,15.7c0.3,5,1.3,9.9,2,14.9c1.5,11,5.6,21.3,10.4,31.3c3,6.2,6.9,11.8,11.5,16.9c3.7,4,7,8.4,12.1,10.9
          c6.6,3.2,11.8,8.3,17.9,12.4c0.5,0.4,1.8,1.3,0.3,1.7c-2,0.5-3.4,2-5.2,2.8c-2.8,1.3-6.1,1.8-8.6,4c0.7,0.6,1.2,1.1,1.8,1.5
          c11.1,7.8,21.2,16.8,32.6,24.2c5.3,3.5,10.9,6.6,15.8,10.7c1.1,0.9,2.3,0.4,3.2-0.3c1.2-0.9,0-1.8-0.4-2.6c-1-2-2.3-3.8-3.4-5.8
          c-2.2-4.2-4.3-8.6-6.6-12.7c-4.7-8.5-8.8-17.2-14-25.5c-1.3-2.1-2.3-2.6-4.4-1.4c-0.9,0.5-1.9,1.3-3.4,0.3
          c-7.1-4.6-13.8-9.7-21.2-13.9c-5.1-2.9-8.9-8-12.3-12.9c-9.6-13.4-15.7-28.2-18-44.7c-1-7.2-1.4-14.4-2-21.6
          c-0.3-4.3-0.2-8.7,0.4-12.7c1.2-7.3,2.6-14.6,4.4-21.9c2.7-10.5,5.3-21,9.2-31.1c2.1-5.3,5.4-9.6,10.5-12.3
          c4.6-1.4,9.2-2.6,13.7-4.2c5.2-1.8,10.6-2.7,15.7-4.7C502.3,54.9,506.6,53.3,511.1,52.3z M585.9,297.3L585.9,297.3L585.9,297.3
          c0.8,1.4,1.2,3.2,3.4,3.8C588.4,299.3,587.3,298.1,585.9,297.3z M638.2,110.7c0.2-7.8-0.6-15.5-2.2-23.1c-1.2-6.1-2.8-12.2-4-18.3
          c-0.7-3.2-2.1-6.4-5.2-8.5c-0.5-0.3-0.9-0.9-1.2-1.4c-3.1-5.4-6.9-10.2-11.9-13.8c-8.9-6.6-18.5-9-29-4.1
          c-8.5,3.9-13.9,11.1-18.3,18.9c-7,12.4-10.3,26-11.4,40c-1.1,14-0.2,28,3.7,41.7c3.4,11.6,8.2,22.4,17.2,30.9
          c10.7,10.1,25.7,11.5,37.1,3.4c7.7-5.5,12.6-13.2,16.4-21.6C635.7,140.7,638,125.9,638.2,110.7z M442.1,257.6
          c1.6,1.5,3.1,2,4.6,2.6c5.5,2.4,11,4.9,16.6,7.2c5.3,2.2,10,5.2,14.9,8c10.1,5.9,20.9,10.7,30.7,17.2c4.1,2.8,4.2,2.6,8-0.3
          c1.6-1.2,1.7-1.9,0-3.2c-8.7-6.4-17.4-13-26.2-19.3c-7.8-5.6-15.5-11.4-23.8-16.4c-1-0.6-1.9-1.1-3-0.7
          C456.9,255.3,449.8,256.9,442.1,257.6z M368.1,273.7c-0.7-0.1-0.9-0.1-1.1-0.1c-7.7,1.3-15.4,2.6-23.1,3.8
          c-0.9,0.1-1.2,0.7-1.5,1.3c-3.8,8.2-7.7,16.5-11.5,24.7c-0.2,0.5-0.5,0.9,0,1.5c1.3,1.4,4.4,1.2,5.7-0.4
          c5.6-7.1,12.3-13.1,19-19.1C359.7,281.8,364.1,278.3,368.1,273.7z M554.5,294.3c4.5,2.2,9.5,2.4,14.1,4.2c4.6,1.8,9.3,3.3,13.5,6
          C574.7,296.3,564.3,296,554.5,294.3z M549.6,304.7c11.1,4,17.2,5.4,19.2,4.5C562.9,307.1,556.9,304.2,549.6,304.7z M547.5,316.2
          c5.1,1.9,10.3,1.8,15.6,1.5c0.8,0,1.9,0.2,1.9-0.9c0-0.8-1.1-0.8-1.7-0.9C558.1,315.1,552.8,315.9,547.5,316.2z M281.6,320.9
          c-2.4,1-3.9,2.2-5.6,3.1c-0.9,0.5-1.8,1-1.7,1.8c0.2,1.1,1.5,1.2,2.4,1.4c0.8,0.2,1.7,0.8,2.3-0.5
          C279.8,325,280.6,323.3,281.6,320.9z M590,315.4c1.4-1.9,1.6-3.6,2-5.2c0.2-1.1,0-2.2-1-2.9c-0.4-0.3-0.8-0.9-1.4-0.5
          c-0.3,0.2-0.4,0.9-0.3,1.2C590.2,310.2,589.5,312.6,590,315.4z M517.2,317.5c-1.4-2.5-3.6-2-5.2-2.7c-0.3-0.1-0.8,0.4-0.6,0.7
          c1.1,1,2.6,1.5,4,2C515.8,317.6,516.3,317.5,517.2,317.5z"/>

        <Green d="M398.8,38.6c6.3-1.9,12.8-2.9,19.2-4.2c9.9-2,20.1-1.3,30-2.7c1.4-0.2,2.9-0.2,4.2-0.5c3.5-0.7,6,0.6,8.8,2.9
          c4.8,3.9,8.8,8.7,13.7,12.5c1.5,1.2,2.7,1.1,4.4,0.6c9.6-3,18.6-7.6,27.8-11.8c5.7-2.6,11.7-4.6,17.6-6.9c0.6-0.2,1.2-0.3,1.7,0.1
          c-2.9,3.6-5.6,7.4-7.6,11.6c-0.4-1.1-1.2-1.1-2.2-0.8c-5.7,1.8-11.4,3.5-17.1,5.2c-3.9,1.2-7.7,2.8-11.7,3.5
          c-4.3,0.8-8.5,1.8-12.6,3c-6.7,1.9-13.2,4.6-19.8,6.9c-12.9,4.5-25.8,8.8-38.8,12.8c-3.3,1-6.5,2.2-9.8,2.9
          c-6.6,1.4-13,3.2-19.3,5.7c-4.8,2-9.5,4.2-14.5,5.9c-5.1,1.7-10.3,3.1-15.3,5.3c-3.3,1.5-7,2.4-10.3,3.9c-2,0.9-4,2-6.1,2.8
          c-8.9,3.7-17.6,8-26.7,11.2l-0.2,0.2c-2.9,0.4-5.2,2.2-8.1,2.7c-3.9,0.6-7.5,2.2-11.2,3.4c-4.6,1.4-8.6,3.9-13.1,5.6
          c-4.6-0.9-9.3-0.8-13.9-1c-9.3-0.3-18.4-1.6-27.6-2.3c-9.1-0.6-18.1-1-27.2-1.7c-6.8-0.5-13.6-1.4-20.4-2.5
          c-6.3-1.1-12.5-2.7-18.8-3.1c-8.2-0.6-16.3-1.6-24.5-2.3c-4.6-0.4-9.3-0.5-14-1.5c-5.5-1.2-11.4-1-17.1-1.4
          c-11.1-0.7-22-2.8-33-3.7c-15.1-1.3-30.1-3.8-45.3-5.1c-8.8-0.7-17-3.9-25.1-7.3c-3-1.2-5-3.8-6.7-6.5c-3.5-5.4-6.9-10.9-7.8-17.4
          c-1.3-9.5,0.9-18.1,7.1-25.7c5.2-6.4,12.1-10.3,19.4-13.9c5-2.5,9.9-4.9,15.1-7c7.8-3.1,15.9-5.3,24.1-7.4C70.7,9.4,75.4,8.1,80,7
          c7.7-1.9,15.4-2.7,23.4-2.4c5,0.2,10,0,15-0.1c5.8-0.2,11.6,0.3,17.4,0.7c-0.5,0.5-1.1,0.6-1.7,0.7C128,7,121.9,8.3,115.8,9.3
          c-9.9,1.6-19.6,3.9-29.4,5.6c-9,1.5-17.7,3.5-25.9,7.7c-5,2.6-10.3,4.6-15.7,6.1c-8.8,2.5-16.2,6.9-22.5,13.6
          C18,47,14,51.9,10.5,57.2c-2.4,3.6-5.2,7-6.5,11.2c-0.3,1-0.6,2,0.4,2.7c0.8,0.6,1.5-0.2,2.2-0.5c1.5-0.6,2.7-1.7,3.7-3
          c4.3-5.9,9.3-11.3,14.5-16.4c5-5,10.7-9.3,17.6-11.6c7-2.4,13.9-4.7,20.7-7.7c1.8-0.8,3.3-2.1,5.2-2.8c11.1-4.1,23-4.6,34.3-7.6
          c8.8-2.3,18-2.8,26.9-4.8c12.5-2.7,25.1-4.3,37.9-5.2c5.7-0.4,11.4-0.5,17-1.3c3.8-0.5,7.6-0.3,11.4-0.2c0.8-0.5,1.9,0.6,2.5-0.5
          c0.2-0.3,0.3-0.3,0.5,0c1,0.3,2.2,0.1,3,1.1l-0.1,0.1l0.1-0.1c0.3-0.1,0.7-0.2,1-0.2c9.9,0.8,19.8,1.7,29.7,2.4
          c6.5,0.5,12.9,0.7,19.4,1c5.1,0.2,10.3,0.4,15.4,0.6h-0.1c1.2,0.7,2.4,0.9,3.7,0c0.6,0.2,1.3,0.4,1.9,0.5c0.4,0.7,1,0.7,1.7,0.6
          c3.2-0.2,6.3,0.9,9.4,1.2c5.3,0.5,10.6,1.7,15.9,3c6.2,1.5,12.5,2.5,18.7,3.7c10.1,1.9,20,4.6,30.2,6.1c2,0.3,3.8,1.5,5.6,1.5
          c5.4,0.1,10.3,2.2,15.5,3.4c0.7,0.2,3,1.6,2.7-1.3c2,0.3,3.5,1.7,5.3,2.5c7.3,2.9,14.6,6,20.7,11.1c1.9,1.6,3.7,3.4,5.7,4.8
          c4.3,3.2,7.6,7,7.6,12.7c0,0.6-0.4,1.7,0.6,1.8c0.8,0.1,1-0.9,1.3-1.5c2-4,0.4-7.8-0.8-11.6c0-0.4-0.1-0.7-0.1-1.1
          c0.1-5,0.1-5-4.8-4.8C405.6,44,402.2,41.3,398.8,38.6z M427.8,45.6c-1.4-0.4-2.5,0.2-3.7,0.2c-1.2,0.1-1.8,1-1.6,2.1
          c0.9,5.6,0.6,11.2,0.3,16.9c-0.1,1.2,0.2,1.6,1.6,1.2c5.2-1.6,10-4.1,15.2-5.6c4.4-1.3,8.8-2.8,13.1-4.4c3.7-1.4,7.7-1.8,11.3-3.5
          c0.8-0.4,2-0.6,0.7-1.8c-2.4-2.3-4.9-4.5-7.4-6.8c-1.2-1-2.7-0.8-3.9-0.5C445,46,436.2,43.9,427.8,45.6z"/>

        <path d="M314.6,108.7c9.1-3.3,17.8-7.6,26.7-11.2c2.1-0.9,4.1-1.9,6.1-2.8c3.4-1.5,7-2.4,10.3-3.9
          c5-2.3,10.2-3.6,15.3-5.3c4.9-1.7,9.6-3.9,14.5-5.9c6.2-2.5,12.7-4.4,19.3-5.7c3.4-0.7,6.6-1.9,9.8-2.9c13-4,25.9-8.3,38.8-12.8
          c6.6-2.3,13-5,19.8-6.9c4.2-1.1,8.4-2.2,12.6-3c4-0.7,7.8-2.3,11.7-3.5c5.7-1.7,11.4-3.4,17.1-5.2c1-0.3,1.7-0.3,2.2,0.8
          c-0.1,0.3-0.2,0.6-0.3,0.9l-0.1-0.1v0.2c-2.1,1.1-2.1,3.6-3.4,5.2c-1.4,1.8-2.2,4.1-3.7,5.8c-4.5,1-8.9,2.6-13.2,4.3
          c-5.1,2-10.6,2.9-15.7,4.7c-4.5,1.6-9.1,2.8-13.7,4.2c2.5-2,3.3-4.9,4.1-7.7c0.3-1-0.7-2.4-1.4-2.3c-1.2,0.4-2.8-1-3.6,0.8
          c-1.2,2.5-3,4.4-5.3,5.8c-2.6,1.5-5.3,2.9-7.4,5.2c-1.5,1.7-2.9,3.5-4.3,5.3c-4.2,0.7-8,2.5-12.1,3.8c-6.3,2-12.7,3.9-19,5.9
          c-7.8,2.5-15.8,4.1-23.6,6.6c-5.6,1.8-11,4.2-16.4,6.5c-6.8,2.8-14,4.3-20.7,6.9c-5.3,2-10.4,4.6-15.6,6.8
          c-8.9,3.8-17.7,7.7-26.7,11.2c-5.1,2-10.6,3.1-15.9,4.8c-8.4,2.9-16.2,7.4-24.7,10.3c-5.4,1.8-11,3.2-16.3,5.4
          c-6.5,2.7-12.9,5.7-19,9.3c-5.1,3-10.2,5.9-15.9,8c-3.9,1.4-7.7,3.4-11.5,5.3c-2.6,1.3-5.3,2.3-8,3.3c-9.3,3.7-18.4,7.8-27,12.7
          c-3.7,2.1-7.1,4.7-10.5,7.2c-7.1,5-14.2,9.9-21.6,14.5c-4.1,2.5-7.6,5.9-11.7,8.4c-4.2,2.6-7.7,5.9-11.8,8.6c-3.2,2.1-6,4.6-9,6.9
          c-1.3,1-2.6,1.9-4,2.6c-1.9,1-4.5-0.1-5.9-2.5c-1.2-2.1-0.1-3.2,1.5-4.7c4.3-4.1,9.6-6.9,14.1-10.8c2.8-2.4,5.3-5.5,9.3-6.5
          c1.3-0.3,2.2-2,3.4-3c2.9-2.3,5.7-4.8,8.9-6.7c2.2-1.3,4.1-2.7,6-4.3c2,0.4,3-1.4,4.3-2.2c6.6-4.5,12.8-9.8,19.6-14
          c5.9-3.7,11.9-7.3,18.5-9.8c6.1-2.3,11.9-5.3,17.9-8c10.3-4.6,20.7-9.2,30.4-15.2c7-4.3,14.4-7.8,22.1-10.6
          c5-1.8,10.3-3.1,15.2-5.2c2.4-1,4.9-1.8,6.9-3.5c4.4-1.7,8.5-4.2,13.1-5.6c3.7-1.2,7.3-2.8,11.2-3.4c2.9-0.4,5.2-2.3,8.1-2.7
          c0.1,0.3,0.3,0.4,0.6,0.1C314.8,108.9,314.7,108.8,314.6,108.7z"/>

        <path d="M413.2,53.3c1.2,3.8,2.8,7.6,0.8,11.6c-0.3,0.6-0.5,1.6-1.3,1.5c-1.1-0.1-0.6-1.1-0.6-1.8
          c0-5.8-3.2-9.5-7.6-12.7c-2-1.5-3.8-3.2-5.7-4.8c-6.2-5.2-13.4-8.2-20.7-11.1c-1.8-0.7-3.3-2.2-5.3-2.5c-0.6,0.3-1.1-0.1-1.5-0.4
          c0.3-0.5,0.4-0.9-0.1-1.3c-0.1-0.1-0.4,0.1-0.4,0.1c0,0.4,0.1,0.8,0.2,1.2c-0.8-0.2-1.6-0.4-2.3-0.6c0.4-0.7-0.2-0.7-0.5-0.8
          c-2.4-1-4.8-2.1-7.5-2c-0.3,0.1-0.6,0.3-0.8,0.2c-4.4-2.1-9.2-2.8-13.8-3.9c-4.4-1.1-8.8-2.4-13.3-3.3c-8.2-1.5-16.4-3.1-24.6-4.3
          c-7.7-1.1-15.5-2-23.3-2.5c-3.9-0.3-7.8-1.3-11.7-0.5c-0.6-0.2-1.3-0.4-1.9-0.5c-1.2,0-2.4,0-3.7,0h0.1c-0.9-2-2.4-0.3-3.5-0.6
          c-4.9-1-9.9-1.2-14.9-1.8c-7.6-0.9-15.2-1.6-22.8-2.4c-9.1-1-18.2-0.8-27.4-0.1c-0.2-0.3-0.3-0.3-0.5,0c-0.8,0.2-1.7,0.3-2.5,0.5
          c-3.8-0.1-7.6-0.3-11.4,0.2c-5.6,0.7-11.3,0.9-17,1.3c-12.7,0.9-25.4,2.5-37.9,5.2c-8.9,1.9-18.1,2.4-26.9,4.8
          c-11.3,3-23.2,3.4-34.3,7.6c-1.9,0.7-3.4,2-5.2,2.8c-6.8,3-13.7,5.3-20.7,7.7c-6.9,2.4-12.5,6.6-17.6,11.6
          C19.9,56.9,15,62.3,10.6,68.1c-1,1.4-2.1,2.4-3.7,3c-0.7,0.3-1.4,1.1-2.2,0.5c-1-0.7-0.7-1.7-0.4-2.7c1.3-4.2,4.1-7.6,6.5-11.2
          c3.5-5.3,7.5-10.2,11.8-14.9c6.2-6.7,13.7-11.1,22.5-13.6c5.4-1.6,10.7-3.6,15.7-6.1c8.1-4.2,16.9-6.1,25.9-7.7
          c9.8-1.7,19.6-4,29.4-5.6c6.1-1,12.2-2.3,18.3-3.4c0.6-0.1,1.2-0.2,1.7-0.7c4.8-0.7,9.6-1.5,14.5-1.9c9.5-0.8,19-1.8,28.5-2.3
          c7.7-0.3,15.4-1.1,23.1-1.4c4.7-0.2,9.5-0.1,14.2-0.1c6.7,0,13.2,1.1,19.9,1.6c4.3,0.3,8.7,0.5,12.9,1.7c1.7,0.5,3.7,0.1,5.5,0.3
          c5.6,0.5,11.2,1.2,16.8,1.8c3.2,0.3,6.5,0.4,9.7,0.9c8.2,1.3,16.6,1.9,24.9,3.1c5.7,0.8,11.6,1.4,17.3,2.5
          c9.4,1.9,18.6,4.5,27.9,7.1c8.2,2.2,16.1,4.9,24.1,7.7c8.4,2.9,16.1,7,23.3,12.2c3.4,2.7,6.9,5.3,9.6,8.8
          C410.2,49.2,411,51.8,413.2,53.3z"/>

        <path d="M532.6,34.2c3.6-0.8,7.2-1.6,10.9-2.3c2.8-0.6,3.6,0.1,4.2,3c0.4,1.9-1.2,3.7-3.1,4.4 c-4,1.4-7.8,2.9-11.7,4.5c-2.4,1-4.9,1.8-7.4,2.4C527.3,41.9,529.7,37.9,532.6,34.2z"/>
        <polygon points="518.3,41.3 518.3,41.1 518.4,41.2 518.4,41.3 		"/>
        <path d="M314.6,108.7c0.1,0.1,0.3,0.2,0.4,0.3c-0.2,0.3-0.4,0.2-0.6-0.1C314.4,108.9,314.6,108.7,314.6,108.7z"/>
        <path d="M368.5,32.5c-2.8-0.6-5.7-1-8-2.8c2.7,0,5.1,1,7.5,2C368.4,31.8,368.9,31.8,368.5,32.5z"/>
        <path d="M371.2,33.1l-0.2,0.1l-0.2-0.2c-0.1-0.4-0.1-0.8-0.2-1.2c0,0,0.3-0.2,0.4-0.1	C371.6,32.2,371.5,32.7,371.2,33.1z"/>
        <path d="M600.6,132.6c0.5-2.4,1.1-4.8,1.6-7.2c0.2-0.8,0.9-1.1,1.4-1.5c0.4-0.3,0.7-1,1.3-0.5 c0.6,0.4,0.5,1.1,0.2,1.7c-1.3,2.6-2.7,5.2-4,7.8C600.9,132.7,600.7,132.6,600.6,132.6z"/>
        <path d="M613.1,53.1c2-0.2,5.4,3.2,4.8,4.8c-0.1,0.3-0.4,0.6-0.7,0.7c-0.6,0.2-1-0.2-1.3-0.7 C615,56.4,614.1,54.7,613.1,53.1z"/>
        <path d="M611.2,60.9c0.9,1.2,0.9,2.5,0.9,3.9c0,0.4,0.6,1.1-0.3,1.1c-0.7,0-1.4,0-1.5-1.1 C610.3,63.5,610.7,62.2,611.2,60.9z"/>
        <path d="M585.4,175.2c2.8-0.8,4.5,1,6.9,2.5C589.3,177.6,587.3,176.8,585.4,175.2z"/>
        <path d="M582.3,169.4c-1.5-1.4-2.4-3.1-3.8-5.4c3,1,3.1,3.5,4.2,5.1C582.6,169.1,582.4,169.2,582.3,169.4z"/>
        <path d="M611.5,70.6c0.9,0.2,1.1,0.8,1.1,1.6c0,0.5,0,1.2-0.8,1.1c-1,0-1.2-0.9-1.3-1.7 C610.4,71.1,610.9,70.8,611.5,70.6z"/>
        <path d="M583.2,169.6c0.4,0.1,0.7,0.5,0.4,0.7c-0.4,0.3-0.5-0.2-0.7-0.4C583,169.8,583.1,169.7,583.2,169.6z"/>
        <polygon points="584.6,174.7 584.6,174.8 584.5,174.8 		"/>
        <path d="M582.7,169c0.2,0.2,0.3,0.4,0.5,0.6c-0.1,0.1-0.2,0.2-0.3,0.3c-0.2-0.2-0.4-0.4-0.6-0.5 C582.4,169.2,582.6,169.1,582.7,169z"/>

        <path d="M622.9,79.3c2,1.9,4.5,2.7,6.7,3.7c11.9,5.4,12.6,25.8,2.5,32.7c-2.1,1.4-3.4,3.5-5.6,4.7c-1,0.6-1.1,1,0.2,1.8
          c3,2,5.6,4.5,8.1,7.1c1.9,2,4.3,3.5,6.4,5.2c4.9,3.9,2.4,8.8-1.5,11.2c-1,0.6-2.6,1-3.1-0.8s-1.9-2.9-3.1-3.9
          c-3.7-3.2-7.6-6.2-11.4-9.3c-0.6-0.4-1.2-0.9-1.9-1.1c-1.3-0.3-2.9-0.7-3.8,0.4c-0.6,0.7,0.7,1.8,1.2,2.7
          c3.6,6.4,8.3,12.2,11.3,19c1.4,3,3.7,5.4,5,8.4c0.7,1.6,0.8,2.6-0.9,3.8c-5.9,4.1-6.8,2.1-9.3-2.7c-3.3-6.5-6.5-13-10.3-19.3
          c-2-3.3-3.8-6.8-5.6-10.2c-0.5-1-1.1-1.9-2.2-1.4c-1.3,0.5-0.5,1.6-0.4,2.5c1,6,1.7,12.1,3.2,18c1.7,7.1,4.1,14.1,6.1,21.2
          c0.6,2,0.7,4,1.3,6s-0.4,2.8-1.9,3.5c-4.3,1.9-6.4,0.7-7.4-4.1c-0.8-3.7-2.2-7.3-3.2-10.9c-1.9-7.6-4.6-15-5.8-22.8
          c-0.2-1.4-1-2.2-2.3-2.7c-4.9-1.8-5.9-3.3-6-8.4c-0.1-2.6,0.1-5.2,0-7.8c-0.1-2.5-1.1-2.8-3.4-1.9c-4.6,1.8-9.3,3.4-13.9,5.1
          c-7.3,2.7-14.8,4.8-21.7,8.3c-3.2,1.6-5,0.6-5-3.2c0-5,1.2-6.3,7.1-8c8.1-2.4,16.1-5.3,24.3-7.3c2.3-0.6,4.5-1.5,6.7-2.2
          c1.1-0.4,2.3-0.5,2.1-2.2s-0.7-3-2.5-3.3c-3.3-0.7-6.7-1.4-10-2.1c-6.7-1.4-13.4-2.9-19.8-5.5c-2.9-1.2-6-2.1-8.7-3.7
          c-1.5-0.9-1.3-2.4-1.6-3.7c-0.3-1.4,0.5-1.7,1.9-1.8c3.3-0.1,6.3,0.9,9.5,1.4c6,1,11.9,2.6,18,3c2.7,0.2,5.6,0.1,8.3,1.2
          c0.8,0.3,2.1,0.7,2.6-0.3c0.5-0.9-0.6-1.6-1.3-2.2c-7.7-6.4-14.6-13.7-21.7-20.8c-3.2-3.2-6.8-6.1-10.6-8.6
          c-0.7-0.5-2-0.8-1.5-1.8c0.3-0.7,1.2-1.2,2.4-1.3c2.8-0.1,5.2,0.6,7.4,2.1c6.6,4.1,12.2,9.4,17.7,14.7c2.4,2.3,4.9,4.3,7.4,6.4
          c1,0.8,2.2,1.5,2-0.8c0-0.1,0-0.2,0.1-0.3c4.6-5,1.4-10.7,1-15.9c-0.4-5.4-1.1-10.9-1.9-16.3c-0.7-4.6-1.6-9.2-3.2-13.7
          c-0.5-1.5-1.7-3.6,0.3-4.5c1.6-0.7,3.8-0.4,5.2,1.4c3.5,4.2,5.9,8.8,6.3,14.4c0.1,0.8,0.7,2.1,1.3,3s-0.7,2.2-0.1,2.8
          c1.3,1.2,1.2,2.6,0.6,3.6c-1.2,2.3,0.9,3.9,0.7,6.3c-0.3,2.3,0.5,5.1,0.8,7.6c0.2,1.7,1,2.5,2.9,2.3s3.8-0.1,5.6-0.1
          c2.8,0,5.1-0.7,6.9-3.2c2.2-2.9,5.2-5.3,7.6-8.1c1.2-1.4,2.3-1.4,3.8-0.7c1.7,0.8,3.6,2,3.2,3.7c-0.6,2.2,0.2,3.8,1.1,5.5
          c0.5,1,0.3,1.6-0.7,1.8C625.3,77.3,624.4,78.6,622.9,79.3z"/>
      </svg>
    </AirplaneBase>

  )
}

export default AirplaneBody