import React, { PropTypes } from 'react'
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
            <div className="card">
              <h3>App Gallery</h3>
            </div>
          </div>
        </Layout>
      </div>
    )
  }
}
