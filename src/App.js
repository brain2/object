import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Employees from "./components/routes/Employees";
import Home from "./components/routes/Home/";
import NotFound from "./components/routes/NotFound/";

const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/object/employees" component={Employees} />
        <Route exact path="/object/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
