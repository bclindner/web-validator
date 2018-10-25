import React from 'react'

export const ErrorBox = (props) => (
  <div className='m-3 p-3 displayErrors'>
    <b>
      <small>Line: {props.line}</small>
      <br />
      Error: {props.message}
    </b>
    <br />
  </div>

)
export const WarningBox = (props) => (
  <div className='m-3 p-3 displayWarnings'>
    <b>
      <small>Line: {props.line}</small>
      <br />
      Warning: {props.message}
    </b>
    <br />
  </div>
)
