import React, { useState, useEffect } from 'react'
import { styled } from '@theme'

const ImageWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  

  img: {
    objectFit: 'cover',
    minHeight: '100%',
    height: 'auto',
    minWidth: '100%',
    width: 'auto'
  }
})

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
