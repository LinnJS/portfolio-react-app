import React, { PropTypes } from 'react';
import './galleries.css';

import swicon from '../../../assets/icons/itunes.png';
import themeSwitcher from '../../../assets/icons/themeSwitcher.png';
import calcJS from '../../../assets/icons/calcJS.png';

export default class JSGallery extends React.Component {
  render() {
    return (
      <div className="itemWrapper">
        <div className="item">
          <a href="https://jslinn727.github.io/CalcJS/" target="_blank">
            <img className="itemImg" src={calcJS} alt="CalcJS" />
          </a>
          <h5>JavaScript Calculator</h5>
          <p>Simple calculator made with HTML, CSS, and JavaScript.</p>
        </div>
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
    );
  }
}
