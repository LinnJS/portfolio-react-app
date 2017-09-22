import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

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
          <NavLink className="iconWrap" to="/gallery/css" activeClassName="active">
            <img className="projectImg" src={css} alt="CSS3" />
          </NavLink>
          <NavLink className="iconWrap" to="/gallery/js" activeClassName="active">
            <img className="projectImg" src={js} alt="JavaScript" />
          </NavLink>
          <NavLink className="iconWrap" to="/gallery/react" activeClassName="active">
            <img className="projectImg react" src={react} alt="React" />
          </NavLink>
          <NavLink className="iconWrap" to="/gallery/node" activeClassName="active">
            <img className="projectImg" src={node} alt="nodeJS" />
          </NavLink>
          {/* <div className="iconWrap">
            <a href="#" target="_blank">
              <img className="projectImg" id="bs" src={bootstrap} alt="BootStrap" />
            </a>
          </div> */}
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
