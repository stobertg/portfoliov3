import React from 'react'
import { styled } from '@theme'

const GridWrap = styled('div', {
  display: 'grid',
  gridTemplateRows: '1fr',
  position: 'relative',
  width: '100%',

  variants: {
    columns: {
      2: {  gridTemplateColumns: 'repeat(2, 1fr)'  },
      3: {  gridTemplateColumns: 'repeat(3, 1fr)', '@tablet': { gridTemplateColumns: 'repeat(2, 1fr)' }  },
      4: {  gridTemplateColumns: 'repeat(4, 1fr)'  },
      5: {  gridTemplateColumns: 'repeat(5, 1fr)'  },
      6: {  gridTemplateColumns: 'repeat(6, 1fr)'  },
      7: {  gridTemplateColumns: 'repeat(7, 1fr)'  },
      8: {  gridTemplateColumns: 'repeat(8, 1fr)'  },
      9: {  gridTemplateColumns: 'repeat(9, 1fr)'  },
      10: { gridTemplateColumns: 'repeat(10, 1fr)' },
      11: { gridTemplateColumns: 'repeat(11, 1fr)' },
      12: { gridTemplateColumns: 'repeat(12, 1fr)' }
    }
  }
})

interface GridProps {
  columns?: 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  children: React.ReactNode
}

export const Grid = ({ columns, children }:GridProps) => {
  return(

    <GridWrap {...{ columns }}>{ children }</GridWrap>

  )
}
