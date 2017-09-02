import React, { PropTypes } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavGallery from './NavGallery/NavGallery.js'

import Projects from '../Projects/Projects'
import Layout from '../Layout/Layout'

export default class Gallery extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <div className="cardWrapper">
            <div className="">
              <NavGallery />
            </div>
          </div>
        </Layout>
      </div>
    )
  }
}
