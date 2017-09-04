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
            <div className="Gallery">
              <NavGallery />
              <p>
                Occaecat quis ex quis consequat ea labore culpa veniam excepteur nulla consequat cillum commodo
                incididunt. Occaecat aliqua sunt veniam fugiat laboris dolor ea et deserunt ullamco consectetur
                consectetur pariatur magna sint. Enim commodo excepteur mollit officia minim eiusmod est pariatur et ea
                id non est exercitation aliquip incididunt consectetur. Adipisicing labore consectetur laboris laboris
                velit incididunt reprehenderit laboris do laborum ullamco nostrud incididunt. Mollit laboris mollit
                minim quis voluptate ipsum do duis laborum aute. Dolore ad ad consequat exercitation occaecat aute ex id
                pariatur sunt excepteur excepteur est reprehenderit consectetur consectetur. Consectetur magna ullamco
                minim proident voluptate ullamco ut excepteur aliqua non adipisicing sint fugiat in. Eiusmod Lorem
                dolore culpa eiusmod sint cupidatat quis incididunt. Tempor occaecat tempor esse occaecat pariatur
                occaecat nostrud Lorem adipisicing dolore tempor qui. Et laboris tempor magna mollit sint sint do nisi.
                Non Lorem nisi ipsum dolor Lorem mollit laboris enim consequat do ea ipsum cupidatat in dolor. Aliquip
                non ut culpa ex nulla ea elit aliqua proident. Proident id nulla dolor labore adipisicing ad velit sint
                ea cillum consectetur officia exercitation ea aliquip amet. Veniam officia ea anim non cupidatat
                pariatur amet culpa exercitation tempor culpa deserunt. Consectetur non id nisi et pariatur magna et
                officia enim ad ut cupidatat nulla voluptate enim magna. Excepteur deserunt dolore et dolor do culpa
                fugiat commodo ea occaecat laborum. Dolore ad ea magna et eiusmod enim magna laborum ullamco. Duis
                mollit laborum anim occaecat reprehenderit do incididunt Lorem dolore do do sint. Officia enim officia
                et mollit pariatur ullamco pariatur tempor labore amet nisi cillum anim exercitation fugiat occaecat
                ipsum. Laboris mollit laborum do aute excepteur mollit ut qui pariatur eu. Duis quis qui adipisicing
                labore in deserunt incididunt anim amet. Consectetur aute eu incididunt cillum magna aliqua exercitation
                laborum veniam minim.
              </p>
            </div>
          </div>
        </Layout>
      </div>
    )
  }
}
