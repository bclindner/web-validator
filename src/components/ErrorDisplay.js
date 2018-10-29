import React from 'react'

export const ErrorDisplay = (props) => {
  let errors = props.validation.errors.map((error) => {
    switch (error.type) {
      case 'error':
        return <ErrorBox line={error.line} message={error.message} />
      case 'warning':
      default:
        return <WarningBox line={error.line} message={error.message} />
    }
  })
  return (
    <div className='m-3 p-3 results'>
      {errors}
    </div>
  )
}

const ErrorBox = (props) => (
  <div className='m-3 p-3 displayErrors'>
    <b>
      <small>Line: {props.line}</small>
      <br />
      Error: {props.message}
    </b>
    <br />
  </div>

)
const WarningBox = (props) => (
  <div className='m-3 p-3 displayWarnings'>
    <b>
      <small>Line: {props.line}</small>
      <br />
      Warning: {props.message}
    </b>
    <br />
  </div>
)

export default ErrorDisplay
