import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchtWeather} from './../actions'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { term: ' ' }
  }
/*------------------------------------------------------------------*/
onInputChange = (event) => {
  event.preventDefault()
  let term = this.refs.SearchText.value
  this.setState({term: term})
}

/*------------------------------------------------------------------*/
onFormSubmit = (event) => {
  event.preventDefault()
  let term = this.refs.SearchText.value
  if (term.length === 0) {
    alert('please type something')
  } else {
    this.props.fetchtWeather(term)
  }
  return this.refs.SearchText.value = ''
} 

/*------------------------------------------------------------------*/
  render () {
    return (
      <div>
        <form className="input-group"
          onSubmit={this.onFormSubmit} >
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

/*------------------------------------------------------------------*/
function mapDispatchToProps (dispatch)  {
  return bindActionCreators({ fetchtWeather }, dispatch)
}

/*------------------------------------------------------------------*/
/*null replaces the state, which is not being used */
export default connect(null, mapDispatchToProps)(SearchBar)

