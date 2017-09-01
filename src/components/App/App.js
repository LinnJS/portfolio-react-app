import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Layout from '../Layout/Layout'
import Dev from '../Developer/Dev'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Gallery from '../Gallery/Gallery'
import Landing from '../Landing/Landing'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <Layout>
          <div className="cardWrapper">
            <Dev />
            <Skills />
          </div>
          <Projects />
        </Layout>
        <Gallery />
      </div>
    )
  }
}

export default App
