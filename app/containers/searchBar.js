import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { term: '' }
  }
/*------------------------------------------------------------------*/
onInputChange = (event) => {
  event.preventDefault()
  let term = this.refs.SearchText.value
  this.setState({term: term})
}

/*------------------------------------------------------------------*/

  render () {
    return (
      <div>
        <form action="" className="input-group">
          <input type="text" 
            placeholder="Type city name to get forecast"
            className="form-control"
            onChange={this.onInputChange}
            ref="SearchText"
            />
            <span className="input-group-btn">            
              <button className="btn btn-primary" 
                type="submit">
                Search
              </button>
            </span>
        </form>
      </div>
    )
  }
}