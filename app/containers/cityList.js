import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class CityList extends Component {

/*-------------------------------------------------------------*/    
renderWeather = (cityData) =>  {
  const cityName = cityData.city.name
  return (
    <tr key={cityName}>
      <td>{cityName}</td>
    </tr>
  )
}

/*-------------------------------------------------------------*/
  render () {
    let cityWeather = this.props.weather
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temp</th>
            <th>Pressure</th>
            <th>Humiduty</th>
          </tr>
        </thead>
        <tbody>
          {cityWeather.map( this.renderWeather )}
        </tbody>
      </table>
    )
  }
}

/*-------------------------------------------------------------*/
function mapStateToProps (state)  {
  /* weather key is indicated in the root reducer,
  since CityList class touches app's main state, map 
  local and global state is always a good idea,
  now this.props.weather is available inside the component*/
  return { weather: state.weather }
}

/*-------------------------------------------------------------*/
export default connect(mapStateToProps)(CityList)