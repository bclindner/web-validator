// react
import React, { Component } from 'react'
// css
import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
// components
import Header from './Header'
import Footer from './Footer'
import ValidationDropzone from './ValidationDropzone'
import { Slideshow, Slide } from './Slideshow'

// main component
class ValidatorApp extends Component {
  render () {
    return (
      <div className='container-fluid maindiv'>
        <Header />
        <br />
        <div className='row'>
          <div className='container-fluid'>
            <ValidationDropzone />
          </div>
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
