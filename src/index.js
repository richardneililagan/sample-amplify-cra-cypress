import React from 'react'
import ReactDOM from 'react-dom'

import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'

import App from 'components/App'

import * as serviceWorker from './serviceWorker'

import '@aws-amplify/ui/dist/style.css'
import './index.scss'

// :: ---

// :: initialize Amplify across the whole app
Amplify.configure(awsconfig)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
