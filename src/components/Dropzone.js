import React from 'react'
function pd (event) {
  event.preventDefault()
}

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
