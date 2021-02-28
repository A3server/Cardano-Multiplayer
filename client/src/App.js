import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import HomePage from "./HomePage";
import Play from "./game/main"

const App = () => {
  //const useAuth = React.useContext(AuthContext);

  return (
    <Router>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/play">
          <Play />
        </Route>

        <Route exact path="/game">
          <HomePage />
        </Route>
    </Router>
  );
  
};

export default App;