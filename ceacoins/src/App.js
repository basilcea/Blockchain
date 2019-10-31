import React from 'react';
import logo from './logo.svg';
import Home from './views/home';
import Mine from './views/mine';
import Wallet from './views/wallet';
import {Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Route  exact path ='/' component={Home}/>
      <Route  path ='/mine' component={Mine}/>
      <Route  path='/wallet' component={Wallet}/>
    </div>
  );
}

export default App;
