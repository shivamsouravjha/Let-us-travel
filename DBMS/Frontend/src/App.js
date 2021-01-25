import React from 'react';
import { BrowserRouter as Router,Route,Redirect,Switch } from 'react-router-dom';
import Users from './users/pages/Users';
import Newplace from './places/pages/NewPlace';

function App() {
  return (<Router>
    <Switch>
    <Route path="/" exact>
      <Users />
    </Route>
    <Route path ="/places/new" exact>
      <Newplace />
    </Route>
   <Redirect to ="/" />
   </Switch>
  </Router>);
};

export default App;
