import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import './index.css'
import 'normalize.css'
import App from './containers/App'

import { searchKitties, fetchKitties } from './reducers'

// Redux logger middleware
// --> Monitor your Redux states, actions, dipatches
const logger = createLogger()

const rootReduce = combineReducers({ searchKitties, fetchKitties })
const store = createStore(rootReduce, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
