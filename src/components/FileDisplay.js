import React from 'react'
import { ErrorBox, WarningBox } from './ErrorDisplay'

const DropzoneLandingPage = (props) => (
  <div
    className='m-3 p-3 results'
  >
    {props.files.map((file, i) => (
      <ErrorBox key={i} line={i} message={file.name} />
    ))}
  </div>
)
export default DropzoneLandingPage

