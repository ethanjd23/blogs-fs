import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Details from "./components/Details";
import Edit from "./components/Edit";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog/:id" component={Details} />
        <Route exact path="/edit/:id" component={Edit} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

export interface IBlog {
  title: string;
  id: number;
  content: string;
  name: string;
  tagid: number;
}