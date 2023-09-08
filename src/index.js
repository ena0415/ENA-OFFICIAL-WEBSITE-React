import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import NotFound from './views/not-found'
import ENAOFFICIALWEBSITE from './views/ena-official-web-site'
import ENAOFFICIALWEBSITEAbout from './views/ena-official-web-site-about'
import ENAOFFICIALWEBSITENews from './views/ena-official-web-site-news'
import ENAOFFICIALWEBSITEWorks from './views/ena-official-web-site-works'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={NotFound} path="**" />
        <Route component={ENAOFFICIALWEBSITE} exact path="/" />
        <Route
          component={ENAOFFICIALWEBSITEAbout}
          exact
          path="/ena-official-web-site-about"
        />
        <Route
          component={ENAOFFICIALWEBSITENews}
          exact
          path="/ena-official-web-site-news"
        />
        <Route
          component={ENAOFFICIALWEBSITEWorks}
          exact
          path="/ena-official-web-site-works"
        />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
