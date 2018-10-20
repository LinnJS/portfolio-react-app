import React, { Component } from 'react';
import './galleries.css';

import apple from '../../../assets/icons/apple.png';
import iBeer from '../../../assets/icons/iBeer.png';
import pottery from '../../../assets/icons/potterylogo.png';

export default class CSSGallery extends Component {

  render() {
    return (
      <div className="itemWrapper">
        <div className="item">
          <a href="https://LinnJS.github.io/flexboxAppleSite/" rel="noopener noreferrer" target="_blank">
            <img className="itemImg" src={apple} alt="Apple Mockup Site" />
          </a>
          <h5>Apple Mock Site</h5>
          <p>Apple landing page mockup.</p>
        </div>
        <div className="item">
          <a href="https://LinnJS.github.io/iBeer-flexbox/" rel="noopener noreferrer" target="_blank">
            <img className="itemImg" src={iBeer} alt="iBeer Site" />
          </a>
          <h5>iBeer</h5>
          <p>A fun site utilizes flex-box. Beer themed with inspiration from Jonathan Goldsmith.</p>
        </div>
        <div className="item">
          <a href="https://LinnJS.github.io/potteryPage/index.html" rel="noopener noreferrer" target="_blank">
            <img className="itemImg" src={pottery} alt="Pottery Page" />
          </a>
          <h5>Pottery Page</h5>
          <p>Pottery page is a mock site for a pottery site. Using a complexed flexbox layout.</p>
        </div>
      </div>
    );
  }
}
