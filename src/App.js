import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage.js'
import ShopPage from './Pages/ShopPage'
import SigninModalPage from './Pages/SigninModalPage'
import SignupModalPage from './Pages/SignupModalPage'
import './App.css';


function App() {
  return (
    <div>
      <Router>
        <Route path='/' component={HomePage} exact/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/sign-in-your-details' component={SigninModalPage} />
        <Route path='/create-an-account' component={SignupModalPage}/>

      </Router>
    </div>
  );
}

export default App;
