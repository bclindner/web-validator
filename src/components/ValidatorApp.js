// react
import React, { Component } from 'react'
// css
import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
// components
import Header from './Header'
import Footer from './Footer'
import ValidationDropzone from './ValidationDropzone'
import { ValidationSlideshow } from './ValidationSlides'

// main component
class ValidatorApp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      validations: []
    }
  }
  render () {
    return (
      <div className='container-fluid'>
        <Header />
        <br />
        <div className='row'>
          <div className='container-fluid'>
            <ValidationDropzone validations={this.state.validations}/>
          </div>
        </div>
        <br />
        <ValidationSlideshow validations={this.state.validations}/>
        <Footer />
      </div>
    )
  }
}

export default ValidatorApp
