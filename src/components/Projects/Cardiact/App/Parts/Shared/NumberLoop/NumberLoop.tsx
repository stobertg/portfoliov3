import React, { useState, useEffect, useRef } from 'react'
import { styled, keyframes } from '@theme'
import { Heading } from '@components'

// For the animations of the numbers animating in and out of the container, as it loops
// This animations will move the next number up and into view

const enterAnimation = keyframes({
  from: { transform: 'translateY(100%)', opacity: 0 },
  to: { transform: 'translateY(0)', opacity: 1 }
})

// For the exit animation of a numbers 
// This will animate the number up, out of the veiwport and opacity to 0

const exitAnimation = keyframes({
  from: { transform: 'translateY(0)', opacity: 1 },
  to: { transform: 'translateY(-100%)', opacity: 0 }
})

// For the master container of the number loop component
// This animates numbers in a loop animation coming in and going out

const LoopNumbers = styled('div', {
  display: 'flex',
  position: 'relative',
  width: '100%',
  height: 24,
  overflow: 'hidden',

  // For the positioning of the numbers within the container in order for the looping animation to work
  // This will position the text in the center of the container

  '> *': { 
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute', 
    top: 0, 
    left: 0, 
    width: '100%',
    height: '100%' 
  }
})

// -------------- Typescript declarations -------------- //

interface LoopProps {
  delay?: number
  numbers: { number: number }[]
}

// ---------- This is the end of declarations ---------- //

export const NumberLoop = ({ 
    numbers, // Required - For the numbers in the looping animation
    delay // Optional - For custom delay in the animation
  }:LoopProps) => {

  const [ currentNumberIndex, setCurrentNumberIndex ] = useState( 0 )
  const intervalIdRef = useRef<NodeJS.Timer | null>( null )

  useEffect(() => {
    if (numbers.length === 0) return;
    const startDelay = delay; 
    const timeoutId = setTimeout(() => {
      const intervalId = setInterval(() => {
        setCurrentNumberIndex(( prevIndex ) => ( prevIndex + 1 ) % numbers.length )
      }, 2000);

      intervalIdRef.current = intervalId;
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      if ( intervalIdRef.current !== null ) clearInterval( intervalIdRef.current )
    };
  }, [ numbers.length, delay ]);

  return(

    <LoopNumbers>
      { numbers.map(( number, i ) => (
        <Heading 
          key={`number-${ i }`} 
          bold 
          size="l2"
          title={ number.number } 
          style={{
            animation: `${i === currentNumberIndex ? enterAnimation : exitAnimation} 1s`,
            opacity: i === currentNumberIndex ? 1 : 0,
          }}
        />
      ))}
    </LoopNumbers>

  )
}