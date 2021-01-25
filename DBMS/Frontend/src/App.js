import React from 'react';
import { BrowserRouter as Router,Route,Redirect } from 'react-router-dom';
import Users from './users/pages/Users';
import Newplace from './places/pages/NewPlace';

function App() {
  return <Router>
    <Route path="/" exact>
      <Users />
    </Route>
    <Route path ="/places/new" exact>
      <Newplace />
    </Route>
    <Redirect to ="/" />
  </Router>
}

export default App;
