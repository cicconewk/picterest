import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    const {image, title } = this.props

    return (
      <div className="card card-pin">
        <img className="card-img" src={image} alt={title} />
        <div className="overlay">
          <h2 className="card-title title">{title}</h2>
          <div className="more">
            <a href="#">
              <i className="fas fa-heart mr-2"></i>
            </a>
            <a href="post.html">
              More 
              <i className="fas fa-arrow-circle-right ml-2" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
