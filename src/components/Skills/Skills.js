import React, { Component } from 'react'
import './Skills.css'

class Skills extends Component {
  render() {
    return (
      <div className="card">
        <div className="skills">
          <h3>Skills</h3>

          <div className="bar">
            <div className="innerBar html" data-percent="90%">
              <h4>HTML5</h4>
            </div>
          </div>

          <div className="bar">
            <div className="innerBar css" data-percent="80%">
              <h4>CSS3</h4>
            </div>
          </div>

          <div className="bar">
            <div className="innerBar js" data-percent="60%">
              <h4>JavaScript</h4>
            </div>
          </div>

          <div className="bar">
            <div className="innerBar node" data-percent="50%">
              <h4>nodeJS</h4>
            </div>
          </div>

          <div className="bar">
            <div className="innerBar react" data-percent="50%">
              <h4>React</h4>
            </div>
          </div>

          <div className="bar">
            <div className="innerBar bootstrap" data-percent="40%">
              <h4>BootStrap</h4>
            </div>
          </div>

          <div className="bar">
            <div className="innerBar postgres" data-percent="40%">
              <h4>PostgreSQL</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills
