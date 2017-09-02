import React, { Component } from 'react'
import './Projects.css'
import js from '../../assets/langIcons/javascript.svg'
import node from '../../assets/langIcons/node.svg'
import react from '../../assets/langIcons/react.svg'
import bootstrap from '../../assets/langIcons/bootstrap.svg'
import pg from '../../assets/langIcons/sqlpg.svg'
import css from '../../assets/langIcons/css.svg'

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <h3>Projects</h3>
        <div className="projectsWrapper">
          <div className="iconWrap">
            <a href="#" target="_blank">
              <img className="projectImg" id="css" src={css} alt="CSS3" />
            </a>
          </div>
          <div className="iconWrap">
            <a href="https://github.com/JSLinn727/blackJackCalculator/tree/master/scripts" target="_blank">
              <img className="projectImg" id="js" src={js} alt="JavaScript" />
            </a>
          </div>
          <div className="iconWrap">
            <a href="https://hangman-cia.herokuapp.com/" target="_blank">
              <img className="projectImg" id="node" src={node} alt="nodeJS" />
            </a>
          </div>
          <div className="iconWrap">
            <a href="#" target="_blank">
              <img className="projectImg" id="react" src={react} alt="React" />
            </a>
          </div>
          <div className="iconWrap">
            <a href="#" target="_blank">
              <img className="projectImg" id="bs" src={bootstrap} alt="BootStrap" />
            </a>
          </div>
          {/* <div className="iconWrap">
            <a href="#" target="_blank">
              <img className="projectImg" id="sql" src={pg} alt="SQLPG" />
            </a>
          </div> */}
        </div>
      </div>
    )
  }
}

export default Projects
