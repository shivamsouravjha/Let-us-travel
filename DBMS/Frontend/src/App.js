import React from 'react';
import { BrowserRouter as Router,Route,Redirect,Switch } from 'react-router-dom';
import Users from './users/pages/Users';
import Newplace from './places/pages/NewPlace';
import UserPlaces from './places/pages/userplaces';
import MainNVIGATION from './shared/Components/Navigation/mainnavigation';
function App() {
  return (<Router>
    <MainNVIGATION />
    <main>
      <Switch>
        <Route path="/" exact>
           <Users />
        </Route>
        <Route path="/:userId/places">
          <UserPlaces />
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
