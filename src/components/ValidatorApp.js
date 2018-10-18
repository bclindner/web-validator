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
import { Slideshow, Slide } from './Slideshow'

// main component
class ValidatorApp extends Component {
  render () {
    return (
      <div class='container-fluid maindiv'>
        <Header />
        <br />
        <div class='row'>
          <Dropzone>
            <DropzoneLandingPage />
          </Dropzone>
        </div>
        <br />
        <Slideshow>
          <Slide />
          <Slide />
          <Slide />
          <Slide />
          <Slide />
        </Slideshow>
        <Footer />
      </div>
    )
  }
}

export default ValidatorApp
