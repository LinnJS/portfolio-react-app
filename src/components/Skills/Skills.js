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
          <img className="hex" src={htmlHex} alt="HTML5" />
          <img className="hex" src={cssHex} alt="CSS3" />
          <img className="hex" src={jsHex} alt="JavaScript" />
          <img className="hex" src={reactHex} alt="React" />
          <img className="hex" src={gitHex} alt="Git" />
        </div>

        <div className="midRow1 skillCard">
          <h4>Intermediate</h4>
          <img className="hex" src={jqueryHex} alt="jQuery" />
          <img className="hex" src={nodeHex} alt="NodeJS" />
          <img className="hex" src={expressHex} alt="ExpressJS" />
        </div>

        <div className="novRow1 skillCard">
          <h4>Novice</h4>
          <img className="hex" src={reduxHex} alt="Redux" />
          <img className="hex" src={jestHex} alt="Jest" />
          <img className="hex" src={webpackHex} alt="Webpack" />
        </div>

        <div className="learnRow1 skillCard">
          <h4>Learning Next</h4>
          <img className="hex" src={meteorHex} alt="MeteorJS" />
          <img className="hex" src={sketchHex} alt="Sketch" />
          <img className="hex" src={sassHex} alt="Sass" />
          <img className="hex" src={swiftHex} alt="Swift" />
        </div>
      </div>
    )
  }
}

export default Skills