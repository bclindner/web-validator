import React from 'react'
import newbutton from '../img/newbutton.png'
import { Slideshow } from './Slideshow'

export const ValidationSlideshow = (props) => {
  let slides = []
  for(let validation of props.validations) {
    // determine if the slide is a warning, error, or default slide
    slides.push(
      <ErrorSlide
        count={validation.errors.length}
        filename={validation.file.name}
        uploadTime={validation.uploadTime}
      />
    )
  }
  return (
    <Slideshow>
      {slides}
      <NewSlide />
    </Slideshow>
  )
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
  <div className='m-3 p-3 shadow slide defaultSlide text-center'>
    <div className='fileinfo'>
      <h3 className='error'> 0<br />Errors</h3>
      <h6 className='filename'>{props.filename} <br />Uploaded: {props.uploadTime}</h6>
    </div>
  </div>
)
