import React, { PropTypes } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavGallery from './NavGallery/NavGallery.js'
import './Gallery.css'

import Projects from '../Projects/Projects'
import Layout from '../Layout/Layout'

import NodeGallery from './galleries/NodeGallery/NodeGallery'

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
                <NodeGallery />
                <p>
                  Cupidatat reprehenderit aliqua laborum cillum voluptate nisi enim anim duis magna commodo voluptate
                  sunt exercitation. Tempor ea mollit culpa exercitation ullamco non esse pariatur ullamco. Velit
                  ullamco aliquip ipsum amet qui laboris anim aliquip culpa sint aliquip aliqua enim reprehenderit do.
                </p>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    )
  }
}
