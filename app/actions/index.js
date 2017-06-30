import {apiKey} from 'api'
import axios from 'axios'
const baseUrl = `api.openweathermap.org/data/2.5/forecast?appid=${apiKey}`

/*Action creator type constants*/
export const FETCH_WEATHER = "FETCH_WEATHER"

/*Action creator for fetching endpoint
using weather api and middleware 
redux promise for Ajax request*/
export let fetchtWeather = (city) => {
  const url = `${bsaeUrl}&q=${city},us`
  const request = axios.get(url)
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
