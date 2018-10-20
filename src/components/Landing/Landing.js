import React, { Component } from 'react'
import './Landing.css'
import Contact from '../Contact/Contact'

const style = {
  color: '#fefefd'
};

export default class Landing extends Component {

  render() {
    return (
      <div className="landing">
        <div className="title">
          <h1>Justin Linn</h1>
          <h2>React Native, Redux, and GraphQL</h2>
          <h2>Software Developer</h2>
          <Contact style={style} />
        </div>
      </div>
    )
  }
}
