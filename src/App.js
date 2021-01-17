import React from 'react';
import './App.css'; 
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";

import Home from './pages';
import Downloadpage from './pages/Download';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/myResume" component={Home} exact/>
        <Route path="/download" component={Downloadpage} exact/>
      </Switch>
    
    </Router>
  );
}

export default App;
