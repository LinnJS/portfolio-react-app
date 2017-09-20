import React, { PropTypes } from 'react'
import './Landing.css'
import Contact from '../Contact/Contact'

const style = {
  color: '#fefefd'
}

export default class Landing extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="landing">
        <div className="title">
          <h1>Justin Linn</h1>
          <h2>Full Stack Software Developer</h2>
          <Contact style={style} />
        </div>
      </div>
    )
  }
}