import React, {Component} from 'react'
import {SparklinesLine, Sparklines,  SparklinesReferenceLine  } from 'react-sparklines'
import _ from 'lodash'

let average = (data) => {
  return _.round(_.sum(data) / data.length) 
}

export default (props) => {
  return (
    <div>
      <div className="svg-container">
        <Sparklines data={props.data} height={120} width={180} >
          <SparklinesLine color={props.color}  />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>  
      </div>
      <div className="avg">
        {average(props.data)}
        {props.units}
      </div>
    </div>
  )
}