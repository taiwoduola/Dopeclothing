import React from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.comonent';
import Navs from './components/navigation/nav.component';

 
function App() {
  return (
    <div className="App">
      <Navs />
      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route  path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
