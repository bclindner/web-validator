import React, { Component } from 'react'
import newbutton from '../img/newbutton.png'
import { Slideshow } from './Slideshow'

export class ValidationSlideshow extends Component {
  shouldComponentUpdate(newProps, newState) {
    console.log("update checking")
    return newProps.validations.length === this.props.validations.length
  }
  render () {
    console.log(this.props.validations)
    let slides = this.props.validations.map((validation, key) => {
      let props = {
          key: key,
          count: validation.errors.length,
          filename: validation.file.name,
          uploadTime: validation.uploadTime
      }
      switch(validation.type) {
        case 'error':
          return <ErrorSlide {...props} />
        case 'warning':
          return <WarningSlide {...props} />
        case 'ok':
        default:
          return <DefaultSlide {...props} />
      }
    })
    return (
      <Slideshow>
        {slides}
        <NewSlide />
      </Slideshow>
    )
  }
}

export const WarningSlide = (props) => (
  <div className='m-3 p-3 shadow slide warningSlide text-center'>
    <div className='fileinfo'>
      <h3 className='error'>{props.count}<br />Warnings</h3>
      <h6 className='filename'>{props.filename}<br />Uploaded: {props.uploadTime}</h6>
    </div>
  </div>
)

export const ErrorSlide = (props) => (
  <div className='m-3 p-3 shadow slide errorSlide text-center'>
    <div className='fileinfo'>
      <h3 className='error'>{props.count}<br />Errors</h3>
      <h6 className='filename'>{props.filename}<br />Uploaded: {props.uploadTime}</h6>
    </div>
  </div>
)

export const NewSlide = (props) => (
  <div className='m-3 p-3 shadow slide newslide text-center'>
    <img src={newbutton} className='center align-middle' alt='New Slide' />
  </div>
)

export const DefaultSlide = (props) => (
  <div className='m-3 p-3 shadow slide defaultSlide text-center' onClick={props.select}>
    <div className='fileinfo'>
      <h3 className='error'> 0<br />Errors</h3>
      <h6 className='filename'>{props.filename} <br />Uploaded: {props.uploadTime}</h6>
    </div>
  </div>
)
