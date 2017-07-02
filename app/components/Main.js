import React, {Component} from 'react'
import PropTypes from 'prop-types'

import SearchBar from './../containers/searchBar' 
import CityList from './../containers/cityList' 

export default class Main extends Component {
  render () {
    return (
      <div className="Main-container">

        <div className="row">
          <div className="col-md-1 col-lg-2"></div>
          <div className="col-md-10 col-lg-8">
            <h1>5 day forecast USA ciites</h1>
            <SearchBar />
          </div>
          <div className="col-md-1 col-lg-2"></div>
        </div>
        <div className="cityList-container">
        <div className="row">
          <div className="col-sm-0"></div>
          <div className="col-sm-12 ">
            <CityList />
          </div>
          <div className="col-sm-0"></div>
        </div>
        </div>
      </div>
    )
  }
}