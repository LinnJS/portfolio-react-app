import React, { PropTypes } from 'react'
import './galleries.css'

import swicon from './icons/itunes.png'
import themeSwitcher from './icons/themeSwitcher.png'

export default class JSGallery extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="itemWrapper">
        <div className="item">
          <a href="http://venomous-hose.surge.sh/" target="_blank">
            <img className="itemImg" src={swicon} alt="Star Wars Vehicles" />
          </a>
          <h5>iTunes Music Search</h5>
          <p>Used the iTunes API to search, and play back music samples.</p>
          <p>(Currently only available on Chrome)</p>
        </div>
        <div className="item">
          <a href="https://jslinn727.github.io/themeSwitcher/" target="_blank">
            <img className="itemImg" src={themeSwitcher} alt="Theme Switcher App" />
          </a>
          <h5>Theme Switcher</h5>
          <p>Simple theme switcher app. Choose between Kittens, Neo Tokyo, or the Heavy Metal Themes.</p>
        </div>
      </div>
    )
  }
}