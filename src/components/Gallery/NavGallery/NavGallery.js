import React, { PropTypes } from 'react'

import './NavGallery.css'

import js from '../../../assets/langIcons/javascript.svg'
import node from '../../../assets/langIcons/node.svg'
import react from '../../../assets/langIcons/react.svg'
import css from '../../../assets/langIcons/css.svg'

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <nav className="GallaryNav">
        <i className="fa fa-arrow-left fa-2x arrow" aria-hidden="true" />
        <div className="navWrap">
          <img className="navImg navBg" src={css} alt="CSS Projects" />
        </div>
        <div className="navWrap">
          <img className="navImg navBg" src={js} alt="JavaScript Projects" />
        </div>
        <div className="navWrap">
          <img className="navBg" id="navReact" src={react} alt="React Projects" />
        </div>
        <div className="navWrap">
          <img className="navImg navBg" src={node} alt="nodeJS Projects" />
        </div>
        <i className="fa fa-arrow-right fa-2x arrow" aria-hidden="true" />
      </nav>
    )
  }
}

{
  /* <BrowserRouter>
  <Switch>
    <Route path="/CSSGallery" component={CSSGallery} />
    <Route path="/JSGallery" component={JSGallery} />
    <Route path="/ReactGallery" component={ReactGallery} />
    <Route path="/NodeGallery" component={NodeGallery} />
    <Route path="/BootStrap" component={App} />
  </Switch>
</BrowserRouter> */
}
