import React, { Component } from 'react'
import '../layouts/index.js'
import '../layouts/metaData.js'
import Navigation from '../components/Navigation'

export default class Other extends Component {
  render() {
    return (
      <div>
        {/* <MetaTags>
          <title>Home</title>
          <meta name="google" content="notranslate" />
        </MetaTags>

        <Navigation page={'home'} /> */}
        <div className="App">
          <div className="wrapper">
            <Navigation className="navComponent projectsNav" />
            <div className="projectPageContainer"></div>
          </div>
        </div>
      </div>
    )
  }
}
