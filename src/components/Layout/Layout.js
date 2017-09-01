import React, { Component } from 'react'
import './Layout.css'

class Layout extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div className="container">{this.props.children}</div>
  }
}

export default Layout
