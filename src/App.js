/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import BarChartRepos from './views/BarChartRepos';
import LinearChartCommits from './views/LinearChartCommits'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <BarChartRepos />
        </Route>
      </Switch>
      <Switch>
        <Route path='/commits'>
          <LinearChartCommits />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
