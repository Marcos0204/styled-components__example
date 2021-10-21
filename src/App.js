import React from 'react';
import GlobalStyles from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { NavBar, Footer } from './components'
import Home from './pages/HomePages/Home';

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Home}  />
      </Switch>
      <Footer/>
    </Router>
  )
}

export default App
