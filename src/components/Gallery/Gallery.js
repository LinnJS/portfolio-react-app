import React, { PropTypes } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavGallery from './NavGallery/NavGallery.js'
import './Gallery.css'

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
            <div className="Gallery">
              <NavGallery />
              <div className="content">
                <p>
                  Reprehenderit anim consectetur nisi sunt nisi officia id fugiat deserunt sint et sint veniam labore.
                  Laboris eiusmod aliquip aute incididunt velit est nostrud labore labore sit dolore quis ipsum.
                  Consectetur mollit qui velit magna esse occaecat ullamco. Aliqua aute labore officia incididunt
                  occaecat nisi occaecat dolore duis aliqua reprehenderit pariatur sint officia est minim officia. Lorem
                  culpa fugiat non ea reprehenderit aliquip velit voluptate sint deserunt minim. Veniam nisi id ad
                  consequat deserunt laboris laboris aliquip do ex nulla magna occaecat incididunt pariatur qui. Irure
                  nisi veniam dolore ipsum sit dolore laborum commodo nulla Lorem eiusmod.
                </p>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    )
  }
}
