import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./NavGallery.css";

import js from "../../../assets/langIcons/javascript.svg";
import node from "../../../assets/langIcons/node.svg";
import react from "../../../assets/langIcons/react.svg";
import css from "../../../assets/langIcons/css.svg";

export default class MyComponent extends Component {
  render() {
    return (
      <nav className="GalleryNav">
        {/* <i className="fa fa-arrow-left fa-2x arrow" onClick={navToggleLeft}  aria-hidden="true" /> */}
        <NavLink activeClassName="active" to="/gallery/css">
          <img className="navImg" src={css} alt="CSS Projects" />
        </NavLink>
        <NavLink activeClassName="active" to="/gallery/js">
          <img className="navImg" src={js} alt="JavaScript Projects" />
        </NavLink>
        <NavLink activeClassName="active" to="/gallery/react">
          <img className="navReact" src={react} alt="React Projects" />
        </NavLink>
        <NavLink activeClassName="active" to="/gallery/node">
          <img className="navImg" src={node} alt="nodeJS Projects" />
        </NavLink>
        {/* <i className="fa fa-arrow-right fa-2x arrow" onClick={navToggleRight} aria-hidden="true" /> */}
      </nav>
    );
  }
}
