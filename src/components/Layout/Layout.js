import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './Layout.css'

class Layout extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="landing">
          <nav>
            <a href="#">
              <button>Developer</button>
            </a>
            <a href="#">
              <button>Skills</button>
            </a>
            <a href="#">
              <button>Projects</button>
            </a>
          </nav>
          <div className="title">
            <h1>Justin Linn</h1>
            <h2>Full Stack Software Developer</h2>
            <div className="contact">
              <a href="https://github.com/JSLinn727" target="_blank">
                <i className="fa fa-github fa-2x landingContact" aria-hidden="true" />
              </a>
              <a href="mailto:justinslinn727@gmail.com">
                <i className="fa fa-envelope fa-2x landingContact" aria-hidden="true" />
              </a>
              <a href="tel:727-709-2806">
                <i className="fa fa-phone-square fa-2x landingContact" aria-hidden="true" />
              </a>
              <a href="#" target="_blank">
                <i className="fa fa-address-card fa-2x landingContact" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="container">{this.props.children}</div>
      </div>
    )
  }
}

export default Layout
