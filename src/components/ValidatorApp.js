// react
import React, { Component } from 'react'
// css
import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
// components
import Header from './Header'
import Footer from './Footer'
import Dropzone from './Dropzone'
import DropzoneLandingPage from './DropzoneLandingPage'
import { ValidationSlideshow } from './ValidationSlides'
// API
import { validate } from '../utils/api.js'

// main component
class ValidatorApp extends Component {
  constructor (props) {
    super(props)
    this.onDrop = this.onDrop.bind(this)
    this.state = {
      validations: []
    }
  }
  async onDrop (event) {
    // do necessary event stuff
    event.persist()
    event.preventDefault()
    for (let file of event.dataTransfer.files) {
      // validate the file
      const errors = await validate(file)
      console.log(errors)
      if (errors !== false) {
        // determine if this is an errored, warning, or ok validation
        let type = 'ok'
        for (let error of errors) {
          if (error.type === 'error') {
            type = 'error'
            break
          } else if (error.type === 'warning') {
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
          return (state, props)
        })
      }
    }
  }
  render () {
    return (
      <div className='container-fluid'>
        <Header />
        <br />
        <div className='row'>
          <div className='container-fluid'>
            <Dropzone onDragEnter={this.onDragEnter} onDrop={this.onDrop}>
              <DropzoneLandingPage />
            </Dropzone>
          </div>
        </div>
        <br />
        <ValidationSlideshow validations={this.state.validations} />
        <Footer />
      </div>
    )
  }
}

export default ValidatorApp
