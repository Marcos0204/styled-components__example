import React from 'react';
import GlobalStyles from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { NavBar, Footer } from './components'
import Home from './pages/HomePages/Home';
import Products from './pages/Products/Products';
import Services from './pages/Services/Services';
import SignUp from './pages/SignUp/SignUp';

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Home}  />
        <Route exact path='/products' component={Products}  />
        <Route exact path='/services' component={Services}  />
        <Route exact path='/sign-up' component={SignUp}  />
      </Switch>
      <Footer/>
    </Router>
  )
}

export default App
