import React, { PropTypes } from 'react'
import './galleries.css'

import swicon from './icons/itunes.png'

export default class JSGallery extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      //<div className="itemWrapper">
      <div className="item">
        <a href="http://venomous-hose.surge.sh/" target="_blank">
          <img className="itemImg" src={swicon} alt="Star Wars Vehicles" />
        </a>
        <h5>iTunes Music Search</h5>
        <p>Used the iTunes API to search, and play back music samples.</p>
        <p>(Currently only available on Chrome)</p>
      </div>
      //</div>
    )
  }
}
