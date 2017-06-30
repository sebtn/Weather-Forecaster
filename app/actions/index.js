import {apiKey} from './../../api'
import axios from 'axios'

/*Action creator type constants*/
export const FETCH_WEATHER = "FETCH_WEATHER"

/*Action creator for fetching endpoint
using weather api and middleware 
redux promise for Ajax request*/
export let fetchtWeather = (city) => {
  const baseUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}`
  const url = `${baseUrl},us&appid=${apiKey}`
  const request = axios.get(url)
  console.log(request)
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
