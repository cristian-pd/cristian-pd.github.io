/*import React from "react";
import "./App.scss";
import Main from "./containers/Main";

function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;*/

import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./containers/Main";
import Page404 from "./pages/Page404";
import DOProj from "./pages/doproj";
import TFGProj from "./pages/tfgproj";
import TCProj from "./pages/tcproj";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/doproj" component={DOProj} />
        <Route exact path="/tfgproj" component={TFGProj} />
        <Route exact path="/tcproj" component={TCProj} />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;