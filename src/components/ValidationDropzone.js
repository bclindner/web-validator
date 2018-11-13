import React, { Component } from 'react'
import Dropzone from './Dropzone'
import DropzoneLandingPage from './DropzoneLandingPage'
import { ErrorDisplay } from './ErrorDisplay'
import { validate } from '../utils/api.js'

/**
 * A wrapper around Dropzone that validates the files dropped into it.
 */
class ValidationDropzone extends Component {
  async onDrop (event) {
    event.persist()
    event.preventDefault()
    for (let file of event.dataTransfer.files) {
      const errors = validate(file)
      this.props.validations.push({
        file: file,
        errors: await errors,
        uploadTime: new Date().toLocaleTimeString()
      })
    }
  }
  render () {
    let dropzoneComponent = <DropzoneLandingPage />
    if (this.props.validations.length !== 0) {
      dropzoneComponent = <ErrorDisplay files={this.state.files} />
    }

    return (
      <Dropzone
        onDragEnter={this.onDragEnter}
        onDrop={this.onDrop}
      >
        {dropzoneComponent}
      </Dropzone>
    )
  }
}

export default ValidationDropzone
