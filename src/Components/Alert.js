import React from 'react'

function Alert(props) {
  // const capitalize = (word) =>{
  //   const str = word.toLowerCase();
  //   return str.charAt(0).toUpperCase() + str.slice(1);
  // }
  return (
    props.alert && <div>
      <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
         {props.alert.msg}
       
      </div>
    </div>
  )
}

export default Alert
