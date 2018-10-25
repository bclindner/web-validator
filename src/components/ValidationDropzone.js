import React, { Component } from 'react'
import Dropzone from './Dropzone'
import DropzoneLandingPage from './DropzoneLandingPage'
import FileDisplay from './FileDisplay'
import { validate } from '../utils/api.js'

class ValidationDropzone extends Component {
  constructor (props) {
    super(props)
    this.state = {
      files: []
    }
    this.onDragEnter = this.onDragEnter.bind(this)
    this.onDrop = this.onDrop.bind(this)
  }
  onDragEnter (event) {
    event.preventDefault()
    console.log('drag enter')
  }
  onDrop (event) {
    event.persist()
    event.preventDefault()
    this.setState((state, props) => {
      for (let file of event.dataTransfer.files) {
        validate(file)
        state.files.push(file)
      }
      return state
    })
  }
  render () {
    let dropzoneComponent = <DropzoneLandingPage />
    if (this.state.files.length !== 0) {
      dropzoneComponent = <FileDisplay files={this.state.files} />
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
