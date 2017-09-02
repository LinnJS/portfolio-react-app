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
      <nav>
        <img className="navImg" src={css} alt="CSS Projects" />
        <img className="navImg" src={js} alt="JavaScript Projects" />
        <img id="navReact" src={react} alt="React Projects" />
        <img className="navImg" src={node} alt="nodeJS Projects" />
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
