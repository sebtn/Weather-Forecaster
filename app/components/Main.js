import React, {Component} from 'react'
import PropTypes from 'prop-types'

import SearchBar from './../containers/searchBar' 
import CityList from './../containers/cityList' 

export default class Main extends Component {
  render () {
    return (
      <div className="Main-container">
        <SearchBar />
        <CityList />
      </div>
    )
  }
}