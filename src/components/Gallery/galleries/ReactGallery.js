import React, { PropTypes } from 'react';
import './galleries.css';

import swicon from './icons/swicon.png';
import dali from './icons/dali.png';

export default class ReactGallery extends React.Component {
  render() {
    return (
      <div className="ReactGallery">
        <div className="item">
          <a href="https://jslinn727.github.io/intelli-guide/" target="_blank">
            <img className="itemImg" src={dali} alt="Star Wars Vehicles" />
          </a>
          <h5>IntelliGuide</h5>
          <p>
            Museum audioguide platform branded for The Dali Museum. Made with React front-end, Node screen scraper, and
            FireBaseDB.
          </p>
        </div>
        <div className="item">
          <a href="https://jslinn727.github.io/starwarsReactApp/" target="_blank">
            <img className="itemImg" src={swicon} alt="Star Wars Vehicles" />
          </a>
          <h5>Star Wars Vehicles Encyclopedia</h5>
          <p>This app uses React to pull data from the SWAPI and displays stats on all vehicles.</p>
        </div>
      </div>
    );
  }
}
