import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './Layout.css'
import Contact from '../Contact/Contact'

class Layout extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="landing">
          <div className="title">
            <h1>Justin Linn</h1>
            <h2>Full Stack Software Developer</h2>
            <Contact />
          </div>
        </div>
        <div className="container">{this.props.children}</div>
      </div>
    )
  }
}

export default Layout
