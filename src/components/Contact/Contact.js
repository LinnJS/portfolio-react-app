import React, { Component } from 'react'
import './Contact.css'

class Contact extends Component {
  render() {
    return (
      <div className="contact" style={this.props.style}>
        <span>
          <a href="https://github.com/LinnJS" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github fa-2x devContact" aria-hidden="true" style={this.props.style} />
          </a>
          <p>LinnJS</p>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/LinnJS/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin-square fa-2x devContact" aria-hidden="true" style={this.props.style} />
          </a>
          <p>LinkedIn</p>
        </span>
        <span>
          <a href="mailto:LinnJSConsulting@gmail.com">
            <i className="fa fa-envelope fa-2x devContact" aria-hidden="true" style={this.props.style} />
          </a>
          <p>LinnJSConsulting@gmail.com</p>
        </span>
        <span>
          <a href="tel:727-709-2806">
            <i className="fa fa-phone-square fa-2x devContact" aria-hidden="true" style={this.props.style} />
          </a>
          <p>(727) 709-2806</p>
        </span>
        <span>
          <a
            href="https://resume.creddle.io/resume/6dynca2j7qz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-address-card fa-2x devContact" aria-hidden="true" style={this.props.style} />
          </a>
          <p>Resume</p>
        </span>
      </div>
    )
  }
}

export default Contact
