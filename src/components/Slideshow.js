import React from 'react'

/**
 * Simple div for the slideshow that applies the necessary Bootstrap and CSS classes.
 */
export const Slideshow = props => (
  <div className='m-3 p-3 row flex-nowrap slideshow'>
    {props.children}
  </div>
)
