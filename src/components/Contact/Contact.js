import React, { Component } from 'react'
import './Contact.css'

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <a href="https://github.com/JSLinn727" target="_blank">
          <i className="fa fa-github fa-2x landingContact devContact" aria-hidden="true" />
        </a>
        <a href="mailto:justinslinn727@gmail.com">
          <i className="fa fa-envelope fa-2x landingContact devContact" aria-hidden="true" />
        </a>
        <a href="tel:727-709-2806">
          <i className="fa fa-phone-square fa-2x landingContact devContact" aria-hidden="true" />
        </a>
        <a href="#" target="_blank">
          <i className="fa fa-address-card fa-2x landingContact devContact" aria-hidden="true" />
        </a>
      </div>
    )
  }
}

export default Contact
