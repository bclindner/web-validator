import React from 'react'

export const ErrorDisplay = (props) => {
  let errors = props.validation.errors.map((error, key) => {
    switch (error.type) {
      case 'error':
      case 'parse-error':
      case 'value-error':
        return <ErrorBox line={error.line} message={error.message} key={key} />
      case 'warning':
      default:
        return <WarningBox line={error.line} message={error.message} key={key} />
    }
  })
  if (errors.length) {
    return (
      <div className='m-3 p-3 results'>
        {errors}
      </div>
    )
  } else {
    return (
      <div className='m-3 p-3 results d-flex'>
        <h3 className='text-center'>No errors!</h3>
      </div>
    )
  }
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
