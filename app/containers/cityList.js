import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Chart from './../components/chart'
import GoogleMap from './../components/map'

class CityList extends Component {
/*-------------------------------------------------------------*/    
renderWeather = (cityData) =>  {
  const lon = cityData.city.coord.lon
  const lat = cityData.city.coord.lat
  const cityName = cityData.city.name
  const temp = cityData.list.map( (weather) => weather.main.temp )
  const pressure = cityData.list.map( (weather) => weather.main.pressure )
  const humidity = cityData.list.map( (weather) => weather.main.humidity )
  /*note how props pass around from chartlist 
  to the chart component like: data, props.data, props.color 
  and props.units bidirectional flow */
  return (
    <tr key={cityName}>
      {/* <td>{cityName}</td> */}
      <td> <GoogleMap lon={lon} lat={lat}/> </td>
      <td> <Chart data={temp} color='orange' units=" K (Avg.)" /> </td>
      <td> <Chart data={pressure} color='blue' units=" HPa (Avg.)" /> </td>
      <td> <Chart data={humidity} color='green' units=" % (Avg.)" /> </td>
    </tr>
  )
}

/*-------------------------------------------------------------*/
  render () {
    let cityWeather = this.props.weather
    return (
      <div className="table-container">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (HPa)</th>
            <th>Humiduty (%)</th>
          </tr>
        </thead>
        <tbody>
          {cityWeather.map( this.renderWeather )}
        </tbody>
      </table>
      </div>
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