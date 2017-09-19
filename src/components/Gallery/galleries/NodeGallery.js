import React, { PropTypes } from 'react'
import './galleries.css'

import ciaIcon from './icons/ciaIcon.png'
import stickyNoteIcon from './icons/stickyNoteIcon.png'

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
        <div className="item">
          <a href="https://todo-stickynote.herokuapp.com/" target="_blank">
            <img className="itemImg" src={stickyNoteIcon} alt="CIAThemedHangman" />
          </a>
          <h5>Sticky Note</h5>
          <p>Sticky Note is a ToDo List app, great way to get the day started, and prioritize task.</p>
        </div>
      </div>
    )
  }
}
