import React, { Component } from 'react'
import './Dev.css'
import headshot from '../../assets/headshot.jpg'
import Contact from '../Contact/Contact'

class Dev extends Component {
  render() {
    return (
      <div className="card" id="devCard">
        <img className="headshot" id="headshot" src={headshot} alt="Picture of the Developer" />
        <div className="aside">
          <h3>About The Developer</h3>
          <p>
            Dolor laboris tempor ullamco nostrud proident aliquip sit cupidatat dolor. Ullamco nulla aliqua nostrud do
            qui laborum adipisicing exercitation id cillum tempor dolore amet. In aliqua ad nisi do est in minim anim ex
            dolore aliqua ipsum. Nulla adipisicing
          </p>
          <Contact />
        </div>
      </div>
    )
  }
}

export default Dev
