import React, { Component } from 'react'
import Dropzone from './Dropzone'
import DropzoneLandingPage from './DropzoneLandingPage'
import { ErrorDisplay } from './ErrorDisplay'
import { validate } from '../utils/api.js'

class ValidationDropzone extends Component {
  constructor (props) {
    super(props)
    this.onDragEnter = this.onDragEnter.bind(this)
    this.onDrop = this.onDrop.bind(this)
  }
  onDragEnter (event) {
    event.preventDefault()
    console.log('drag enter')
  }
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
    console.log(this.props.validations)
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
