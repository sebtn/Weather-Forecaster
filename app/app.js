import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Route, Router, IndexRoute, hashHistory, Link} from 'react-router'

import  '././styles/app.scss' 
import Main from '././components/Main' 

'use strict'

ReactDOM.render(<Main /> , document.getElementById('root'))