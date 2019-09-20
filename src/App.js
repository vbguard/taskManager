import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Login from './pages/Login/Login.jsx';
import ProtectedComponent from './hoc/ProtectedComponent';

function App() {
  return (
    <Switch>
      <Redirect exact path="/" to="/dashboard" />
      <ProtectedComponent active={false} path="/login" component={Login} />
      <ProtectedComponent active={true} path="/dashboard" component={Dashboard} />
    </Switch>
  );
}

export default App;
