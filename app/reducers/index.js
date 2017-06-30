import {createStore, compose, combineReducers} from 'redux'
import {weatherReducer} from './reducer_fetchWeather'

const rootReducer = combineReducers({
  // state: (state = {}) => state
  weather: weatherReducer
}) 

export default rootReducer
