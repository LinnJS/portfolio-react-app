import React, { Component } from 'react'
import './Dev.css'
import headshot from '../assets/headshot.jpg'

class Dev extends Component {
  render() {
    return (
      <div className="card">
        <img className="headshot" src={headshot} alt="Picture of the Developer" />
        <div className="dev">
          <div className="aside">
            <h3>About The Developer</h3>
            <p>
              Dolor laboris tempor ullamco nostrud proident aliquip sit cupidatat dolor. Ullamco nulla aliqua nostrud do
              qui laborum adipisicing exercitation id cillum tempor dolore amet. In aliqua ad nisi do est in minim anim
              ex dolore aliqua ipsum. Nulla adipisicing
            </p>
            <div className="contactDev">
              <a href="https://github.com/JSLinn727" target="_blank">
                <i className="fa fa-github fa-2x contactI" aria-hidden="true" />
              </a>
              <a href="mailto:justinslinn727@gmail.com">
                <i className="fa fa-envelope fa-2x contactI" aria-hidden="true" />
              </a>
              <a href="tel:727-709-2806">
                <i className="fa fa-phone-square fa-2x contactI" aria-hidden="true" />
              </a>
              <a href="#" target="_blank">
                <i className="fa fa-address-card fa-2x contactI" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dev
