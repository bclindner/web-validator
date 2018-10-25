// react
import React, { Component } from 'react'
// css
import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
// components
import Header from './Header'
import Footer from './Footer'
import ValidationDropzone from './ValidationDropzone'
import { Slideshow } from './Slideshow'
import { DefaultSlide, ErrorSlide, NewSlide, WarningSlide } from './ValidationSlides'

// main component
class ValidatorApp extends Component {
  render () {
    return (
      <div className='container-fluid'>
        <Header />
        <br />
        <div className='row'>
          <div className='container-fluid'>
            <ValidationDropzone />
          </div>
        </div>
        <br />
        <Slideshow>
          <NewSlide />
          <DefaultSlide />
          <ErrorSlide />
          <WarningSlide />
          <div className='paddiv' />
        </Slideshow>
        <Footer />
      </div>
    )
  }
}

export default ValidatorApp
