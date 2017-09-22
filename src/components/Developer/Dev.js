import React, { Component } from 'react'
import './Dev.css'
import headshot from '../../assets/headshot.jpg'
import Contact from '../Contact/Contact'

class Dev extends Component {
  render() {
    return (
      <div className="card" id="devCard">
        <img className="headshot" src={headshot} alt="Picture of the Developer" />
        <div className="aside">
          <h3>About The Developer</h3>
          <p>
            Justin is an entrepreneurial-minded young buck eager to make his mark in the technology industry. He is a
            goal-oriented value-driven developer who loves to make life easier, so we all can focus on the important
            things in life. Justin thrives under pressure and is relentless in the pursuit of creative problem-solving.
          </p>
          <p>
            Justin's favorite aspect of software development is making an intuitive UI that makes sense, and a seamless
            UX that makes users excited to use technology. He is also very adaptive and can complete many tasks on the
            backend to get the job done using popular frameworks. If you can think it Justin can learn it, and deliver
            the solution with passion.
          </p>
          <Contact />
        </div>
      </div>
    )
  }
}

export default Dev
