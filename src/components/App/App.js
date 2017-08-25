import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Layout from '../Layout/Layout.js'
import Dev from '../Developer/Dev.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Dev />
          <p>
            Enim adipisicing laboris laboris occaecat ea Lorem non dolor ad laboris eiusmod occaecat deserunt nisi in.
            Eu culpa qui sint labore sit culpa qui exercitation ut consectetur aute dolor. Qui do culpa exercitation
            pariatur dolor consectetur veniam pariatur duis ut proident culpa ea. Culpa ex irure esse minim ea voluptate
            adipisicing ut anim laboris in. Eiusmod sit ad ut velit culpa irure laborum in tempor culpa laboris sunt
            dolor non adipisicing. Cillum amet consequat aliqua aliqua sit commodo consequat minim nulla anim aliqua
            consectetur pariatur proident eiusmod deserunt. Sint mollit voluptate fugiat est cillum sit non ut elit et.
            Nulla sunt laborum cillum deserunt ad elit proident laborum deserunt irure labore ut aliqua quis. Voluptate
            nisi mollit velit exercitation dolore dolor fugiat ullamco aliquip pariatur exercitation labore eiusmod
            fugiat aute ullamco. Consequat laborum irure id exercitation esse qui magna esse in culpa id est non. Ex
            irure consectetur labore quis anim do officia duis dolore sunt officia eu. Nostrud minim sint voluptate
            tempor nulla sunt nostrud irure. Ullamco ad eu duis amet esse exercitation commodo ad eiusmod. Elit amet ut
            culpa elit consectetur proident irure voluptate veniam reprehenderit ut mollit cillum amet. Officia sit ea
            officia culpa Lorem non est aliquip amet culpa quis nisi Lorem laboris. Sint irure deserunt Lorem officia
            cupidatat veniam elit magna laborum ipsum ullamco id aliqua anim tempor est. Fugiat aliqua Lorem consectetur
            sunt aliqua voluptate laboris elit ut consequat. Amet consectetur qui sint ullamco id consequat commodo
            Lorem proident anim dolor deserunt aliqua nulla. Anim irure officia laborum enim aute magna culpa magna
            reprehenderit et labore esse velit fugiat. Id do laborum nisi deserunt Lorem consequat laboris enim non
            fugiat laboris. In non mollit ex cillum anim laboris culpa esse dolore.
          </p>
        </Layout>
      </div>
    )
  }
}

export default App
