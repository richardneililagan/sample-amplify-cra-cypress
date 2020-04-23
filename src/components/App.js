import React from 'react'
import { Helmet } from 'react-helmet'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from 'components/HomePage/HomePage'
import NotFoundPage from 'components/NotFoundPage/NotFoundPage'

// :: ---

function App() {
  return (
    <>
      <Helmet>
        <title>Qitaqits</title>
      </Helmet>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </>
  )
}

export default App
