import React from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

import { isAuthenticated } from "./services/auth";
import SignUp from './pages/Login/SignUp';
import SignIn from './pages/Login/SignIn';
import Logout from './pages/Login/Logout';
import Main from './components/Layout/Main';
import Task from './pages/Login/Task';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props =>
      isAuthenticated() 
      ? (<Component {...props} />) 
      : (<Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route exact path="/logout" component={Logout} />
      <PrivateRoute path="/tarefas" component={Main} />
      <PrivateRoute path="/novatask" component={Task} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
