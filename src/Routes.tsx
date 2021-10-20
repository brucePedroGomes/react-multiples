import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";

export const Routes: React.FC = ({ children }) => {
  return (
    <BrowserRouter basename="react-multiples">
      {children}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};
