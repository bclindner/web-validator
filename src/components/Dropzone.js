import React from 'react'

const Dropzone = (props) => (
  <div
    onDragEnter={props.onDragEnter}
    onDrop={props.onDrop}
    onDragOver={
      (e) => {
        return e.preventDefault()
      }
    }
  >
    {props.children}
  </div>
)
export default Dropzone
