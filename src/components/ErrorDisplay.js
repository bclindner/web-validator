import React from 'react'

/**
 * Div containing all the errors passed to the "validation" prop.
 */
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

/**
 * Box to display an error in the main window.
 * Mostly for use by ErrorDisplay.
 */
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
/**
 * Box to display a warning in the main window.
 * Mostly for use by ErrorDisplay.
 */
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
