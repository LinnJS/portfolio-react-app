import React, { Component } from 'react';
import './Dev.css';
import headshot from '../../assets/headshot.jpg';
import Contact from '../Contact/Contact';

class Dev extends Component {
  render() {
    return (
      <div className="card" id="devCard">
        <img className="headshot" src={headshot} alt=" The Developer" />
        <div className="aside">
          <h3>About The Developer</h3>
          <p>
            I am a value-driven tech entrepreneur who is relentless in the pursuit of creative problem solving and overcoming obstacles as a team. I love to collaborating on a open minded team to improve overall user interaction and experience.  I enjoy using the latest JavaScript based technologies such as React, Redux, and GraphQL. I am a very adaptive developer who can rapidly learn to complete objectives with passion, and enthusiasm.
          </p>
          <p>
            Another huge advantage of having me on your team is that I can also double as a UI/UX Designer who can rapidly design, and prototype using technologies such as Sketch, and InVision Studio.
          </p>
          <Contact />
        </div>
      </div>
    );
  }
}

export default Dev;
