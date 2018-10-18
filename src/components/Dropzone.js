import React from 'react'

const Dropzone = props => (
  <div class='container-fluid'>
    <div class='m-3 p-3 results' id='target' ondrop='drop_handler(event);' ondragover='dragover_handler(event);'>
      {props.children}
    </div>
  </div>
)
export default Dropzone
