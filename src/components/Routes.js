import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Detail, Like, Search, List, About } from "../pages";

const AppRouter = () => {
  return (
    <Router basename="/movieTM">
      <Switch>
        <>
          <Route exact path="/" component={Home} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/like" component={Like} />
          <Route path="/search" component={Search} />
          <Route path="/list" component={List} />
          <Route path="/about" component={About} />
        </>
      </Switch>
    </Router>
  );
};
export default AppRouter;
