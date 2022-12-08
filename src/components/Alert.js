import React from 'react'

function Alert(props) {
  return (
    <div className="opacity-75" style={{height: '40px'}}>
    {
      props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{props.alert.msg[0]}</strong>{props.alert.msg[1]}
      </div>
    }
    </div>
  )
}

export default Alert