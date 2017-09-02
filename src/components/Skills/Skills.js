import React, { Component } from 'react'
import './Skills.css'

// Pro
import htmlHex from '../../assets/hexIcons/htmlHex.png'
import cssHex from '../../assets/hexIcons/cssHex.png'
import jsHex from '../../assets/hexIcons/jsHex.png'
import reactHex from '../../assets/hexIcons/reactHex.png'
import gitHex from '../../assets/hexIcons/gitHex.png'

// Mid
import nodeHex from '../../assets/hexIcons/nodeHex.png'
import jqueryHex from '../../assets/hexIcons/jqueryHex.png'
import expressHex from '../../assets/hexIcons/expressHex.png'

// Nov
import reduxHex from '../../assets/hexIcons/reduxHex.png'
import jestHex from '../../assets/hexIcons/jestHex.png'
import webpackHex from '../../assets/hexIcons/webpackHex.png'

// Learning
import meteorHex from '../../assets/hexIcons/meteorHex.png'
import sketchHex from '../../assets/hexIcons/sketchHex.png'
import swiftHex from '../../assets/hexIcons/swiftHex.png'
import sassHex from '../../assets/hexIcons/sassHex.png'

class Skills extends Component {
  render() {
    return (
      <div className="skillsWrapper">
        <h3>Skills</h3>

        <div className="proRow1 skillCard">
          <h4>Proficient</h4>
          <img className="hex" src={htmlHex} alt="JavaScript Hexigon Icon" />
          <img className="hex" src={cssHex} alt="JavaScript Hexigon Icon" />
          <img className="hex" src={jsHex} alt="JavaScript Hexigon Icon" />
          <img className="hex" src={reactHex} alt="JavaScript Hexigon Icon" />
          <img className="hex" src={gitHex} alt="JavaScript Hexigon Icon" />
        </div>

        <div className="midRow1 skillCard">
          <h4>Intermediate</h4>
          <img className="hex" src={jqueryHex} alt="JavaScript Hexigon Icon" />
          <img className="hex" src={nodeHex} alt="JavaScript Hexigon Icon" />
          <img className="hex" src={expressHex} alt="JavaScript Hexigon Icon" />
        </div>

        <div className="novRow1 skillCard">
          <h4>Novice</h4>
          <img className="hex" src={reduxHex} alt="JavaScript Hexigon Icon" />
          <img className="hex" src={jestHex} alt="JavaScript Hexigon Icon" />
          <img className="hex" src={webpackHex} alt="JavaScript Hexigon Icon" />
        </div>

        <div className="learnRow1 skillCard">
          <h4>Learning Next</h4>
          <img className="hex" src={meteorHex} alt="JavaScript Hexigon Icon" />
          <img className="hex" src={sketchHex} alt="JavaScript Hexigon Icon" />
          <img className="hex" src={sassHex} alt="JavaScript Hexigon Icon" />
          <img className="hex" src={swiftHex} alt="JavaScript Hexigon Icon" />
        </div>
      </div>
    )
  }
}

export default Skills
