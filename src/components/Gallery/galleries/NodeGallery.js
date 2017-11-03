import React, { PropTypes } from 'react';
import './galleries.css';

import ciaIcon from '../../../assets/icons/ciaIcon.png';
import stickyNoteIcon from '../../../assets/icons/stickyNoteIcon.png';
import droid from '../../../assets/icons/droidIcon.png';

export default class NodeGallery extends React.Component {
  constructor(props) {
    super(props);
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
        <div className="item">
          <a href="https://todo-stickynote.herokuapp.com/" target="_blank">
            <img className="itemImg" src={stickyNoteIcon} alt="CIAThemedHangman" />
          </a>
          <h5>Sticky Note</h5>
          <p>Sticky Note is a ToDo List app, great way to get the day started, and prioritize task.</p>
        </div>
        <div className="item">
          <a href="https://droid-directory.herokuapp.com/" target="_blank">
            <img className="itemImg" src={droid} alt="Droid Directory" />
          </a>
          <h5>Droid Directory</h5>
          <p>Node Droid Directory using ExpressJS. Look around and see what droids are available for hire!</p>
        </div>
      </div>
    );
  }
}
