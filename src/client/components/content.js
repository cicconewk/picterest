import React from 'react'

export default function Content (props) {
  return(
    <div className="container-fluid">
      <div className="row">
        {props.children}
      </div>
    </div>
  )
}