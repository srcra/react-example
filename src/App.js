
import './App.css';
import React from "react";
import Portafolio from './pages/Portafolio';
import Error from './pages/Error404';
import Home from './pages/Home';
import Ubicacion from './pages/Ubicacion';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div >
    <Router>
      <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/portafolio">
        <Portafolio/>
      </Route>

      <Route exact path="/ubicacion">
        <Ubicacion/>
      </Route>

      <Route path="*">
          <Error/>
      </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
