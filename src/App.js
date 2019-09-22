import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Login from './pages/Login/Login.jsx';
import ProtectedComponent from './hoc/ProtectedComponent';

function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Redirect exact path="/" to="/dashboard" />
      <ProtectedComponent path="/dashboard" component={Dashboard} />
    </Switch>
    
  );
}

export default App;
