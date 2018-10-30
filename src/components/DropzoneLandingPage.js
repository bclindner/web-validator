import React, { Component } from 'react'

class DropzoneLandingPage extends Component {
  constructor (props) {
    super(props)
    this.click = this.click.bind(this)
  }
  click (e) {
    this.refs.fileUploadInput.click()
  }
  render () {
    return (
      <div
        className='m-3 p-3 results d-flex'
        onClick={this.click}
      >
        <input type='file' onChange={this.props.validationFunction} ref='fileUploadInput' className='d-none' />
        <h3 className='text-center'>
          Drag your files here, or click to upload...
        </h3>
      </div>
    )
  }
}
export default DropzoneLandingPage
