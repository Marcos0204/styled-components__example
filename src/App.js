import React from 'react';
import GlobalStyles from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { NavBar } from './components'

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <NavBar/>
    </Router>
  )
}

export default App
