import React from 'react';
import { BrowserRouter as Router,Route,Redirect,Switch } from 'react-router-dom';
import Users from './users/pages/Users';
import mainnavigation from './shared/Components/Navigation/mainnavigation';
import Newplace from './places/pages/NewPlace';

function App() {
  return (<Router>
    <mainnavigation />
    <main>
      <Switch>
        <Route path="/" exact>
           <Users />
        </Route>
        <Route path ="/places/new" exact>
          <Newplace />
        </Route>
        <Redirect to ="/" />
      </Switch>
    </main>
  </Router>);
};

export default App;
