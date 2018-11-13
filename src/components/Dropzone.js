import React from 'react'
/**
 * Helper function to prevent default event behavior.
 */
function pd (event) {
  event.preventDefault()
}

/**
 * Dropzone element which triggers props.onDrop when a file is dropped inside of it.
 */
const Dropzone = (props) => (
  <div
    onDrag={pd}
    onDragEnter={pd}
    onDragOver={pd}
    onDrop={props.onDrop}
  >
    {props.children}
  </div>
)
export default Dropzone
