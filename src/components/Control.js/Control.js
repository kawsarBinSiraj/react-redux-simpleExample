import React from 'react'
import {connect} from 'react-redux'
import '../../../node_modules/bootstrap/dist/css//bootstrap.min.css'

 const Control = (props) => {
  return (
    <React.Fragment>
        <div className="btnList mt-3">
            <button className="btn btn-success btn-lg mr-3" onClick={()=> {props.add()}}> + ADD</button>
            <button className="btn btn-warning btn-lg" onClick={()=> {props.sub()}}> - SUB</button>
        </div>
    </React.Fragment>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    add : () => {
        dispatch({type:'ADD'})
    },
    sub : () => {
        dispatch({type:'SUB'})
    }
  }
}

export default connect(null, mapDispatchToProps)(Control);
