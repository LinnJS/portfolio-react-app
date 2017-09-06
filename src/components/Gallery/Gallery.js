import React, { PropTypes } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavGallery from './NavGallery/NavGallery.js'
import './Gallery.css'

import Projects from '../Projects/Projects'
import Layout from '../Layout/Layout'

import NodeGallery from './galleries/NodeGallery/NodeGallery'
import CSSGallery from './galleries/CSSGallery/CSSGallery'

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
                <CSSGallery />
                <NodeGallery />
              </div>
            </div>
          </div>
        </Layout>
      </div>
    )
  }
}
