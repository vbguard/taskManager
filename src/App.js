import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Login from './pages/Login/Login.jsx';
import ProtectedComponent from './hoc/ProtectedComponent';
import Task from './components/Task/Task.jsx';

function App() {
  return (
    <Switch>
      <Task/>
      <Redirect exact path="/" to="/dashboard" />
      <ProtectedComponent active={false} path="/login" component={Login} />
      <ProtectedComponent active={false} path="/dashboard" component={Dashboard} />
    </Switch>
  );
}

export default App;
