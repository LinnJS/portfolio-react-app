import React, { Component } from "react";
import "./galleries.css";

import swicon from "../../../assets/icons/swicon.png";
import dali from "../../../assets/icons/dali.png";
import LH from "../../../assets/icons/LHLogo.png";

export default class ReactGallery extends Component {
  render() {
    return (
      <div className="itemWrapper">
        <div className="item">
          <a href="https://LinnJS.github.io/intelli-guide/" rel="noopener noreferrer" target="_blank">
            <img className="itemImg" src={dali} alt="Dali App Logo" />
          </a>
          <h5>IntelliGuide</h5>
          <p>
            Museum audioguide platform branded for The Dali Museum. Made with React front-end, Node screen scraper, and FireBaseDB. (Mobile
            Only)
          </p>
        </div>
        <div className="item">
          <a href="http://livinglovingtampa.com/#/" rel="noopener noreferrer" target="_blank">
            <img className="itemImg" src={LH} alt="Star Wars Vehicles" />
          </a>
          <h5>Vue Splash Page</h5>
          <p>Splash page made for Linebaugh + Holt Real Estate. Made using VueJS Framework.</p>
        </div>
        <div className="item">
          <a href="https://LinnJS.github.io/starwarsReactApp/" rel="noopener noreferrer" target="_blank">
            <img className="itemImg" src={swicon} alt="Star Wars Vehicles" />
          </a>
          <h5>Star Wars Vehicles Encyclopedia</h5>
          <p>This app uses React to pull data from the SWAPI and displays stats on all vehicles.</p>
        </div>
      </div>
    );
  }
}
