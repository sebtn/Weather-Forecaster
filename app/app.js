import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Route, Router, IndexRoute, hashHistory, Link} from 'react-router'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import ReduxPromise from 'redux-promise'

import reducers from './reducers'
import  '././styles/app.scss' 
import Main from '././components/Main' 

const createStoreMiddleware = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
  <Provider store={createStoreMiddleware(reducers)}>
    <Main /> 
  </Provider>
  ,document.getElementById('root'))


