import React, { PropTypes } from 'react'
import { Route, Switch, Index } from 'react-router-dom'
import NavGallery from './NavGallery/NavGallery.js'
import './Gallery.css'

import Projects from '../Projects/Projects'
import Layout from '../Layout/Layout'

import NodeGallery from './galleries/NodeGallery'
import CSSGallery from './galleries/CSSGallery'
import ReactGallery from './galleries/ReactGallery'
import JSGallery from './galleries/JSGallery'

export default class Gallery extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <div className="cardWrapper">
            <div className="Gallery">
              <NavGallery />
              <div className="content">
                <Switch>
                  <Route path="/gallery/css" component={CSSGallery} />
                  <Route path="/gallery/js" component={JSGallery} />
                  <Route path="/gallery/node" component={NodeGallery} />
                  <Route path="/gallery/react" component={ReactGallery} />
                </Switch>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    )
  }
}
