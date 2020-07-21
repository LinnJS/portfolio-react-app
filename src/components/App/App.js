import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import Dev from "../Developer/Dev";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Landing from "../Landing/Landing";
import Gallery from "../Gallery/Gallery";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Landing />
          <Layout>
            <div className="cardWrapper">
              <Dev />
              <Skills />
            </div>
            <Projects />
          </Layout>
          <Route path="/gallery" component={Gallery} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
