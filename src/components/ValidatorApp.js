// react
import React, { Component } from 'react'
// css
import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
// components
import Header from './Header'
import Footer from './Footer'
import Dropzone from './Dropzone'
import ErrorDisplay from './ErrorDisplay'
import DropzoneLandingPage from './DropzoneLandingPage'
import { ValidationSlideshow } from './ValidationSlides'
// API
import { validate } from '../utils/api.js'

/**
 * Top-level component for the validator.
 * Contains the business code for validating files.
 */
class ValidatorApp extends Component {
  /**
   * Creates a new ValidatorApp, initializing state as necessary.
   */
  constructor (props) {
    super(props)
    this.selectValidation = this.selectValidation.bind(this)
    this.onDrop = this.onDrop.bind(this)
    this.state = {
      selected: -1,
      validations: []
    }
  }
  /**
   * Validates any files dropped on an onDrop event.
   */
  async onDrop (event) {
    // do necessary event stuff
    event.persist()
    event.preventDefault()
    let files = []
    if('dataTransfer' in event){
      files = event.dataTransfer.files
    } else {
      files = event.target.files
    }
    for (let file of files) {
      // validate the file
      const errors = await validate(file)
      if (errors !== false) {
        // determine if this is an errored, warning, or ok validation
        let type = 'ok'
        for (let error of errors) {
          if (error.type.includes('error')) {
            type = 'error'
            break
          } else if (error.type.includes('warning')) {
            type = 'warning'
            continue
          }
        }
        // add it to our state
        this.setState((state, props) => {
          state.validations.push({
            file: file,
            type: type,
            errors: errors,
            uploadTime: new Date().toLocaleTimeString()
          })
          state.selected = state.validations.length - 1
          return (state, props)
        })
      }
    }
  }
  /**
   * Sets the index of the validation being examined.
   */
  async selectValidation(key) {
    return this.setState({selected: key})
  }
  render () {
    return (
      <Dropzone onDragEnter={this.onDragEnter} onDrop={this.onDrop}>
        <div className='container-fluid'>
          <Header />
          <br />
          <div className='row'>
            <div className='container-fluid'>
              {this.state.validations[this.state.selected] ?
                  <ErrorDisplay validation={this.state.validations[this.state.selected]} /> :
                  <DropzoneLandingPage
                    validationFunction={this.onDrop}
                  />
              }
            </div>
          </div>
          <br />
          <ValidationSlideshow
            validations={this.state.validations}
            selected={this.state.selected}
            selectFunction={this.selectValidation}
          />
          <Footer />
        </div>
      </Dropzone>
    )
  }
}

export default ValidatorApp
