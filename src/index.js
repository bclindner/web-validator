import React from 'react'
import ReactDOM from 'react-dom'
import ValidatorApp from './components/ValidatorApp'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<ValidatorApp />, document.getElementById('root'))

serviceWorker.unregister()
