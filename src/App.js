import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Login from './pages/Login/Login.jsx';
import ProtectedComponent from './hoc/ProtectedComponent';
import Task from './components/Task/Task.jsx';

const task = {
  taskNumber: 1, taskHeader:'Подготовка документации',
  taskDescription:'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться',
  isLoop: true,
  loopDates:[10,17,21], 
  isComplete: true, 
  onEdit: ()=> {}, 
  onCompltete: ()=> {}
}

function App() {
  return (
    <Switch>
      <Task task={task}/>
      <Redirect exact path="/" to="/dashboard" />
      <ProtectedComponent active={false} path="/login" component={Login} />
      <ProtectedComponent active={false} path="/dashboard" component={Dashboard} />
    </Switch>
  );
}

export default App;
