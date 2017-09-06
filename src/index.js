import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App/App'
import registerServiceWorker from './registerServiceWorker'

const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

render()
registerServiceWorker()

if (module.hot) {
  module.hot.accept('./components/App/App', render)
}
