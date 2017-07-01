import {FETCH_WEATHER} from './../actions'

export let weatherReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return [
        action.payload.data,
        ...state
      ]
    default:
      return state  
  }

}

