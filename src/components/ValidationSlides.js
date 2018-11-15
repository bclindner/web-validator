import React, { Component } from 'react'
import newbutton from '../img/newbutton.png'
import { Slideshow } from './Slideshow'

/**
 * Slideshow for the files validated.
 * Contains a list of slides each corresponding to a file.
 * Each slide should say the amount of errors or warnings available to it,
 * as well as the filename and time uploaded.
 */
export class ValidationSlideshow extends Component {
  shouldComponentUpdate (newProps, newState) {
    return newProps.validations.length === this.props.validations.length ||
      newProps.selected !== this.props.selected
  }
  render () {
    let slides = this.props.validations.map((validation, key) => {
      let props = {
        key: key,
        data_key: key,
        count: validation.errors.length,
        filename: validation.file.name,
        uploadTime: validation.uploadTime,
        selectFunction: this.props.selectFunction
      }
      if (key === this.props.selected) {
        props.selected = true
      }
      switch (validation.type) {
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
        <NewSlide
          selectFunction={this.props.selectFunction}
          data_key={-1}
          selected={this.props.selected === -1}
        />
        <div id='paddiv' />
        <div style={{
          display: 'relative',
          top: 0,
          right: 0
        }}>
        </div>
      </Slideshow>
    )
  }
}
/**
 * Slide for a file that has warnings.
 * Displays in yellow.
 */
export const WarningSlide = (props) => (
  <div
    className={'m-3 p-3 shadow slide warningSlide text-center' + (props.selected ? ' selected' : '')}
    onClick={() => { props.selectFunction(props.data_key) }}
  >
    <div className='fileinfo'>
      <h3 className='error'>{props.count}<br />Warnings</h3>
      <h6 className='filename'>{props.filename}<br />Uploaded: {props.uploadTime}</h6>
    </div>
  </div>
)

/**
 * Slide for a file that has errors.
 * Displays in red.
 */
export const ErrorSlide = (props) => (
  <div
    className={'m-3 p-3 shadow slide errorSlide text-center' + (props.selected ? ' selected' : '')}
    onClick={() => { props.selectFunction(props.data_key) }}
  >
    <div className='fileinfo'>
      <h3 className='error'>{props.count}<br />Errors</h3>
      <h6 className='filename'>{props.filename}<br />Uploaded: {props.uploadTime}</h6>
    </div>
  </div>
)

/**
 * Slide for the "new file" box displayed at the end of the slideshow.
 */
export const NewSlide = (props) => (
  <div
    className={'m-3 p-3 shadow slide newslide text-center' + (props.selected ? ' selected' : '')}
    onClick={() => { props.selectFunction(props.data_key) }}
  >
    <img src={newbutton} className='center align-middle' alt='New Slide' />
  </div>
)

/**
 * Slide for a file without errors.
 * Simple grey box with "0 Errors" in it.
 */
export const DefaultSlide = (props) => (
  <div
    className={'m-3 p-3 shadow slide defaultSlide text-center' + (props.selected ? ' selected' : '')}
    onClick={() => { props.selectFunction(props.data_key) }}
  >
    <div className='fileinfo'>
      <h3 className='error'> 0<br />Errors</h3>
      <h6 className='filename'>{props.filename} <br />Uploaded: {props.uploadTime}</h6>
    </div>
  </div>
)
