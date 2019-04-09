import React from 'react'
import {connect} from 'react-redux'

 const Count = (props) => {
  return (
    <React.Fragment>
        <h1>Hello : <span style={{color:'#61dafb'}}>{props.count}</span> World</h1>
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return {
    count : state.count
  }
}

export default connect(mapStateToProps)(Count);