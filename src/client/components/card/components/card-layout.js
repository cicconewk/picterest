import React from 'react'

export default function CardLayout (props) {
  return (
    <div className="card-columns">
      {props.children}
    </div>
  )
}
