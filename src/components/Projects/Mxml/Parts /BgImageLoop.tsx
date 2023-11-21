import React, { useState, useEffect } from 'react'
import { styled } from '@theme'

// For the master container of the background images within the hero animation
// This loops through a bunch of different images as the logos on top do as well

const ImageWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  
  // For the sizing of the images within the background container
  // This sets the images to take up the full width and height of the parent container

  img: {
    objectFit: 'cover',
    minHeight: '100%',
    height: 'auto',
    minWidth: '100%',
    width: 'auto'
  }
})

// -------------- Typescript declarations -------------- //

interface ImageProps {
  images: any
}

// ---------- This is the end of declarations ---------- //

export const BgImageLoop = ({ images }:ImageProps) => {
  const [ currentImageIndex, setCurrentImageIndex ] = useState( 0 )

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(( prevIndex ) => ( prevIndex + 1 ) % images.length )
    }, 4000 / images.length)

    return () => clearInterval( interval )
  }, [ images.length ]);

  return(

    <ImageWrap>
      <img src={ images[ currentImageIndex ] } alt="MXML Creative" />
    </ImageWrap>

  )
}
