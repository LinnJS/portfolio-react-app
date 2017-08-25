import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Layout from '../Layout/Layout'
import Dev from '../Developer/Dev'
import Skills from '../Skills/Skills'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Dev />
          <Skills />
        </Layout>
      </div>
    )
  }
}

export default App
