import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import ENAOFFICIALSITE from './views/ena-official-site'
import ENAOFFICIALSITEAbout from './views/ena-official-site-about'
import ENAOFFICIALSITENews from './views/ena-official-site-news'
import ENAOFFICIALSITEWorks from './views/ena-official-site-works'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={ENAOFFICIALSITE} exact path="/" />
        <Route
          component={ENAOFFICIALSITEAbout}
          exact
          path="/ena-official-site-about"
        />
        <Route
          component={ENAOFFICIALSITENews}
          exact
          path="/ena-official-site-news"
        />
        <Route
          component={ENAOFFICIALSITEWorks}
          exact
          path="/ena-official-site-works"
        />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
