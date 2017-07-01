import React, {Component} from 'react'
import {SparklinesLine, Sparklines } from 'react-sparklines'

export default (props) => {
  return (
    <div className="svg-container">
      <Sparklines data={props.data} height={120} width={180} >
        <SparklinesLine color={props.color} type={avg}  />
      </Sparklines>  
    </div>
  )
}