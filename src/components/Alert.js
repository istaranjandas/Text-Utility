import React from 'react'

function Alert(props) {
    const toBig=(str)=>{
        return str.toLowerCase();
    }
  return (
    props.alert && <div className={`alert alert-${toBig(props.alert.type)}`} role="alert">
        <strong>{props.alert.type}</strong>: {props.alert.message}
    </div>
  )
}

export default Alert
