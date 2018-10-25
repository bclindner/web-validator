import React from 'react'

export const Slideshow = props => (
  <div className='m-3 p-3 row flex-nowrap slideshow'>
    {props.children}
  </div>
)

export const Slide = props => (
  <div className='m-3 p-3 border shadow slide text-center'>
    {props.children}
    <div className='paddiv' />
  </div>
)
