import React, { Component } from "react";
import { Element, animateScroll } from "react-scroll";
import { Route, Switch } from "react-router-dom";
import NavGallery from "./NavGallery/NavGallery.js";
import "./Gallery.css";

import Layout from "../Layout/Layout";

import NodeGallery from "./galleries/NodeGallery";
import CSSGallery from "./galleries/CSSGallery";
import ReactGallery from "./galleries/ReactGallery";
import JSGallery from "./galleries/JSGallery";

export default class Gallery extends Component {
  componentWillMount() {
    const { history } = this.props;
    this.unsubscribeFromHistory = history.listen(this._locationChange);
    this._locationChange(history.location);
  }

  componentWillUnmount() {
    if (this.unsubscribeFromHistory) this.unsubscribeFromHistory();
  }

  _locationChange = (location) => {
    if (location.pathname.startsWith("/gallery")) {
      animateScroll.scrollToBottom();
    }
  };

  render() {
    return (
      <Layout>
        <div className="cardWrapper">
          <div className="Gallery">
            <NavGallery />
            <Element name="gallery" className="content">
              <Switch>
                <Route path="/gallery/css" component={CSSGallery} />
                <Route path="/gallery/js" component={JSGallery} />
                <Route path="/gallery/node" component={NodeGallery} />
                <Route path="/gallery/react" component={ReactGallery} />
              </Switch>
            </Element>
          </div>
        </div>
      </Layout>
    );
  }
}
