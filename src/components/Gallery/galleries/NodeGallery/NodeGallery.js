import React, { PropTypes } from 'react'
import './NodeGallery.css'

import ciaIcon from '../icons/ciaIcon.png'

export default class NodeGallery extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="itemWrapper">
        <div className="item">
          <a href="https://hangman-cia.herokuapp.com/" target="_blank">
            <img className="itemImg" src={ciaIcon} alt="CIAThemedHangman" />
          </a>
          <h5>CIA Hangman</h5>
          <p>CIA themed letter guessing game, try and guess the password in eight tries!</p>
        </div>
      </div>
    )
  }
}
