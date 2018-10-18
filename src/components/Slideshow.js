import React from 'react';

export const Slideshow = props => (
  <div class='m-3 p-3 row flex-row flex-nowrap slideshow'>
    {props.children}
  </div>
)

export const Slide = props => (
  <div class='m-3 p-3 border shadow col-2 slide'>
    {props.children}
  </div>
)
