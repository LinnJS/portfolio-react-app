import React, { Component } from 'react'
import './Layout.css'

export default class Layout extends Component {
  render() {
    return <div className="container">{this.props.children}</div>
  }
}
