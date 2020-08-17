import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Switch, Route, BrowserRouter as Router} from 'react-router-dom'

import Game from './components/game/Game'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path=''>
            <Game/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
