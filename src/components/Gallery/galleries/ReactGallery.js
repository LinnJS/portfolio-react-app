import React, { PropTypes } from 'react'
import './galleries.css'

import swicon from './icons/swicon.png'

export default class ReactGallery extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="itemWrapper">
        <div className="item">
          <a href="https://jslinn727.github.io/starwarsReactApp/" target="_blank">
            <img className="itemImg" src={swicon} alt="Star Wars Vehicles" />
          </a>
          <h5>Star Wars Vehicles Encyclopedia</h5>
          <p>This app uses React to pull data from the SWAPI and displays stats on all vehicles.</p>
        </div>
      </div>
    )
  }
}
