import React, { PropTypes } from 'react';
import './galleries.css';

import apple from '../../../assets/icons/apple.png';
import iBeer from '../../../assets/icons/iBeer.png';
import pottery from '../../../assets/icons/potterylogo.png';

export default class CSSGallery extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="itemWrapper">
        <div className="item">
          <a href="https://jslinn727.github.io/flexboxAppleSite/" target="_blank">
            <img className="itemImg" src={apple} alt="Apple Mockup Site" />
          </a>
          <h5>Apple Mock Site</h5>
          <p>Apple landing page mockup.</p>
        </div>
        <div className="item">
          <a href="https://jslinn727.github.io/iBeer-flexbox/" target="_blank">
            <img className="itemImg" src={iBeer} alt="iBeer Site" />
          </a>
          <h5>iBeer</h5>
          <p>A fun site utilizes flex-box. Beer themed with inspiration from Jonathan Goldsmith.</p>
        </div>
        <div className="item">
          <a href="https://jslinn727.github.io/potteryPage/index.html" target="_blank">
            <img className="itemImg" src={pottery} alt="Pottery Page" />
          </a>
          <h5>Pottery Page</h5>
          <p>Pottery page is a mock site for a pottery site. Using a complexed flexbox layout.</p>
        </div>
      </div>
    );
  }
}
